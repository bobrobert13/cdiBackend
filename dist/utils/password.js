'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordMatch = passwordMatch;
exports.createPassword = createPassword;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function passwordMatch(inputPassword, current) {
  // si el password es distinto
  // !bcrypt.compare(password, user.password)) return null
  return _bcrypt2.default.compareSync(inputPassword, current);
}

function createPassword(password) {
  return _bcrypt2.default.hashSync(password, 13);
}