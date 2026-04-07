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
  // Obtener un medicamento por ID
  medicamento: (() => {
    var _ref = _asyncToGenerator(function* (_, { id_medicamento }) {
      return yield _models.Medicamento.findByPk(id_medicamento);
    });

    return function medicamento(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  // Listar todos los medicamentos
  medicamentos: (() => {
    var _ref2 = _asyncToGenerator(function* (_, __) {
      return yield _models.Medicamento.findAll();
    });

    return function medicamentos(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  })(),
  // Medicamentos por paciente
  medicamentosPorPaciente: (() => {
    var _ref3 = _asyncToGenerator(function* (_, { fk_paciente_id }) {
      return yield _models.Medicamento.findAll({
        where: { fk_paciente_id }
      });
    });

    return function medicamentosPorPaciente(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  })(),
  // Medicamentos por doctor
  medicamentosPorDoctor: (() => {
    var _ref4 = _asyncToGenerator(function* (_, { fk_doctor_id }) {
      return yield _models.Medicamento.findAll({
        where: { fk_doctor_id }
      });
    });

    return function medicamentosPorDoctor(_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  })()
};

const Mutation = exports.Mutation = {
  // Crear un medicamento
  crearMedicamento: (() => {
    var _ref5 = _asyncToGenerator(function* (_, { input }) {
      const medicamento = yield _models.Medicamento.create(input);
      return medicamento;
    });

    return function crearMedicamento(_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  })(),

  actualizarEstadoMedicamento: (() => {
    var _ref6 = _asyncToGenerator(function* (_, { id_medicamento, estado_tratamiento }) {
      try {
        const medicamento = yield _models.Medicamento.findByPk(id_medicamento);
        if (!medicamento) {
          throw new Error('medicamento no encontrado');
        }
        medicamento.estado_tratamiento = estado_tratamiento;
        yield medicamento.save();
        return true;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message || 'Error al actualizar el estado del medicamento');
      }
    });

    return function actualizarEstadoMedicamento(_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  })()

};