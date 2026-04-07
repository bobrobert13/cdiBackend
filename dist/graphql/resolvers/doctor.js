"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _apolloServerExpress = require("apollo-server-express");

var _authorizeResolvers = require("../../utils/authorize-resolvers");

var _models = require("../../models");

var _password = require("../../utils/password");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Query = exports.Query = {

  doctores: (() => {
    var _ref = _asyncToGenerator(function* () {
      const todosDoctores = yield _models.Doctor.findAll({
        include: [{ model: _models.Persona, as: "persona", include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }] }, {
          model: _models.Paciente, as: 'pacientes', include: [{
            model: _models.Persona, as: 'persona', include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
          }]
        }, { model: _models.Usuario, as: "usuarios", include: [{ model: _models.CDI, as: "cdi" }] }],
        order: [['createdAt', 'DESC']]
      });
      return todosDoctores;
    });

    return function doctores() {
      return _ref.apply(this, arguments);
    };
  })(),

  doctorPacientes: (() => {
    var _ref2 = _asyncToGenerator(function* (parent, { id_doctor }) {
      try {
        const doctor = yield _models.Doctor.findOne({
          where: {
            fk_cdi_id: id_doctor
          },
          include: [{
            model: _models.Usuario, as: 'usuarios'
          }, {
            model: _models.Paciente, as: "pacientes",
            include: [{
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
            }]
          }, {
            model: _models.Persona, as: 'persona',
            include: [{ model: _models.Telefono, as: 'telefono' }, { model: _models.Correo, as: 'correo' }, { model: _models.Direccion, as: 'direccion' }]
          }]
        });
        if (!doctor) throw new _apolloServerExpress.UserInputError("Doctor no encontrado");
        return doctor;
      } catch (error) {
        console.error("Error al obtener pacientes del doctor:", error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function doctorPacientes(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  })(),

  doctor: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { id_doctor }) {
      const doctor = yield _models.Doctor.findByPk(id_doctor, {
        include: [{ model: _models.Persona, as: "persona" }]
      });
      if (!doctor) throw new _apolloServerExpress.UserInputError("Doctor no encontrado");
      return doctor;
    });

    return function doctor(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  })()

};

const Mutation = exports.Mutation = {
  crearDoctor: (() => {
    var _ref4 = _asyncToGenerator(function* (parent, { input }) {
      try {
        const { personaInput, usuarioInput, doctorInput } = input;

        if (usuarioInput) {
          const usuario = yield _models.Usuario.findOne({
            where: {
              nombre_usuario: usuarioInput.nombre_usuario
            }
          });
          if (usuario) throw new _apolloServerExpress.UserInputError("El nombre de usuario ya existe, intente con otro.");
        }

        if (doctorInput) {
          const doctor = yield _models.Doctor.findOne({
            where: {
              numero_carnet: doctorInput.numero_carnet
            }
          });
          if (doctor) throw new _apolloServerExpress.UserInputError("El número de carnet ya existe y es único por doctor.");
        }

        if (personaInput) {
          const persona = yield _models.Persona.findOne({
            where: {
              cedula_identidad: personaInput.cedula_identidad
            }
          });
          if (persona) throw new _apolloServerExpress.UserInputError("La cédula de identidad ya existe y es única por persona.");
        }

        let telefono = null,
            correo = null,
            direccion = null;

        if (personaInput.telefonoInput) {
          const telefonoExistente = yield _models.Telefono.findOne({
            where: {
              numero: personaInput.telefonoInput.numero
            }
          });
          if (telefonoExistente) {
            throw new _apolloServerExpress.UserInputError("El teléfono esta siendo usado por otro usuario.");
          }
          telefono = yield _models.Telefono.create(personaInput.telefonoInput);
        }

        if (personaInput.correoInput) {
          const correoExistente = yield _models.Correo.findOne({
            where: {
              correo: personaInput.correoInput.correo
            }
          });
          if (correoExistente) {
            throw new _apolloServerExpress.UserInputError("El correo esta siendo usado por otro usuario.");
          }
          correo = yield _models.Correo.create(personaInput.correoInput);
        }

        if (personaInput.direccionInput) {
          direccion = yield _models.Direccion.create(personaInput.direccionInput);
        }

        const personaData = _extends({}, personaInput, {
          fk_telefono_id: telefono ? telefono.id_telefono : null,
          fk_correo_id: correo ? correo.id_correo : null,
          fk_direccion_id: direccion ? direccion.id_direccion : null
        });

        delete personaData.telefonoInput;
        delete personaData.correoInput;
        delete personaData.direccionInput;

        const persona = yield _models.Persona.create(personaData);

        const doctor = yield _models.Doctor.create(_extends({}, doctorInput, {
          fk_persona_id: persona.id_persona
        }));

        const usuario = yield _models.Usuario.create(_extends({}, usuarioInput, {
          contrasena: yield (0, _password.createPassword)(usuarioInput.contrasena),
          fk_doctor_id: doctor.id_doctor,
          fk_cdi_id: doctorInput.fk_cdi_id
        }));

        // Retornar doctor con relaciones anidadas
        const doctorResults = yield _models.Doctor.findByPk(doctor.id_doctor, {
          include: [{
            model: _models.Persona,
            as: "persona",
            include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
          }]
        });
        return _extends({}, doctorResults.get(), {
          persona: _extends({}, doctorResults.get().persona.get(), {
            telefono: doctorResults.get().persona.get().telefono.get(),
            correo: doctorResults.get().persona.get().correo.get(),
            direccion: doctorResults.get().persona.get().direccion.get()
          })
        });
      } catch (error) {
        console.error("Error al crear el doctor:", error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function crearDoctor(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  })(),

  actualizarDoctor: (() => {
    var _ref5 = _asyncToGenerator(function* (parent, { id_doctor, input }) {

      const doctor = yield _models.Doctor.findByPk(id_doctor, {
        include: [{
          model: _models.Persona,
          as: "persona",
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        }]
      });

      if (!doctor) throw new _apolloServerExpress.UserInputError("Doctor no encontrado");

      yield doctor.update({
        anos_experiencia: input.doctorInput.anos_experiencia || doctor.anos_experiencia,
        numero_carnet: input.doctorInput.numero_carnet || doctor.numero_carnet,
        area_de_trabajo: input.doctorInput.area_de_trabajo || doctor.area_de_trabajo,
        horario: input.doctorInput.horario || doctor.horario
      });

      if (input.personaInput) {
        const personaInput = input.personaInput;
        const persona = doctor.persona.get();
        const telefonoActual = persona.telefono.get();
        const correoActual = persona.correo.get();
        const direccionActual = persona.direccion.get();

        if (personaInput.telefonoInput) {
          if (telefonoActual) {
            yield _models.Telefono.update(personaInput.telefonoInput, { where: { id_telefono: telefonoActual.id_telefono } });
          } else {
            const nuevoTelefono = yield _models.Telefono.create(personaInput.telefonoInput);
            yield _models.Persona.update({ fk_telefono_id: nuevoTelefono.id_telefono }, { where: { id_persona: persona.id_persona } });
          }
        }

        if (personaInput.correoInput) {
          if (correoActual.correo) {
            yield _models.Correo.update(personaInput.correoInput, { where: { id_correo: correoActual.id_correo } });
          } else {
            const nuevoCorreo = yield _models.Correo.create(personaInput.correoInput);
            yield _models.Persona.update({ fk_correo_id: nuevoCorreo.id_correo }, { where: { id_persona: persona.id_persona } });
          }
        }

        if (personaInput.direccionInput) {
          if (direccionActual.id_direccion) {
            yield _models.Direccion.update(personaInput.direccionInput, { where: { id_direccion: direccionActual.id_direccion } });
          } else {
            const nuevaDireccion = yield _models.Direccion.create(personaInput.direccionInput);
            yield _models.Persona.update({ fk_direccion_id: nuevaDireccion.id_direccion }, { where: { id_persona: persona.id_persona } });
          }
        }

        const camposPersona = _extends({}, personaInput);
        delete camposPersona.telefonoInput;
        delete camposPersona.correoInput;
        delete camposPersona.direccionInput;

        yield _models.Persona.update(camposPersona, { where: { id_persona: persona.id_persona } });
      }

      if (input.usuarioInput) {
        const usuarioInput = input.usuarioInput;
        const usuario = yield _models.Usuario.findOne({
          where: {
            fk_doctor_id: doctor.id_doctor
          }
        });
        yield usuario.update({
          nombre_usuario: usuarioInput.nombre_usuario || usuario.nombre_usuario,
          contrasena: (yield (0, _password.createPassword)(usuarioInput.contrasena)) || usuario.contrasena,
          estado: usuarioInput.estado || usuario.estado
        });
      }

      const doctorActualizado = yield _models.Doctor.findByPk(doctor.id_doctor, {
        include: [{
          model: _models.Persona,
          as: "persona",
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        }]
      });
      console.log('doctor actualizado:', _extends({}, doctorActualizado.get(), {
        persona: _extends({}, doctorActualizado.get().persona.get(), {
          telefono: doctorActualizado.get().persona.get().telefono.get(),
          correo: doctorActualizado.get().persona.get().correo.get(),
          direccion: doctorActualizado.get().persona.get().direccion.get()
        })
      }));

      return _extends({}, doctorActualizado.get(), {
        persona: _extends({}, doctorActualizado.get().persona.get(), {
          telefono: doctorActualizado.get().persona.get().telefono.get(),
          correo: doctorActualizado.get().persona.get().correo.get(),
          direccion: doctorActualizado.get().persona.get().direccion.get()
        })
      });
    });

    return function actualizarDoctor(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  })(),

  inhabilitarDoctor: (() => {
    var _ref6 = _asyncToGenerator(function* (parent, { id_doctor, estado }) {
      try {
        const doctor = yield _models.Doctor.findByPk(id_doctor);

        if (!doctor) {
          throw new Error('Doctor no encontrado');
        }

        const [updated] = yield _models.Usuario.update({ estado: estado }, { where: { fk_doctor_id: doctor.id_doctor } });

        if (updated === 0) {
          throw new Error('No se encontró ningún usuario asociado para inhabilitar');
        }

        return true;
      } catch (error) {
        console.error('Error inhabilitando al doctor:', error);
        throw new Error('Error al inhabilitar al doctor');
      }
    });

    return function inhabilitarDoctor(_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  })(),

  eliminarDoctor: (() => {
    var _ref7 = _asyncToGenerator(function* (parent, { id_doctor }) {
      // Buscar el doctor con todas las relaciones anidadas
      const doctor = yield _models.Doctor.findByPk(id_doctor, {
        include: [{
          model: _models.Persona,
          as: "persona",
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        }]
      });

      if (!doctor) throw new _apolloServerExpress.UserInputError("Doctor no encontrado");

      // Eliminar teléfono si existe
      if (doctor.persona && doctor.persona.telefono) {
        yield doctor.persona.telefono.destroy();
      }

      // Eliminar correo si existe
      if (doctor.persona && doctor.persona.correo) {
        yield doctor.persona.correo.destroy();
      }

      // Eliminar dirección si existe
      if (doctor.persona && doctor.persona.direccion) {
        yield doctor.persona.direccion.destroy();
      }

      // Eliminar persona si existe
      if (doctor.persona) {
        yield doctor.persona.destroy();
      }

      // Eliminar doctor
      yield doctor.destroy();

      // Retornar true si todo salió bien
      return true;
    });

    return function eliminarDoctor(_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  })()
};