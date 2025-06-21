
import express from "express";
import cors from "cors";
import graphql from "./graphql";
import authorization from "./middleware/authorization";


const dataBaseConnect = require('./config/conexion');

require("events").EventEmitter.defaultMaxListeners = 30;

let env;
if (process.env.NODE_ENV) {
  env = process.env.NODE_ENV;
}
// si no se indica el entorno, siempre será dev
else {
  env = "development";
  process.env.NODE_ENV = "development";
}

process.on('uncaughtException', function (err) {
  console.error('--uncaughtException: error ',err)
  console.error('-- uncaughtException: err.stack', err.stack)
})

const serveStatic = require("serve-static");

const app = express();

// solo usado para probar
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// habilitar cors solo si no es produccion
if (env !== "production") {
  // habilitar cors usando la libreria
  app.use(cors());
}

// asignación de directorio base
app.dirBase = __dirname;
console.log(app.dirBase);

app.use("/files", serveStatic(__dirname + "/files"));
console.log(`
  :---------------------------------------
    port: ${process.env.PORT || 4000}
  :------------------------------------------

  `);

app.use(authorization);

app.options("/graphql", (req, res, next) => {
  console.log("---> peticion options....");
  res.status(200).send("Permitted!");
});

const init = async () => {
  try {
    await graphql(app);
    await dataBaseConnect();
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', reason.stack || reason)
    })

    const listen = {
      port: 4000,
    };
  } catch (e) {
    console.log(e);
  }

  process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at:", reason.stack || reason);
  });
};

init();
