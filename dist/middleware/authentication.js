"use strict";

var _getCredentials = require("../utils/get-credentials");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const scheme = (server, options) => {
  return {
    authenticate: (() => {
      var _ref = _asyncToGenerator(function* (request, h) {
        const credentials = yield (0, _getCredentials.getCredentials)(request.headers.authorization);
        return h.authenticated(credentials);
      });

      return function authenticate(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })()
  };
};

const validate = (decoded, request) => {
  return { isValid: true };
};

exports.plugin = {
  name: "get-header-token",
  version: "1.0.0",
  register: (() => {
    var _ref2 = _asyncToGenerator(function* (server, options, next) {
      server.auth.scheme("custom", scheme);
      server.auth.strategy("default", "custom");
      server.auth.default({
        strategy: "default",
        mode: "optional"
      });
    });

    return function register(_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  })()
};