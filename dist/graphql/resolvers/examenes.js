"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _apolloServerExpress = require("apollo-server-express");

var _authorizeResolvers = require("../../utils/authorize-resolvers");

var _models = require("../../models");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Query = exports.Query = {
  examenResultado: (() => {
    var _ref = _asyncToGenerator(function* (parent, { id_examenes }) {
      return yield _models.Examenes.findByPk(id_examenes);
    });

    return function examenResultado(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  examenesResultados: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, args) {
      return yield _models.Examenes.findAll();
    });

    return function examenesResultados(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  crearExamenResultado: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { input }) {
      return yield _models.Examenes.create(input);
    });

    return function crearExamenResultado(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),

  actualizarExamenResultado: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { id_examenes, input }) {
      try {
        const examen = yield _models.Examenes.findByPk(id_examenes);
        if (!examen) {
          throw new Error('Examen no encontrado');
        }
        yield examen.update(input);
        return examen;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el examen');
      }
    });

    return function actualizarExamenResultado(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })(),
  actualizarEstadoExamen: (() => {
    var _ref5 = _asyncToGenerator(function* (_, { id_examenes, estado_examen }) {
      try {
        const examen = yield _models.Examenes.findByPk(id_examenes);
        if (!examen) {
          throw new Error('Examen no encontrado');
        }
        examen.estado_examen = estado_examen;
        yield examen.save();
        return true;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el estado del examen');
      }
    });

    return function actualizarEstadoExamen(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  })()
};