"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _apolloServerExpress = require("apollo-server-express");

var _models = require("../../models");

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Query = exports.Query = {
  // Obtener datos de una persona por su numero de cédula de identidad
  personaPorCedula: (() => {
    var _ref = _asyncToGenerator(function* (parent, { cedula_identidad }) {
      try {
        console.log('cedula para la query:', cedula_identidad);

        const persona = yield _models.Persona.findOne({
          where: { cedula_identidad },
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }, { model: _models.CDI, as: "cdi" },
          // Si la persona está registrada como paciente, traer todo lo relacionado al paciente
          {
            model: _models.Paciente,
            as: "paciente",
            include: [{ model: _models.CDI, as: "cdi" }, {
              model: _models.Doctor,
              as: "doctor",
              include: [{
                model: _models.Persona,
                as: "persona",
                include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
              }]
            }, {
              model: _models.Diagnostico,
              as: "diagnosticos",
              include: [{ model: _models.Doctor, as: "doctores", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Consulta,
              as: "consultas",
              include: [{ model: _models.CDI, as: "cdis" }, { model: _models.Doctor, as: "doctores", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Examenes,
              as: "examenes",
              include: [{ model: _models.Doctor, as: "doctores", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Medicamento,
              as: "medicamentos",
              include: [{ model: _models.Doctor, as: "doctores", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Tratamiento,
              as: "tratamientos",
              include: [{ model: _models.Doctor, as: "doctor", include: [{ model: _models.Persona, as: "persona" }] }]
            }]
          },
          // Si la persona está registrada como doctor, traer información del doctor y sus relaciones principales
          {
            model: _models.Doctor,
            as: "doctor",
            include: [{
              model: _models.Persona,
              as: "persona",
              include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
            },
            // { model: CDI, as: "cdi" },
            {
              model: _models.Paciente,
              as: "pacientes",
              include: [{
                model: _models.Persona,
                as: "persona",
                include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
              }]
            }, {
              model: _models.Consulta,
              as: "consultas",
              include: [
              // { model: CDI, as: "cdis" },
              { model: _models.Paciente, as: "pacientes", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Diagnostico,
              as: "diagnosticos",
              include: [{ model: _models.Paciente, as: "pacientes", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Examenes,
              as: "examenes",
              include: [{ model: _models.Paciente, as: "pacientes", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Medicamento,
              as: "medicamentos",
              include: [{ model: _models.Paciente, as: "pacientes", include: [{ model: _models.Persona, as: "persona" }] }]
            }, {
              model: _models.Tratamiento,
              as: "tratamientos",
              include: [{ model: _models.Paciente, as: "paciente", include: [{ model: _models.Persona, as: "persona" }] }]
            }]
          }]
        });
        // if (!persona) throw new UserInputError("Persona no encontrada");
        return persona;
      } catch (error) {
        console.error("Error al obtener datos de persona:", error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function personaPorCedula(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })(),
  // ...existing code...

  // Obtener todos los pacientes
  pacientes: (() => {
    var _ref2 = _asyncToGenerator(function* () {
      try {
        const pacientes = yield _models.Paciente.findAll({
          include: [{ model: _models.CDI, as: 'cdi' }, {
            model: _models.Doctor, as: 'doctor', include: [{
              model: _models.Persona, as: 'persona',
              include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
            }]
          }, {
            model: _models.Persona,
            as: "persona",
            include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
          }, {
            model: _models.Diagnostico,
            as: "diagnosticos",
            include: [{ model: _models.Doctor, as: 'doctores', include: [{ model: _models.Persona, as: 'persona' }] }]
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
        });
        console.log("TODOS LOS PACIENTES: ", pacientes);

        return pacientes;
      } catch (error) {
        console.error("Error al obtener pacientes:", error);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function pacientes() {
      return _ref2.apply(this, arguments);
    };
  })(),
  // Obtener un paciente por ID
  paciente: (() => {
    var _ref3 = _asyncToGenerator(function* (parent, { id_paciente }) {
      try {
        const paciente = yield _models.Paciente.findByPk(id_paciente, {
          include: [{
            model: _models.Persona,
            as: "persona",
            include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
          }, {
            model: _models.Diagnostico,
            as: "diagnosticos",
            include: [{ model: _models.Doctor, as: 'doctores', include: [{ model: _models.Persona, as: 'persona' }] }]
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
        });
        if (!paciente) throw new _apolloServerExpress.UserInputError("Paciente no encontrado");
        return paciente;
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function paciente(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  })()

};

const Mutation = {

  crearPaciente: (() => {
    var _ref4 = _asyncToGenerator(function* (parent, { input }) {
      try {
        const { personaInput } = input,
              pacienteInput = _objectWithoutProperties(input, ["personaInput"]);
        console.log('recibiendo input nuevo paciente: ', pacienteInput);

        // NOTA: Cambios realizados aquí para soportar los casos solicitados:
        // 1) Si la persona ya existe por cédula, no lanzar error inmediatamente.
        //    - Si la persona ya es paciente -> error "Paciente ya está registrado".
        //    - Si la persona existe y es doctor -> crear paciente ligado a esa persona.
        //    - Si la persona existe pero no es paciente ni doctor -> crear paciente ligado a la persona existente.
        // 2) Si la persona NO existe, mantener la lógica previa: crear telefono/correo/direccion, persona y paciente.

        // Preparar variables que usaremos más abajo
        let telefono = null,
            correo = null,
            direccion = null;

        // Si se proporcionó cédula, buscar persona existente
        if (personaInput && personaInput.cedula_identidad) {
          const personaExistente = yield _models.Persona.findOne({ where: { cedula_identidad: personaInput.cedula_identidad } });
          if (personaExistente) {
            // Si la persona ya está registrada como paciente -> error
            const pacienteExistente = yield _models.Paciente.findOne({ where: { fk_persona_id: personaExistente.id_persona } });
            if (pacienteExistente) {
              // Modificación: antes se lanzaba error si la persona existía; ahora solo si es paciente
              throw new _apolloServerExpress.UserInputError("El paciente ya está registrado");
            }

            // Si la persona existe y es doctor -> crear paciente usando la persona existente
            const doctorExistente = yield _models.Doctor.findOne({ where: { fk_persona_id: personaExistente.id_persona } });
            if (doctorExistente) {
              // Crear paciente ligado a la persona existente (no creamos telefono/correo/direccion)
              const paciente = yield _models.Paciente.create(_extends({}, pacienteInput, {
                fk_persona_id: personaExistente.id_persona
              }));

              // Retornar paciente con relaciones anidadas
              const nuevoPaciente = yield _models.Paciente.findByPk(paciente.id_paciente, {
                include: [{
                  model: _models.Persona,
                  as: "persona",
                  include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
                }]
              });

              return _extends({}, nuevoPaciente.get(), {
                persona: nuevoPaciente.persona ? _extends({}, nuevoPaciente.persona.get(), {
                  telefono: nuevoPaciente.persona.get().telefono ? nuevoPaciente.persona.get().telefono.get() : null,
                  correo: nuevoPaciente.persona.get().correo ? nuevoPaciente.persona.get().correo.get() : null,
                  direccion: nuevoPaciente.persona.get().direccion ? nuevoPaciente.persona.get().direccion.get() : null
                }) : null
              });
            }

            // Si la persona existe pero NO es paciente (y tampoco doctor), podemos crear el paciente usando la persona existente
            const paciente = yield _models.Paciente.create(_extends({}, pacienteInput, {
              fk_persona_id: personaExistente.id_persona
            }));

            const nuevoPaciente = yield _models.Paciente.findByPk(paciente.id_paciente, {
              include: [{
                model: _models.Persona,
                as: "persona",
                include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
              }]
            });

            return _extends({}, nuevoPaciente.get(), {
              persona: nuevoPaciente.persona ? _extends({}, nuevoPaciente.persona.get(), {
                telefono: nuevoPaciente.persona.get().telefono ? nuevoPaciente.persona.get().telefono.get() : null,
                correo: nuevoPaciente.persona.get().correo ? nuevoPaciente.persona.get().correo.get() : null,
                direccion: nuevoPaciente.persona.get().direccion ? nuevoPaciente.persona.get().direccion.get() : null
              }) : null
            });
          }
        }

        // Si llegamos aquí, la persona NO existe por cédula -> validar unicidad de telefono y correo (si vienen)
        if (personaInput && personaInput.telefonoInput) {
          const foundTelefono = yield _models.Telefono.findOne({ where: { numero: personaInput.telefonoInput.numero } });
          if (foundTelefono) {
            throw new _apolloServerExpress.UserInputError("Ya existe un teléfono con ese número");
          }
        }

        if (personaInput && personaInput.correoInput) {
          const foundCorreo = yield _models.Correo.findOne({ where: { correo: personaInput.correoInput.correo } });
          if (foundCorreo) {
            throw new _apolloServerExpress.UserInputError("Ya existe un correo con ese email");
          }
        }

        // 2. Crear registros relacionados si vienen en el input

        if (personaInput && personaInput.telefonoInput) {
          telefono = yield _models.Telefono.create(personaInput.telefonoInput);
        }
        if (personaInput && personaInput.correoInput) {
          correo = yield _models.Correo.create(personaInput.correoInput);
        }
        if (personaInput && personaInput.direccionInput) {
          direccion = yield _models.Direccion.create(personaInput.direccionInput);
        }

        // 3. Crear persona con las llaves foráneas de los registros creados
        const personaData = _extends({}, personaInput, {
          fk_telefono_id: telefono ? telefono.id_telefono : null,
          fk_correo_id: correo ? correo.id_correo : null,
          fk_direccion_id: direccion ? direccion.id_direccion : null
        });

        // Quitar los inputs anidados para evitar error en el modelo
        delete personaData.telefonoInput;
        delete personaData.correoInput;
        delete personaData.direccionInput;

        const persona = yield _models.Persona.create(personaData);

        // 4. Crear paciente con la llave foránea de persona
        const paciente = yield _models.Paciente.create(_extends({}, pacienteInput, {
          fk_persona_id: persona.id_persona
        }));

        // 5. Retornar paciente con las relaciones anidadas
        const nuevoPaciente = yield _models.Paciente.findByPk(paciente.id_paciente, {
          include: [{
            model: _models.Persona,
            as: "persona",
            include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
          }]
        });

        return _extends({}, nuevoPaciente.get(), {
          persona: _extends({}, nuevoPaciente.persona.get(), {
            telefono: nuevoPaciente.persona.get().telefono.get(),
            correo: nuevoPaciente.persona.get().correo.get(),
            direccion: nuevoPaciente.persona.get().direccion.get()
          })
        });
      } catch (error) {
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function crearPaciente(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  })(),

  actualizarPaciente: (() => {
    var _ref5 = _asyncToGenerator(function* (parent, { id_paciente, input }) {
      const { personaInput } = input,
            pacienteInput = _objectWithoutProperties(input, ["personaInput"]);

      const paciente = yield _models.Paciente.findByPk(id_paciente);
      if (!paciente) throw new _apolloServerExpress.UserInputError("Paciente no encontrado");

      yield _models.Paciente.update(pacienteInput, { where: { id_paciente } });

      if (personaInput) {
        const persona = yield _models.Persona.findByPk(paciente.fk_persona_id);
        if (!persona) throw new _apolloServerExpress.UserInputError("Persona asociada no encontrada");

        const { telefonoInput, correoInput, direccionInput } = personaInput,
              restPersona = _objectWithoutProperties(personaInput, ["telefonoInput", "correoInput", "direccionInput"]);
        yield _models.Persona.update(restPersona, { where: { id_persona: paciente.fk_persona_id } });

        if (telefonoInput && persona.get().fk_telefono_id) {
          const telefono = yield _models.Telefono.findByPk(persona.get().fk_telefono_id);
          if (telefono) yield _models.Telefono.update(telefonoInput, { where: { id_telefono: persona.get().fk_telefono_id } });
        }

        if (correoInput && persona.get().fk_correo_id) {
          const correo = yield _models.Correo.findByPk(persona.get().fk_correo_id);
          if (correo) yield _models.Correo.update(correoInput, { where: { id_correo: persona.get().fk_correo_id } });
        }

        if (direccionInput && persona.get().fk_direccion_id) {
          const direccion = yield _models.Direccion.findByPk(persona.get().fk_direccion_id);
          if (direccion) yield _models.Direccion.update(direccionInput, { where: { id_direccion: persona.get().fk_direccion_id } });
        }
      }

      const pacienteActualizado = yield _models.Paciente.findByPk(id_paciente, {
        include: [{
          model: _models.Persona,
          as: "persona",
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        }]
      });

      return _extends({}, pacienteActualizado.get(), {
        persona: _extends({}, pacienteActualizado.persona.get(), {
          telefono: pacienteActualizado.persona.get().telefono.get(),
          correo: pacienteActualizado.persona.get().correo.get(),
          direccion: pacienteActualizado.persona.get().direccion.get()
        })
      });
    });

    return function actualizarPaciente(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  })(),

  eliminarPaciente: (() => {
    var _ref6 = _asyncToGenerator(function* (parent, { id_paciente }) {

      const paciente = yield _models.Paciente.findByPk(id_paciente);
      if (!paciente) throw new _apolloServerExpress.UserInputError("Paciente no encontrado");

      const persona = yield _models.Persona.findByPk(paciente.fk_persona_id);
      if (persona) {

        const correo = yield _models.Correo.findByPk(persona.fk_correo_id);
        const telefono = yield _models.Telefono.findByPk(persona.fk_telefono_id);
        const direccion = yield _models.Direccion.findByPk(persona.fk_direccion_id);

        if (correo) yield correo.destroy();
        if (telefono) yield telefono.destroy();
        if (direccion) yield direccion.destroy();

        yield persona.destroy();
      }

      yield paciente.destroy();

      return true;
    });

    return function eliminarPaciente(_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  })(),
  // Resolver explícito para el campo persona en Paciente (opcional si usas include)
  Paciente: {
    persona: (() => {
      var _ref7 = _asyncToGenerator(function* (paciente) {
        return yield _models.Persona.findByPk(paciente.fk_persona_id, {
          include: [{ model: _models.Telefono, as: "telefono" }, { model: _models.Correo, as: "correo" }, { model: _models.Direccion, as: "direccion" }]
        });
      });

      return function persona(_x11) {
        return _ref7.apply(this, arguments);
      };
    })()
  }

};
exports.Mutation = Mutation;