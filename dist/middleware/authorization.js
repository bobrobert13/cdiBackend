'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCredentials = undefined;

let getCredentials = exports.getCredentials = (() => {
  var _ref = _asyncToGenerator(function* (authorization) {
    let credentials = {};
    if (authorization) {

      const token = yield (0, _tokenGenerator.verifyToken)(authorization);
      if (token.error) {
        if (token.error.message === 'jwt expired') {
          credentials = {
            error: 'token-expired'
          };
        }
        // invalid signature ocurre cuando el token no fue verificado con la misma secret con la que fue generado
        else if (token.error.message === 'invalid signature') {
            credentials = {
              error: 'invalid-token'
            };
          } else {
            credentials = {
              error: token.error.message
            };
          }
      }
      // si no hubo error al verificar el token
      else {
          credentials = {
            user: {
              id: token.data.data.id,
              role: token.data.data.role,
              dni: token.data.data.dni
            }
          };
        }
    }
    // si no hay authorization en header
    return credentials;
  });

  return function getCredentials(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _tokenGenerator = require('../utils/token-generator');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    // authorization viene como una cadena vacia ''
    const autorization = req.headers.authorization;
    req.credentials = yield getCredentials(autorization);
    return next();
  });

  function authozation(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  }

  return authozation;
})();