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
  emergencia: (() => {
    var _ref = _asyncToGenerator(function* (parent, { id_emergencia }) {
      return yield _models.Emergencia.findByPk(id_emergencia);
    });

    return function emergencia(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  emergencias: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, args) {
      return yield _models.Emergencia.findAll();
    });

    return function emergencias(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  crearEmergencia: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { input }) {
      return yield _models.Emergencia.create(input);
    });

    return function crearEmergencia(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),
  actualizarEstadoEmergencia: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { id_emergencia, estado_emergencia }) {
      try {
        const emergencia = yield _models.Emergencia.findByPk(id_emergencia);
        if (!emergencia) {
          throw new Error('emergencia no encontrada');
        }
        emergencia.estado_emergencia = estado_emergencia;
        if (estado_emergencia === 'Finalizado') {
          emergencia.fecha_egreso = new Date();
        }
        yield emergencia.save();
        return true;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el estado de la emergencia');
      }
    });

    return function actualizarEstadoEmergencia(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })()
};