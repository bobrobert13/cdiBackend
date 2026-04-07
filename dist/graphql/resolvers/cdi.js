"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _apolloServerExpress = require("apollo-server-express");

var _sequelize = require("sequelize");

var _models = require("../../models");

var _password = require("../../utils/password");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Query = exports.Query = {

  cdis: (() => {
    var _ref = _asyncToGenerator(function* () {
      try {
        const todosCDI = yield _models.CDI.findAll({
          include: [{
            model: _models.Usuario, as: 'usuarios',
            where: {
              '$usuarios.fk_doctor_id$': null
            }
          }, {
            model: _models.Doctor,
            as: 'doctores',
            include: [{
              model: _models.Persona, as: 'persona', include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
            }]
          }, {
            model: _models.Paciente,
            as: 'pacientes',
            include: [{
              model: _models.Persona, as: 'persona', include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
            }]
          }], order: [['createdAt', 'DESC']]
        });
        return todosCDI;
      } catch (error) {
        console.error('Error al obtener los CDI:', error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function cdis() {
      return _ref.apply(this, arguments);
    };
  })(),

  cdiInfo: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, { id_cdi }) {
      const cdi = yield _models.CDI.findByPk(id_cdi);
      if (!cdi) throw new _apolloServerExpress.UserInputError("CDI no encontrado");
      return cdi;
    });

    return function cdiInfo(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  })(),

  todosCdis: (() => {
    var _ref3 = _asyncToGenerator(function* () {
      try {
        const todosCDI = yield _models.CDI.findAll();
        return todosCDI;
      } catch (error) {
        console.error('Error al obtener los CDI:', error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function todosCdis() {
      return _ref3.apply(this, arguments);
    };
  })(),

  cdi: (() => {
    var _ref4 = _asyncToGenerator(function* (parent, { id_cdi }) {
      const cdi = yield _models.CDI.findByPk(id_cdi, { include: [{ model: _models.Usuario, as: 'usuarios' }] });
      if (!cdi) throw new _apolloServerExpress.UserInputError("CDI no encontrado");
      return cdi;
    });

    return function cdi(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  })(),

  doctoresCDI: (() => {
    var _ref5 = _asyncToGenerator(function* (_, { id_cdi }) {
      const doctores = yield _models.Doctor.findAll({
        where: { fk_cdi_id: id_cdi }, include: [{ model: _models.Usuario, as: 'usuarios' }, {
          model: _models.Paciente, as: 'pacientes', include: [{
            model: _models.Persona, as: 'persona', include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
          }]
        }, {
          model: _models.Persona, as: 'persona', include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        }]
      });
      return doctores;
    });

    return function doctoresCDI(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  })(),

  pacientesCDI: (() => {
    var _ref6 = _asyncToGenerator(function* (_, { id_cdi }) {

      const pacientes = yield _models.Paciente.findAll({
        where: { fk_cdi_id: id_cdi }, include: [{
          model: _models.Persona,
          as: "persona",
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        }, {
          model: _models.Hospitalizacion,
          as: 'hospitalizaciones'
        }, {
          model: _models.Emergencia,
          as: 'emergencias'
        }, {
          model: _models.Diagnostico,
          as: "diagnosticos",
          include: [{ model: _models.Doctor, as: 'doctores', include: [{ model: _models.Persona, as: 'persona' }] }],
          order: [['createdAt', 'DESC']]
        }, {
          model: _models.Consulta,
          as: "consultas",
          include: [{ model: _models.CDI, as: 'cdis' }, { model: _models.Doctor, as: 'doctores', include: [{ model: _models.Persona, as: 'persona' }] }]
        }, {
          model: _models.Examenes,
          as: "examenes",
          include: [{ model: _models.Doctor, as: 'doctores', include: [{ model: _models.Persona, as: 'persona' }] }]
        }, {
          model: _models.Medicamento,
          as: "medicamentos",
          include: [{ model: _models.Doctor, as: 'doctores', include: [{ model: _models.Persona, as: 'persona' }] }]
        }, {
          model: _models.Tratamiento,
          as: "tratamientos",
          include: [{ model: _models.Doctor, as: 'doctor', include: [{ model: _models.Persona, as: 'persona' }] }]
        }, {
          model: _models.Doctor, as: 'doctor', include: [{ model: _models.Persona, as: 'persona' }]
        }]
      });
      return pacientes;
    });

    return function pacientesCDI(_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  })(),

  // ESTADISTICAS DE PACIENTES POR CDI:
  // NOTA: ESTABLECER PERIODO DE TIEMPO Y FORMATO PARA CADA ESTADISTICA

  // #1: Total de Pacientes Registrados: El número absoluto de pacientes en la base de datos.
  cantidadPacienteTotales: (() => {
    var _ref7 = _asyncToGenerator(function* (_, { id_cdi }) {
      try {
        const cantidadPacientesTotales = yield _models.Paciente.count({ where: { fk_cdi_id: id_cdi } });
        return cantidadPacientesTotales;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function cantidadPacienteTotales(_x9, _x10) {
      return _ref7.apply(this, arguments);
    };
  })(),

  // #2: Total de Pacientes nuevos por mes, por semana o por año en un CDI
  cantidadPacientesNuevos: (() => {
    var _ref8 = _asyncToGenerator(function* (_, { id_cdi, periodo, mes, anio }) {
      try {
        const period = periodo || 'month';
        const ahora = new Date();
        const anioSeleccionado = anio && Number.isInteger(anio) ? anio : ahora.getFullYear();

        if (period === 'year') {
          // Retorna 12 valores, uno por cada mes del año
          const pacientesPorMes = [];
          for (let m = 0; m < 12; m++) {
            const mesStart = new Date(anioSeleccionado, m, 1);
            mesStart.setHours(0, 0, 0, 0);
            const mesEnd = new Date(anioSeleccionado, m + 1, 1);
            mesEnd.setHours(0, 0, 0, 0);

            const count = yield _models.Paciente.count({
              where: {
                fk_cdi_id: id_cdi,
                createdAt: {
                  [_sequelize.Op.gte]: mesStart,
                  [_sequelize.Op.lt]: mesEnd
                }
              }
            });
            pacientesPorMes.push(count);
          }
          return pacientesPorMes;
        } else if (period === 'month') {
          const pacientesPorSemana = [];

          const monthIndex = mes && Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes - 1 : ahora.getMonth();

          const monthStart = new Date(anioSeleccionado, monthIndex, 1);
          monthStart.setHours(0, 0, 0, 0);

          const monthEnd = new Date(anioSeleccionado, monthIndex + 1, 1);
          monthEnd.setHours(0, 0, 0, 0);

          // Dividir el mes en bloques de 7 días (hasta 4 semanas aproximadas)
          for (let i = 0; i < 4; i++) {
            const weekStart = new Date(monthStart);
            weekStart.setDate(monthStart.getDate() + i * 7);

            let weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 7);

            if (weekEnd > monthEnd) {
              weekEnd = new Date(monthEnd);
            }

            if (weekStart >= monthEnd) break;

            const count = yield _models.Paciente.count({
              where: {
                fk_cdi_id: id_cdi,
                createdAt: {
                  [_sequelize.Op.gte]: weekStart,
                  [_sequelize.Op.lt]: weekEnd
                }
              }
            });

            pacientesPorSemana.push(count);
          }

          return pacientesPorSemana || [];
        } else if (period === 'week') {
          const pacientesPorDia = [];

          for (let i = 0; i < 7; i++) {
            const day = new Date();
            day.setDate(day.getDate() - (6 - i));

            const nextDay = new Date();
            nextDay.setDate(nextDay.getDate() - (5 - i));

            if (i === 6) {
              nextDay.setDate(nextDay.getDate() + 1);
            }

            const count = yield _models.Paciente.count({
              where: {
                fk_cdi_id: id_cdi,
                createdAt: {
                  [_sequelize.Op.gte]: day,
                  [_sequelize.Op.lt]: nextDay
                }
              }
            });

            pacientesPorDia.push(count);
          }

          return pacientesPorDia || [];
        } else {
          throw new _apolloServerExpress.UserInputError('Periodo no válido. Use "month", "week" o "year".');
        }
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function cantidadPacientesNuevos(_x11, _x12) {
      return _ref8.apply(this, arguments);
    };
  })(),

  // #4: Distribución por Género: Un conteo simple de pacientes masculinos y femeninos.
  distribucionPorGenero: (() => {
    var _ref9 = _asyncToGenerator(function* (_, { id_cdi }) {
      try {
        const queries = [];

        // Rangos de edad
        const ageRanges = [{ min: 0, max: 12, label: 'Ninos' }, { min: 13, max: 18, label: 'Adolescentes' }, { min: 19, max: 64, label: 'Adultos' }, { min: 65, max: 200, label: 'Mayores' // 200 como limite superior seguro
        }];

        // Generos
        const genders = ['Masculino', 'Femenino'];

        // Construir las promesas para todas las combinaciones
        genders.forEach(function (gender) {
          // Total por genero
          queries.push(_models.Paciente.count({
            where: { fk_cdi_id: id_cdi },
            include: [{
              model: _models.Persona,
              as: 'persona',
              where: { sexo: gender }
            }]
          }));

          // Por rango de edad
          ageRanges.forEach(function (range) {
            queries.push(_models.Paciente.count({
              where: { fk_cdi_id: id_cdi },
              include: [{
                model: _models.Persona,
                as: 'persona',
                where: {
                  sexo: gender,
                  edad: {
                    [_sequelize.Op.gte]: range.min,
                    [_sequelize.Op.lte]: range.max
                  }
                }
              }]
            }));
          });
        });

        const results = yield Promise.all(queries);

        // Mapear resultados
        // results[0] = Total Masculino
        // results[1] = Masculino 0-12
        // results[2] = Masculino 13-18
        // results[3] = Masculino 19-64
        // results[4] = Masculino 65+
        // results[5] = Total Femenino
        // results[6] = Femenino 0-12
        // results[7] = Femenino 13-18
        // results[8] = Femenino 19-64
        // results[9] = Femenino 65+

        return {
          masculino: results[0] || 0,
          masculinoNinos: results[1] || 0,
          masculinoAdolescentes: results[2] || 0,
          masculinoAdultos: results[3] || 0,
          masculinoMayores: results[4] || 0,
          femenino: results[5] || 0,
          femeninoNinas: results[6] || 0,
          femeninoAdolescentes: results[7] || 0,
          femeninoAdultas: results[8] || 0,
          femeninoMayores: results[9] || 0
        };
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function distribucionPorGenero(_x13, _x14) {
      return _ref9.apply(this, arguments);
    };
  })(),

  // ESTADISTICAS RELACIONADAS A CONSULTAS, ALGUNAS INVOLUCRAN A DOCTORES.

  // #5: Total de consultas realizadas: El número total de veces que los pacientes fueron atendidos en un período dado (por ejemplo, semana, al mes).

  totalConsultasRealizadasPeriodo: (() => {
    var _ref10 = _asyncToGenerator(function* (_, { id_cdi, periodo, mes, anio }) {
      try {
        const period = periodo || 'month';
        const ahora = new Date();
        const anioSeleccionado = anio && Number.isInteger(anio) ? anio : ahora.getFullYear();

        if (period === 'year') {
          // Retorna 12 valores, uno por cada mes del año
          const consultasPorMes = [];
          for (let m = 0; m < 12; m++) {
            const mesStart = new Date(anioSeleccionado, m, 1);
            mesStart.setHours(0, 0, 0, 0);
            const mesEnd = new Date(anioSeleccionado, m + 1, 1);
            mesEnd.setHours(0, 0, 0, 0);

            const count = yield _models.Consulta.count({
              where: {
                fk_cdi_id: id_cdi,
                createdAt: {
                  [_sequelize.Op.gte]: mesStart,
                  [_sequelize.Op.lt]: mesEnd
                }
              }
            });
            consultasPorMes.push(count);
          }
          return consultasPorMes;
        } else if (period === 'month') {
          const consultasPorSemana = [];

          const monthIndex = mes && Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes - 1 : ahora.getMonth();

          const monthStart = new Date(anioSeleccionado, monthIndex, 1);
          monthStart.setHours(0, 0, 0, 0);

          const monthEnd = new Date(anioSeleccionado, monthIndex + 1, 1);
          monthEnd.setHours(0, 0, 0, 0);

          // Dividir el mes en bloques de 7 días (4 semanas aproximadas)
          for (let i = 0; i < 4; i++) {
            const weekStart = new Date(monthStart);
            weekStart.setDate(monthStart.getDate() + i * 7);

            let weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 7);

            if (weekEnd > monthEnd) {
              weekEnd = new Date(monthEnd);
            }

            if (weekStart >= monthEnd) break;

            const count = yield _models.Consulta.count({
              where: {
                fk_cdi_id: id_cdi,
                createdAt: {
                  [_sequelize.Op.gte]: weekStart,
                  [_sequelize.Op.lt]: weekEnd
                }
              }
            });

            consultasPorSemana.push(count);
          }

          return consultasPorSemana || [];
        } else if (period === 'week') {
          const consultasPorDia = [];

          for (let i = 0; i < 7; i++) {
            const day = new Date();
            day.setDate(day.getDate() - (6 - i));

            const nextDay = new Date();
            nextDay.setDate(nextDay.getDate() - (5 - i));

            if (i === 6) {
              nextDay.setDate(nextDay.getDate() + 1);
            }

            const count = yield _models.Consulta.count({
              where: {
                fk_cdi_id: id_cdi,
                createdAt: {
                  [_sequelize.Op.gte]: day,
                  [_sequelize.Op.lt]: nextDay
                }
              }
            });

            consultasPorDia.push(count);
          }

          return consultasPorDia || [];
        } else {
          throw new _apolloServerExpress.UserInputError('Periodo no válido. Use "month", "week" o "year".');
        }
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function totalConsultasRealizadasPeriodo(_x15, _x16) {
      return _ref10.apply(this, arguments);
    };
  })(),

  // #6: Consultas por Médico (o Profesional de la Salud)

  totalConsultasRealizadasPorMedico: (() => {
    var _ref11 = _asyncToGenerator(function* (_, { id_cdi, periodo, mes, anio }) {
      try {
        const period = periodo || 'month';
        const ahora = new Date();
        const anioSeleccionado = anio && Number.isInteger(anio) ? anio : ahora.getFullYear();

        const doctores = yield _models.Doctor.findAll({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: _models.Persona,
            as: 'persona'
          }]
        });

        const nombresDoctores = doctores.map(function (doctor) {
          return doctor.persona.nombre1 || 'Sin nombre';
        });

        const consultasPorDoctor = [];

        if (period === 'year') {
          // Rango completo del año seleccionado
          const yearStart = new Date(anioSeleccionado, 0, 1);
          yearStart.setHours(0, 0, 0, 0);
          const yearEnd = new Date(anioSeleccionado + 1, 0, 1);
          yearEnd.setHours(0, 0, 0, 0);

          for (const doctor of doctores) {
            const count = yield _models.Consulta.count({
              where: {
                fk_doctor_id: parseInt(doctor.id_doctor),
                createdAt: {
                  [_sequelize.Op.gte]: yearStart,
                  [_sequelize.Op.lt]: yearEnd
                }
              }
            });
            consultasPorDoctor.push(count);
          }

          return {
            nombresDoctores,
            consultasMedico: consultasPorDoctor
          };
        } else if (period === 'month') {
          const monthIndex = mes && Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes - 1 : ahora.getMonth();

          const monthStart = new Date(anioSeleccionado, monthIndex, 1);
          monthStart.setHours(0, 0, 0, 0);

          const monthEnd = new Date(anioSeleccionado, monthIndex + 1, 1);
          monthEnd.setHours(0, 0, 0, 0);

          for (const doctor of doctores) {
            const count = yield _models.Consulta.count({
              where: {
                fk_doctor_id: parseInt(doctor.id_doctor),
                createdAt: {
                  [_sequelize.Op.gte]: monthStart,
                  [_sequelize.Op.lt]: monthEnd
                }
              }
            });
            consultasPorDoctor.push(count);
          }

          return {
            nombresDoctores,
            consultasMedico: consultasPorDoctor
          };
        } else if (period === 'week') {
          const semanaInicio = new Date();
          semanaInicio.setDate(semanaInicio.getDate() - semanaInicio.getDay());
          semanaInicio.setHours(0, 0, 0, 0);

          const semanaFin = new Date(semanaInicio);
          semanaFin.setDate(semanaFin.getDate() + 7);

          for (const doctor of doctores) {
            const count = yield _models.Consulta.count({
              where: {
                fk_doctor_id: parseInt(doctor.id_doctor),
                createdAt: {
                  [_sequelize.Op.gte]: semanaInicio,
                  [_sequelize.Op.lt]: semanaFin
                }
              }
            });
            consultasPorDoctor.push(count);
          }

          return {
            nombresDoctores,
            consultasMedico: consultasPorDoctor
          };
        } else {
          throw new _apolloServerExpress.UserInputError('Periodo no válido. Use "month", "week" o "year".');
        }
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function totalConsultasRealizadasPorMedico(_x17, _x18) {
      return _ref11.apply(this, arguments);
    };
  })(),

  // #7 Edad promedio de pacientes

  distribucionPorEdad: (() => {
    var _ref12 = _asyncToGenerator(function* (_, { id_cdi }) {
      try {
        const [rango1, rango2, rango3, rango4] = yield Promise.all([_models.Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: _models.Persona,
            as: 'persona',
            where: {
              edad: {
                [_sequelize.Op.gte]: 0,
                [_sequelize.Op.lte]: 12
              }
            },
            attributes: []
          }]
        }), _models.Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: _models.Persona,
            as: 'persona',
            where: {
              edad: {
                [_sequelize.Op.gte]: 13,
                [_sequelize.Op.lte]: 18
              }
            },
            attributes: []
          }]
        }), _models.Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: _models.Persona,
            as: 'persona',
            where: {
              edad: {
                [_sequelize.Op.gte]: 19,
                [_sequelize.Op.lte]: 64
              }
            },
            attributes: []
          }]
        }), _models.Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: _models.Persona,
            as: 'persona',
            where: {
              edad: {
                [_sequelize.Op.gte]: 65
              }
            },
            attributes: []
          }]
        })]);

        return [rango1, rango2, rango3, rango4];
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function distribucionPorEdad(_x19, _x20) {
      return _ref12.apply(this, arguments);
    };
  })(),

  // #8 Diagnosticos mas frecuentes: Top 10 diagnosticos mas frecuentes por CDI

  top10DiagnosticosMasComunes: (() => {
    var _ref13 = _asyncToGenerator(function* (_, { id_cdi, periodo, mes, anio }) {
      try {
        const period = periodo || 'month';
        const ahora = new Date();
        const anioSeleccionado = anio && Number.isInteger(anio) ? anio : ahora.getFullYear();

        let startDate;
        let endDate = new Date();

        if (period === 'year') {
          startDate = new Date(anioSeleccionado, 0, 1);
          startDate.setHours(0, 0, 0, 0);
          endDate = new Date(anioSeleccionado + 1, 0, 1);
          endDate.setHours(0, 0, 0, 0);
        } else if (period === 'month') {
          const monthIndex = mes && Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes - 1 : ahora.getMonth();

          startDate = new Date(anioSeleccionado, monthIndex, 1);
          startDate.setHours(0, 0, 0, 0);

          endDate = new Date(anioSeleccionado, monthIndex + 1, 1);
          endDate.setHours(0, 0, 0, 0);
        } else if (period === 'week') {
          startDate = new Date();
          startDate.setDate(startDate.getDate() - startDate.getDay());
          startDate.setHours(0, 0, 0, 0);

          endDate = new Date(startDate);
          endDate.setDate(endDate.getDate() + 7);
        } else {
          throw new _apolloServerExpress.UserInputError('Periodo no válido. Use "month", "week" o "year".');
        }

        const top10DiagnosticosMasComunes = yield _models.Diagnostico.findAll({
          where: {
            fk_cdi_id: id_cdi,
            createdAt: {
              [_sequelize.Op.gte]: startDate,
              [_sequelize.Op.lt]: endDate
            }
          },
          attributes: ['condicion', [_sequelize.Sequelize.fn('COUNT', _sequelize.Sequelize.col('id_diagnostico')), 'total']],
          group: ['condicion'],
          order: [[_sequelize.Sequelize.literal('total'), 'DESC']],
          limit: 10
        });

        const condiciones = top10DiagnosticosMasComunes.map(function (diagnostico) {
          return diagnostico.condicion;
        });
        const totales = top10DiagnosticosMasComunes.map(function (diagnostico) {
          return parseInt(diagnostico.getDataValue('total'));
        });

        return {
          condiciones,
          totales
        };
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function top10DiagnosticosMasComunes(_x21, _x22) {
      return _ref13.apply(this, arguments);
    };
  })(),

  // #9 Estadística de pacientes por area_de_trabajo del doctor
  cantidadPacientesPorAreaDeTrabajo: (() => {
    var _ref14 = _asyncToGenerator(function* (_, { id_cdi }) {
      try {
        const cantidadPacientesPorArea = yield _models.Paciente.findAll({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: _models.Doctor,
            as: 'doctor',
            attributes: []
          }],
          attributes: [[_sequelize.Sequelize.col('doctor.area_de_trabajo'), 'area'], [_sequelize.Sequelize.fn('COUNT', _sequelize.Sequelize.col('id_paciente')), 'total']],
          group: [_sequelize.Sequelize.col('doctor.area_de_trabajo')],
          order: [[_sequelize.Sequelize.literal('total'), 'DESC']]
        });

        const areas = cantidadPacientesPorArea.map(function (item) {
          return item.getDataValue('area') || 'Sin Área';
        });
        const totales = cantidadPacientesPorArea.map(function (item) {
          return parseInt(item.getDataValue('total'));
        });

        return {
          areas,
          totales
        };
      } catch (error) {
        console.error(error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function cantidadPacientesPorAreaDeTrabajo(_x23, _x24) {
      return _ref14.apply(this, arguments);
    };
  })()

};

const Mutation = {

  crearCDI: (() => {
    var _ref15 = _asyncToGenerator(function* (parent, { input }) {
      try {
        const { usuarioInput } = input,
              cdiInput = _objectWithoutProperties(input, ["usuarioInput"]);

        const { numero_cdi, nombre } = cdiInput;
        const cdiExistente = yield _models.CDI.findOne({
          where: {
            [_sequelize.Op.or]: [{ numero_cdi }, { nombre }]
          }
        });
        if (cdiExistente) {
          throw new _apolloServerExpress.UserInputError("Ya existe un CDI con ese código o nombre");
        }

        const usuarioExistente = yield _models.Usuario.findOne({
          where: { nombre_usuario: usuarioInput.nombre_usuario }
        });

        if (usuarioExistente) {
          throw new _apolloServerExpress.UserInputError("Ya existe un usuario con ese nombre de usuario");
        }

        const nuevoCDI = yield _models.CDI.create(cdiInput);

        const nuevoUsuario = yield _models.Usuario.create({
          rol: "cdi",
          nombre_usuario: usuarioInput.nombre_usuario,
          estado: "activo",
          fk_cdi_id: nuevoCDI.id_cdi,
          contrasena: yield (0, _password.createPassword)(usuarioInput.contrasena)
        });

        return _extends({}, nuevoCDI.get(), {
          usuario: _extends({}, nuevoUsuario.get(), {
            contrasena: null
          })
        });
      } catch (error) {
        console.error('Error al crear el CDI:', error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function crearCDI(_x25, _x26) {
      return _ref15.apply(this, arguments);
    };
  })(),

  actualizarCDI: (() => {
    var _ref16 = _asyncToGenerator(function* (parent, { id_cdi, input }) {
      const { usuarioInput } = input,
            cdiInput = _objectWithoutProperties(input, ["usuarioInput"]);
      const cdi = yield _models.CDI.findByPk(id_cdi);
      if (!cdi) throw new _apolloServerExpress.UserInputError("CDI no encontrado");

      const usuario = yield _models.Usuario.findOne({ where: { fk_cdi_id: id_cdi } });
      if (!usuario) throw new _apolloServerExpress.UserInputError("Usuario asociado al CDI no encontrado");

      try {
        if (cdiInput.numero_cdi && cdiInput.numero_cdi !== cdi.numero_cdi) {
          const cdiExistente = yield _models.CDI.findOne({ where: { numero_cdi: cdiInput.numero_cdi } });
          if (cdiExistente) throw new _apolloServerExpress.UserInputError("Ya existe un CDI con ese número");
        }

        if (usuarioInput && usuarioInput.nombre_usuario && usuarioInput.nombre_usuario !== usuario.nombre_usuario) {
          const usuarioExistente = yield _models.Usuario.findOne({ where: { nombre_usuario: usuarioInput.nombre_usuario } });
          if (usuarioExistente) throw new _apolloServerExpress.UserInputError("Ya existe un usuario con ese nombre de usuario");
        }

        yield _models.CDI.update(cdiInput, { where: { id_cdi: id_cdi } });

        if (usuarioInput) {
          const { contrasena } = usuarioInput,
                restoUsuario = _objectWithoutProperties(usuarioInput, ["contrasena"]);
          if (contrasena) {
            const passEnciptada = yield (0, _password.createPassword)(contrasena);
            yield usuario.update(_extends({}, restoUsuario, { contrasena: passEnciptada }));
          } else {
            yield usuario.update(restoUsuario);
          }
        }

        return _extends({}, cdi.get(), {
          usuario: _extends({}, usuario.get(), {
            contrasena: null
          })
        });
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function actualizarCDI(_x27, _x28) {
      return _ref16.apply(this, arguments);
    };
  })(),

  inhabilitarCDI: (() => {
    var _ref17 = _asyncToGenerator(function* (parent, { id_cdi, estado }) {
      try {
        const cdi = yield _models.CDI.findByPk(id_cdi);

        if (!cdi) {
          throw new Error('CDI no encontrado');
        }
        console.log("datos para actualizar", id_cdi, estado);

        yield _models.CDI.update({ estado: estado }, { where: { id_cdi: id_cdi } });

        const [updated] = yield _models.Usuario.update({ estado: estado }, { where: { fk_cdi_id: cdi.id_cdi } });

        if (updated === 0) {
          throw new Error('No se encontró ningún usuario asociado para inhabilitar');
        }

        return true;
      } catch (error) {
        console.error('Error inhabilitando al CDI:', error);
        throw new Error(error.message);
      }
    });

    return function inhabilitarCDI(_x29, _x30) {
      return _ref17.apply(this, arguments);
    };
  })()
};
exports.Mutation = Mutation;