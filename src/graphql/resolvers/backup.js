import { UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";
import fs from "fs";
import path from "path";
import mysql from "mysql2/promise";

const DB_CONFIG = {
  host: "localhost",
  port: 3306,
  database: "cdi_database",
  user: "root",
  password: "123456",
};

const BACKUPS_DIR = path.resolve(__dirname, "../../../backups");

function ensureBackupsDir() {
  if (!fs.existsSync(BACKUPS_DIR)) {
    fs.mkdirSync(BACKUPS_DIR, { recursive: true });
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

async function dumpDatabase(filePath) {
  const connection = await mysql.createConnection({
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    user: DB_CONFIG.user,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database,
    multipleStatements: true,
  });

  try {
    let dump = "";

    dump += "-- ============================================\n";
    dump += "-- MEDREC Database Backup\n";
    dump += `-- Generated: ${new Date().toISOString()}\n`;
    dump += `-- Database: ${DB_CONFIG.database}\n`;
    dump += "-- ============================================\n\n";

    dump += "SET FOREIGN_KEY_CHECKS = 0;\n";
    dump += "SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';\n";
    dump += "SET AUTOCOMMIT = 0;\n";
    dump += "START TRANSACTION;\n\n";

    dump += `CREATE DATABASE IF NOT EXISTS \`${DB_CONFIG.database}\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;\n`;
    dump += `USE \`${DB_CONFIG.database}\`;\n\n`;

    const [tables] = await connection.query("SHOW TABLES");
    const tableKey = `Tables_in_${DB_CONFIG.database}`;

    for (const tableRow of tables) {
      const tableName = tableRow[tableKey];
      console.log(`  📋 Dumping table: ${tableName}`);

      const [createResult] = await connection.query(`SHOW CREATE TABLE \`${tableName}\``);
      const createSQL = createResult[0]["Create Table"];

      dump += `-- ----------------------------------------\n`;
      dump += `-- Table: ${tableName}\n`;
      dump += `-- ----------------------------------------\n`;
      dump += `DROP TABLE IF EXISTS \`${tableName}\`;\n`;
      dump += createSQL + ";\n\n";

      const [rows] = await connection.query(`SELECT * FROM \`${tableName}\``);

      if (rows.length > 0) {
        const columns = Object.keys(rows[0]);
        const columnList = columns.map((c) => `\`${c}\``).join(", ");

        const batchSize = 100;
        for (let i = 0; i < rows.length; i += batchSize) {
          const batch = rows.slice(i, i + batchSize);
          const values = batch
            .map((row) => {
              const vals = columns.map((col) => {
                const val = row[col];
                if (val === null) return "NULL";
                if (val instanceof Date) return `'${val.toISOString().slice(0, 19).replace("T", " ")}'`;
                if (typeof val === "number") return val;
                if (Buffer.isBuffer(val)) return `X'${val.toString("hex")}'`;
                // Escape string values
                const escaped = String(val)
                  .replace(/\\/g, "\\\\")
                  .replace(/'/g, "\\'")
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/\t/g, "\\t")
                  .replace(/\0/g, "\\0");
                return `'${escaped}'`;
              });
              return `(${vals.join(", ")})`;
            })
            .join(",\n");

          dump += `INSERT INTO \`${tableName}\` (${columnList}) VALUES\n${values};\n`;
        }
        dump += "\n";
      }
    }

    dump += "COMMIT;\n";
    dump += "SET FOREIGN_KEY_CHECKS = 1;\n";

    // Write to file
    fs.writeFileSync(filePath, dump, "utf8");
  } finally {
    await connection.end();
  }
}

// Restore database using mysql2
async function restoreDatabase(filePath) {
  const sqlContent = fs.readFileSync(filePath, "utf8");

  const connection = await mysql.createConnection({
    host: DB_CONFIG.host,
    port: DB_CONFIG.port,
    user: DB_CONFIG.user,
    password: DB_CONFIG.password,
    multipleStatements: true,
  });

  try {
    await connection.query(sqlContent);
  } finally {
    await connection.end();
  }
}

export const Query = {
  listarRespaldos: authorize([], async () => {
    try {
      ensureBackupsDir();

      const files = fs
        .readdirSync(BACKUPS_DIR)
        .filter((f) => f.endsWith(".sql") && f.startsWith("medrec_"))
        .map((filename) => {
          const filePath = path.join(BACKUPS_DIR, filename);
          const stats = fs.statSync(filePath);
          return {
            filename,
            size: formatSize(stats.size),
            createdAt: stats.birthtime.toISOString(),
          };
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return files;
    } catch (error) {
      console.error("Error al listar respaldos:", error);
      throw new UserInputError("Error al listar respaldos");
    }
  }),
};

export const Mutation = {
  crearRespaldo: authorize([], async () => {
    try {
      ensureBackupsDir();

      const now = new Date();
      const timestamp = now
        .toISOString()
        .replace(/T/, "_")
        .replace(/:/g, "-")
        .replace(/\..+/, "");
      const filename = `medrec_${timestamp}.sql`;
      const filePath = path.join(BACKUPS_DIR, filename);

      console.log(`📦 Creando respaldo: ${filename}`);
      await dumpDatabase(filePath);

      if (!fs.existsSync(filePath)) {
        throw new Error("El archivo de respaldo no fue creado");
      }

      const stats = fs.statSync(filePath);
      console.log(`✅ Respaldo creado: ${filename} (${formatSize(stats.size)})`);

      return {
        filename,
        size: formatSize(stats.size),
        createdAt: stats.birthtime.toISOString(),
      };
    } catch (error) {
      console.error("Error al crear respaldo:", error);
      throw new UserInputError(error.message || "Error al crear respaldo");
    }
  }),

  restaurarRespaldo: authorize([], async (obj, { filename }) => {
    try {
      if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
        throw new Error("Nombre de archivo inválido");
      }

      const filePath = path.join(BACKUPS_DIR, filename);

      if (!fs.existsSync(filePath)) {
        throw new Error("El archivo de respaldo no existe");
      }

      console.log(`🔄 Restaurando respaldo: ${filename}`);
      await restoreDatabase(filePath);
      console.log(`✅ Respaldo restaurado: ${filename}`);

      return true;
    } catch (error) {
      console.error("Error al restaurar respaldo:", error);
      throw new UserInputError(error.message || "Error al restaurar respaldo");
    }
  }),

  eliminarRespaldo: authorize([], async (obj, { filename }) => {
    try {
      if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
        throw new Error("Nombre de archivo inválido");
      }

      const filePath = path.join(BACKUPS_DIR, filename);

      if (!fs.existsSync(filePath)) {
        throw new Error("El archivo de respaldo no existe");
      }

      fs.unlinkSync(filePath);
      console.log(`🗑️ Respaldo eliminado: ${filename}`);

      return true;
    } catch (error) {
      console.error("Error al eliminar respaldo:", error);
      throw new UserInputError(error.message || "Error al eliminar respaldo");
    }
  }),
};
