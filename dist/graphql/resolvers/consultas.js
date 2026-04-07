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
  consulta: (() => {
    var _ref = _asyncToGenerator(function* (parent, { id_consulta }) {
      return yield _models.Consulta.findByPk(id_consulta);
    });

    return function consulta(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  consultas: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, args) {
      return yield _models.Consulta.findAll();
    });

    return function consultas(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  crearConsulta: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { input }) {
      return yield _models.Consulta.create(input);
    });

    return function crearConsulta(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),
  actualizarConsulta: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { id_consulta, input }) {
      try {
        const consulta = yield _models.Consulta.findByPk(id_consulta);
        if (!consulta) {
          throw new Error('Consulta no encontrada');
        }
        yield consulta.update(input);
        return consulta;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar la consulta');
      }
    });

    return function actualizarConsulta(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })(),
  actualizarEstadoConsulta: (() => {
    var _ref5 = _asyncToGenerator(function* (_, { id_consulta, estado_consulta }) {
      try {
        const consulta = yield _models.Consulta.findByPk(id_consulta);
        if (!consulta) {
          throw new Error('Consulta no encontrada');
        }
        consulta.estado_consulta = estado_consulta;
        yield consulta.save();
        return true;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el estado de la consulta');
      }
    });

    return function actualizarEstadoConsulta(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  })()

};