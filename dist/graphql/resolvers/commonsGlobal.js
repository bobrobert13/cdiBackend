'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = exports.storeFS = exports.processUpload = undefined;

var _tokenGenerator = require('../../utils/token-generator');

var _authorizeResolvers = require('../../utils/authorize-resolvers');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _apolloServerExpress = require('apollo-server-express');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const path = require('path');

const processUpload = exports.processUpload = (() => {
  var _ref = _asyncToGenerator(function* (upload, dirBase) {
    try {
      const { createReadStream, filename, mimetype, encoding } = yield upload;
      const stream = createReadStream();
      let relativePath = yield storeFS(stream, filename, dirBase);

      return {
        filename: filename,
        mimetype: mimetype,
        encoding: encoding,
        relativePath: relativePath
      };
    } catch (error) {
      console.log('---: error processUpload Transaction: ', error);
    }
  });

  return function processUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

const storeFS = exports.storeFS = (stream, filename, dirBase) => {
  const id = Date.now();
  const extension = path.parse(filename).ext;
  var dir = `${dirBase}/files`;
  if (!_fs2.default.existsSync(dir)) {
    _fs2.default.mkdirSync(dir);
  }
  const relativePath = `/files/${id}${extension}`;
  const _path = `${dirBase}/files/${id}${extension}`; //  /files/supports/1538723417954.png
  return new Promise((resolve, reject) => stream.on("error", error => {
    if (stream.truncated) {
      // Delete the truncated file
      _fs2.default.unlinkSync(_path);
    }
    reject(error);
  }).pipe(_fs2.default.createWriteStream(_path)).on("error", error => {
    reject(error);
  }).on("finish", () => resolve(relativePath)));
};

const Query = exports.Query = {};

const Mutation = exports.Mutation = {
  /* 
    singleUpload(file: Upload): File
  */

  singleUpload: (0, _authorizeResolvers.authorize)([], (() => {
    var _ref2 = _asyncToGenerator(function* (_, { file }, { credentials: { user }, dirBase }) {
      return processUpload(file, dirBase);
    });

    return function (_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  })())
};