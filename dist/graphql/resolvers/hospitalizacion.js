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
  hospitalizacion: (() => {
    var _ref = _asyncToGenerator(function* (parent, { id_hospitalizacion }) {
      return yield _models.Hospitalizacion.findByPk(id_hospitalizacion);
    });

    return function hospitalizacion(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  hospitalizaciones: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, args) {
      return yield _models.Hospitalizacion.findAll();
    });

    return function hospitalizaciones(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  crearHospitalizacion: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { input }) {
      return yield _models.Hospitalizacion.create(input);
    });

    return function crearHospitalizacion(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),
  actualizarEstadoHospitalizacion: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { id_hospitalizacion, estado }) {
      try {
        const hospitalizacion = yield _models.Hospitalizacion.findByPk(id_hospitalizacion);
        if (!hospitalizacion) {
          throw new Error('hospitalización no encontrada');
        }
        hospitalizacion.estado = estado;
        if (estado === 'Finalizado') {
          hospitalizacion.fecha_egreso = new Date();
        }
        yield hospitalizacion.save();
        return true;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el estado de la hospitalización');
      }
    });

    return function actualizarEstadoHospitalizacion(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })()
};