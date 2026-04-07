"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _apolloServerExpress = require("apollo-server-express");

var _authorizeResolvers = require("../../utils/authorize-resolvers");

var _models = require("../../models");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Query = exports.Query = {
  diagnostico: (() => {
    var _ref = _asyncToGenerator(function* (parent, { id_diagnostico }) {
      return yield _models.Diagnostico.findByPk(id_diagnostico);
    });

    return function diagnostico(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  diagnosticos: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, args) {
      return yield _models.Diagnostico.findAll();
    });

    return function diagnosticos(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  crearDiagnostico: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { input }) {
      return yield _models.Diagnostico.create(_extends({}, input, { confidicion: input.condicion.toLowerCase() }));
    });

    return function crearDiagnostico(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),
  actualizarDiagnostico: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { id_diagnostico, input }) {
      try {
        const diagnostico = yield _models.Diagnostico.findByPk(id_diagnostico);
        if (!diagnostico) {
          throw new Error('diagnostico no encontrado');
        }
        yield diagnostico.update(_extends({}, input, { condicion: input.condicion.toLowerCase() }));
        return diagnostico;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el diagnostico');
      }
    });

    return function actualizarDiagnostico(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })()
};