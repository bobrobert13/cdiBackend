"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _apolloServerExpress = require("apollo-server-express");

var _authorizeResolvers = require("../../utils/authorize-resolvers");

var _models = require("../../models");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Query = exports.Query = {
  imagenMedica: (() => {
    var _ref = _asyncToGenerator(function* (_, { id_imagenes_medicas }, { models }) {
      return yield models.ImagenesMedicas.findByPk(id_imagenes_medicas);
    });

    return function imagenMedica(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  })(),
  imagenesMedicas: (() => {
    var _ref2 = _asyncToGenerator(function* (_, __, { models }) {
      return yield models.ImagenesMedicas.findAll();
    });

    return function imagenesMedicas(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  })(),
  imagenesMedicasPorPaciente: (() => {
    var _ref3 = _asyncToGenerator(function* (_, { fk_paciente_id }, { models }) {
      return yield models.ImagenesMedicas.findAll({
        where: { fk_paciente_id }
      });
    });

    return function imagenesMedicasPorPaciente(_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  })()
};

const Mutation = {
  crearImagenMedica: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { input }, { models }) {
      const {
        archivo
      } = input,
            datosImagen = _objectWithoutProperties(input, ["archivo"]);

      const { createReadStream, filename } = yield archivo;
      const ext = path.extname(filename);
      const nombreUnico = `${uuidv4()}${ext}`;
      const rutaDestino = path.join(__dirname, '..', 'uploads', nombreUnico);

      fs.mkdirSync(path.dirname(rutaDestino), { recursive: true });

      yield new Promise(function (resolve, reject) {
        createReadStream().pipe(fs.createWriteStream(rutaDestino)).on('finish', resolve).on('error', reject);
      });

      const imagen = yield models.ImagenesMedicas.create(_extends({}, datosImagen, {
        url_archivo: `/uploads/${nombreUnico}`
      }));

      return imagen;
    });

    return function crearImagenMedica(_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  })()
};
exports.Mutation = Mutation;