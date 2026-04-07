"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

let dumpDatabase = (() => {
  var _ref = _asyncToGenerator(function* (filePath) {
    const connection = yield _promise2.default.createConnection({
      host: DB_CONFIG.host,
      port: DB_CONFIG.port,
      user: DB_CONFIG.user,
      password: DB_CONFIG.password,
      database: DB_CONFIG.database,
      multipleStatements: true
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

      const [tables] = yield connection.query("SHOW TABLES");
      const tableKey = `Tables_in_${DB_CONFIG.database}`;

      for (const tableRow of tables) {
        const tableName = tableRow[tableKey];
        console.log(`  📋 Dumping table: ${tableName}`);

        const [createResult] = yield connection.query(`SHOW CREATE TABLE \`${tableName}\``);
        const createSQL = createResult[0]["Create Table"];

        dump += `-- ----------------------------------------\n`;
        dump += `-- Table: ${tableName}\n`;
        dump += `-- ----------------------------------------\n`;
        dump += `DROP TABLE IF EXISTS \`${tableName}\`;\n`;
        dump += createSQL + ";\n\n";

        const [rows] = yield connection.query(`SELECT * FROM \`${tableName}\``);

        if (rows.length > 0) {
          const columns = Object.keys(rows[0]);
          const columnList = columns.map(function (c) {
            return `\`${c}\``;
          }).join(", ");

          const batchSize = 100;
          for (let i = 0; i < rows.length; i += batchSize) {
            const batch = rows.slice(i, i + batchSize);
            const values = batch.map(function (row) {
              const vals = columns.map(function (col) {
                const val = row[col];
                if (val === null) return "NULL";
                if (val instanceof Date) return `'${val.toISOString().slice(0, 19).replace("T", " ")}'`;
                if (typeof val === "number") return val;
                if (Buffer.isBuffer(val)) return `X'${val.toString("hex")}'`;
                // Escape string values
                const escaped = String(val).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\0/g, "\\0");
                return `'${escaped}'`;
              });
              return `(${vals.join(", ")})`;
            }).join(",\n");

            dump += `INSERT INTO \`${tableName}\` (${columnList}) VALUES\n${values};\n`;
          }
          dump += "\n";
        }
      }

      dump += "COMMIT;\n";
      dump += "SET FOREIGN_KEY_CHECKS = 1;\n";

      // Write to file
      _fs2.default.writeFileSync(filePath, dump, "utf8");
    } finally {
      yield connection.end();
    }
  });

  return function dumpDatabase(_x) {
    return _ref.apply(this, arguments);
  };
})();

// Restore database using mysql2


let restoreDatabase = (() => {
  var _ref2 = _asyncToGenerator(function* (filePath) {
    const sqlContent = _fs2.default.readFileSync(filePath, "utf8");

    const connection = yield _promise2.default.createConnection({
      host: DB_CONFIG.host,
      port: DB_CONFIG.port,
      user: DB_CONFIG.user,
      password: DB_CONFIG.password,
      multipleStatements: true
    });

    try {
      yield connection.query(sqlContent);
    } finally {
      yield connection.end();
    }
  });

  return function restoreDatabase(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

var _apolloServerExpress = require("apollo-server-express");

var _authorizeResolvers = require("../../utils/authorize-resolvers");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _promise = require("mysql2/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const DB_CONFIG = {
  host: "localhost",
  port: 3306,
  database: "cdi_database",
  user: "root",
  password: "123456"
};

const BACKUPS_DIR = _path2.default.resolve(__dirname, "../../../backups");

function ensureBackupsDir() {
  if (!_fs2.default.existsSync(BACKUPS_DIR)) {
    _fs2.default.mkdirSync(BACKUPS_DIR, { recursive: true });
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

const Query = exports.Query = {
  listarRespaldos: (0, _authorizeResolvers.authorize)([], _asyncToGenerator(function* () {
    try {
      ensureBackupsDir();

      const files = _fs2.default.readdirSync(BACKUPS_DIR).filter(function (f) {
        return f.endsWith(".sql") && f.startsWith("medrec_");
      }).map(function (filename) {
        const filePath = _path2.default.join(BACKUPS_DIR, filename);
        const stats = _fs2.default.statSync(filePath);
        return {
          filename,
          size: formatSize(stats.size),
          createdAt: stats.birthtime.toISOString()
        };
      }).sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return files;
    } catch (error) {
      console.error("Error al listar respaldos:", error);
      throw new _apolloServerExpress.UserInputError("Error al listar respaldos");
    }
  }))
};

const Mutation = exports.Mutation = {
  crearRespaldo: (0, _authorizeResolvers.authorize)([], _asyncToGenerator(function* () {
    try {
      ensureBackupsDir();

      const now = new Date();
      const timestamp = now.toISOString().replace(/T/, "_").replace(/:/g, "-").replace(/\..+/, "");
      const filename = `medrec_${timestamp}.sql`;
      const filePath = _path2.default.join(BACKUPS_DIR, filename);

      console.log(`📦 Creando respaldo: ${filename}`);
      yield dumpDatabase(filePath);

      if (!_fs2.default.existsSync(filePath)) {
        throw new Error("El archivo de respaldo no fue creado");
      }

      const stats = _fs2.default.statSync(filePath);
      console.log(`✅ Respaldo creado: ${filename} (${formatSize(stats.size)})`);

      return {
        filename,
        size: formatSize(stats.size),
        createdAt: stats.birthtime.toISOString()
      };
    } catch (error) {
      console.error("Error al crear respaldo:", error);
      throw new _apolloServerExpress.UserInputError(error.message || "Error al crear respaldo");
    }
  })),

  restaurarRespaldo: (0, _authorizeResolvers.authorize)([], (() => {
    var _ref5 = _asyncToGenerator(function* (obj, { filename }) {
      try {
        if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
          throw new Error("Nombre de archivo inválido");
        }

        const filePath = _path2.default.join(BACKUPS_DIR, filename);

        if (!_fs2.default.existsSync(filePath)) {
          throw new Error("El archivo de respaldo no existe");
        }

        console.log(`🔄 Restaurando respaldo: ${filename}`);
        yield restoreDatabase(filePath);
        console.log(`✅ Respaldo restaurado: ${filename}`);

        return true;
      } catch (error) {
        console.error("Error al restaurar respaldo:", error);
        throw new _apolloServerExpress.UserInputError(error.message || "Error al restaurar respaldo");
      }
    });

    return function (_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  })()),

  eliminarRespaldo: (0, _authorizeResolvers.authorize)([], (() => {
    var _ref6 = _asyncToGenerator(function* (obj, { filename }) {
      try {
        if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
          throw new Error("Nombre de archivo inválido");
        }

        const filePath = _path2.default.join(BACKUPS_DIR, filename);

        if (!_fs2.default.existsSync(filePath)) {
          throw new Error("El archivo de respaldo no existe");
        }

        _fs2.default.unlinkSync(filePath);
        console.log(`🗑️ Respaldo eliminado: ${filename}`);

        return true;
      } catch (error) {
        console.error("Error al eliminar respaldo:", error);
        throw new _apolloServerExpress.UserInputError(error.message || "Error al eliminar respaldo");
      }
    });

    return function (_x5, _x6) {
      return _ref6.apply(this, arguments);
    };
  })())
};