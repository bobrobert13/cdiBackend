"use strict";
"use strinct";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPasswordToken = exports.createToken = exports.verifyToken = exports.emailToken = exports.sessionToken = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// token para la sesion de un usuario
const sessionToken = (user, expire) => {
  const token = {};
  expire = (0, _moment2.default)().add(expire, "seconds").unix();

  token.payload = {
    id: user.id,
    _id: user._id,
    username: user.username,
    role: user.role,
    dni: user.dni,
    iat: (0, _moment2.default)().unix(),
    exp: expire
  };

  token.code = _jsonwebtoken2.default.sign(token.payload, _config2.default.secret);
  token.expire = expire;
  return { code: token.code, expire: token.expire };
};

// genera token para recuperar contraseña y validar cuenta de correo
//
const emailToken = user => {
  const token = {};
  token.payload = {
    id: user._id,
    action: 'verify-account',
    iat: (0, _moment2.default)().unix(),
    exp: (0, _moment2.default)().add(24, "hours").unix()
  };
  token.code = _jsonwebtoken2.default.sign(token.payload, _config2.default.secret);
  return { code: token.code, expire: token.expire };;
};

// valida y decodifica un token
const verifyToken = (() => {
  var _ref = _asyncToGenerator(function* (token) {
    return yield _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, decoded) {
      if (err) {
        if (err.message === 'jwt expired') console.error(`
        token decoded error:
        -- message: ${err.message}
        -- expiro: ${err.expiredAt}
        `);else console.error('---- unknow token decoded error ----');
      }
      return { error: err, data: decoded };
    });
  });

  return function verifyToken(_x) {
    return _ref.apply(this, arguments);
  };
})();

const createToken = options => {
  const token = {};
  const times = {
    iat: (0, _moment2.default)().unix(),
    exp: (0, _moment2.default)().add(365, "days").unix()
  };
  token.payload = options;
  token.code = _jsonwebtoken2.default.sign({ data: options }, _config2.default.secret);
  return {
    usuario: token.payload,
    token: token.code
  };
};

const resetPasswordToken = options => {
  const token = {};
  const times = {
    iat: (0, _moment2.default)().unix(),
    exp: (0, _moment2.default)().add(1, "hours").unix()
  };
  token.payload = Object.assign(options, times);
  token.code = _jsonwebtoken2.default.sign(token.payload, _config2.default.secret);
  return token;
};

exports.sessionToken = sessionToken;
exports.emailToken = emailToken;
exports.verifyToken = verifyToken;
exports.createToken = createToken;
exports.resetPasswordToken = resetPasswordToken;