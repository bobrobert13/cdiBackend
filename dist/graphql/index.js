'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

let captureError = (() => {
  var _ref = _asyncToGenerator(function* (error) {
    // hay errores de validacion de mongo que anexan otro texto al mensaje de error peronalizado
    // ej: ValidationError: bankAccounts.1.dni: dni-invalid-format,
    // se filtra el mensaje con la expresion regular
    const match = yield error.message.match(regexSearchError);
    if (match) error.message = message[0];
    return error;
  });

  return function captureError(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _apolloServerExpress = require('apollo-server-express');

var _handleErrors = require('../utils/handle-errors');

var _authorization = require('../middleware/authorization');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _schemas = require('./schemas');

var _schemas2 = _interopRequireDefault(_schemas);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('dotenv').config();

const env = process.env.NODE_ENV;

exports.default = (() => {
  var _ref2 = _asyncToGenerator(function* (app) {

    const server = new _apolloServerExpress.ApolloServer({
      typeDefs: _schemas2.default,
      resolvers: _resolvers2.default,
      engine: {
        apiKey: process.env.APOLLO_KEY,
        graphRef: process.env.APOLLO_GRAPH_REF,
        reporting: process.env.APOLLO_SCHEMA_REPORTING === 'true'
      },
      method: 'POST',
      playground: process.env.NODE_ENV === 'development', // nueva interfaz grafica para probar esquema
      subscribe: true,

      onOperation: function (message, params) {
        console.log(`
          -----------------------
          - onOperation -
          message: ${message}
          params: ${params}
          -----------------------
          `);
      },
      context: (() => {
        var _ref3 = _asyncToGenerator(function* ({ req, connection }) {
          // context: (req) => {
          if (connection) {
            // console.log('---: req: ', req)
            // console.log('---: connection: ', connection)
            connection.context.credentials = yield (0, _authorization.getCredentials)(connection.variables.authorization);
            return connection.context;
          }
          if (req) {
            // console.log('----:: context rq: ', req)
            const params = { dirBase: app.dirBase };
            params.credentials = req.credentials;
            return params;
          }
          return;
        });

        return function context(_x3) {
          return _ref3.apply(this, arguments);
        };
      })(),
      // debe estar activo para que los errores se envien en modo produccion,
      // para evitar enviar toda la traza, se formatea
      debug: true,
      subscriptions: {
        path: '/subscriptions',
        onConnect: (() => {
          var _ref4 = _asyncToGenerator(function* (connectionParams, webSocket) {
            const req = { authorization: connectionParams.authorization };
            const credentials = yield (0, _authorization.getCredentials)(connectionParams.authorization);
            return { credentials };
          });

          return function onConnect(_x4, _x5) {
            return _ref4.apply(this, arguments);
          };
        })(),
        onOperation: function (message, params, websocket) {
          console.log(`
          -----------------------
          message: ${message}
          params: ${params}
          websocket: ${websocket}
          -----------------------
          `);
          return;
        },
        execute: function (schema, document, rootValue, contextValue, variableValues, operationName) {
          console.log(`
          -----------------------
          schema: ${schema}
          document: ${document}
          rootValue: ${rootValue}
          contextValue: ${contextValue}
          variableValues: ${variableValues}
          operationName: ${operationName}
          -----------------------
          `);
        },
        onDisconnect: function (webSocket, context) {
          console.log('---- cliente subscription desconected ............');
        }
      },
      formatError: function (error) {
        console.log(error);
        console.log(error.extensions.exception.stacktrace);
        try {
          // const code = error.extensions.exception.name
          // error.extensions.code = code;
          // error.code = code;
          console.log('error message: ', error.message);

          // hay errores de validacion de mongo que anexan otro texto al mensaje de error peronalizado
          // ej: ValidationError: bankAccounts.1.dni: dni-invalid-format,
          // se filtra el mensaje con la expresion regular
          error.message = (0, _handleErrors.extractMessage)(error);
          // if (match) error.message = match[0]

          // si el servidor corre en modo dev, se retorna el error completo
          if (env == 'development') {
            return error;
          }

          // de lo contrario solo se retorna el codigo del error
          // return {message: error.message}
          return { message: error.message };
          // return error;
        } catch (error) {
          console.log('formatError: ', error);
        }
      }
    });

    // ruta para graphql
    const path = '/graphql';

    // aplicar middleware auth aqui
    // app.use(path, authorization);

    server.applyMiddleware({
      app,
      path
    });

    const httpServer = _http2.default.createServer(app);

    // await server.installSubscriptionHandlers({port: config.server.port});
    yield server.installSubscriptionHandlers(httpServer);

    httpServer.listen(_config2.default.server.port, function () {
      console.log(`🚀 Server ready at http://localhost:${_config2.default.server.port}${server.graphqlPath}`);
      console.log(`🚀 Subscriptions ready at ws://localhost:${_config2.default.server.port}${server.subscriptionsPath}`);
    });
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
})();