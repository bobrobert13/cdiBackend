"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCredentials = undefined;

let getCredentials = exports.getCredentials = (() => {
  var _ref = _asyncToGenerator(function* (token) {
    let credentials;
    if (!token) return { credentials: {} };
    console.log("hay token: ", token);
    token = yield (0, _tokenGenerator.verifyToken)(token);
    if (token.error) {
      if (token.error.message === "jwt expired") {
        credentials = {
          error: "token-expired"
        };
      }
      // invalid signature ocurre cuando el token no fue verificado con la misma secret con la que fue generado
      else if (token.error.message === "invalid signature") {
          credentials = {
            error: "invalid-token"
          };
        } else {
          credentials = {
            error: token.error.message
          };
        }
      return { credentials };
    }
    // si no hubo error al verificar el token
    else {
        credentials = {
          user: {
            id: token.data.id,
            username: token.data.username,
            role: token.data.role
          }
        };
        return { credentials };
      }
  });

  return function getCredentials(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _tokenGenerator = require("./token-generator");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }