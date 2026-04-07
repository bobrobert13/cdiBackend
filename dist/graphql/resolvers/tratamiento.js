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
  tratamiento: (() => {
    var _ref = _asyncToGenerator(function* (parent, { id_tratamiento }) {
      return yield _models.Tratamiento.findByPk(id_tratamiento);
    });

    return function tratamiento(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  tratamientos: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, args) {
      return yield _models.Tratamiento.findAll();
    });

    return function tratamientos(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  crearTratamiento: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { input }) {
      return yield _models.Tratamiento.create(input);
    });

    return function crearTratamiento(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),
  actualizarTratamiento: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { id_tratamiento, input }) {
      try {
        const tratamiento = yield _models.Tratamiento.findByPk(id_tratamiento);
        if (!tratamiento) {
          throw new Error('tratamiento no encontrado');
        }
        yield tratamiento.update(input);
        return tratamiento;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el tratamiento');
      }
    });

    return function actualizarTratamiento(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })(),
  actualizarEstadoTratamiento: (() => {
    var _ref5 = _asyncToGenerator(function* (_, { id_tratamiento, estado }) {
      try {
        const tratamiento = yield _models.Tratamiento.findByPk(id_tratamiento);
        if (!tratamiento) {
          throw new Error('tratamiento no encontrado');
        }
        tratamiento.estado = estado;
        yield tratamiento.save();
        return true;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el estado del tratamiento');
      }
    });

    return function actualizarEstadoTratamiento(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  })()
};