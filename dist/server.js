"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _graphql = require("./graphql");

var _graphql2 = _interopRequireDefault(_graphql);

var _authorization = require("./middleware/authorization");

var _authorization2 = _interopRequireDefault(_authorization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const dataBaseConnect = require('./config/conexion');

require("events").EventEmitter.defaultMaxListeners = 30;

let env;
if (process.env.NODE_ENV) {
  env = process.env.NODE_ENV;
} else {
  env = "development";
  process.env.NODE_ENV = "development";
}

process.on('uncaughtException', function (err) {
  console.error('--uncaughtException: error ', err);
  console.error('-- uncaughtException: err.stack', err.stack);
});

const serveStatic = require("serve-static");

const app = (0, _express2.default)();

// solo usado para probar
app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

// habilitar cors solo si no es produccion
if (env !== "production") {
  // habilitar cors usando la libreria
  app.use((0, _cors2.default)());
}

// asignación de directorio base
app.dirBase = __dirname;
console.log(app.dirBase);

app.use("/uploads", serveStatic(__dirname + "/uploads"));
console.log(`
  :---------------------------------------
    port: ${process.env.PORT || 4000}
  :------------------------------------------

  `);

app.use(_authorization2.default);

app.options("/graphql", (req, res, next) => {
  console.log("---> peticion options....");
  res.status(200).send("Permitted!");
});

const init = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      yield (0, _graphql2.default)(app);
      yield dataBaseConnect();
      process.on('unhandledRejection', function (reason, promise) {
        console.error('Unhandled Rejection at:', reason.stack || reason);
      });

      const listen = {
        port: 4000
      };
    } catch (e) {
      console.log(e);
    }

    process.on("unhandledRejection", function (reason, promise) {
      console.log("Unhandled Rejection at:", reason.stack || reason);
    });
  });

  return function init() {
    return _ref.apply(this, arguments);
  };
})();

init();