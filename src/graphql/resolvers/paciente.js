import { UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

// input create example:
// {
//   "input": {
//     "enfermedades_cronicas": "Ninguna",
//     "peso": 72.5,
//     "vacunas": "Covid, Hepatitis",
//     "discapacidad": "",
//     "antecedentes_familiares": "Diabetes",
//     "tipo_de_sangre": "O+",
//     "alergias": "Penicilina",
//     "personaInput": {
//       "nombre1": "Juan",
//       "nombre2": "Carlos",
//       "apellido1": "Pérez",
//       "apellido2": "Gómez",
//       "sexo": "M",
//       "edad": 35,
//       "estado_civil": "Soltero",
//       "ocupacion": "Ingeniero",
//       "cedula_identidad": "12345678",
//       "telefonoInput": {
//         "codigo": "0414",
//         "numero": "9876543"
//       },
//       "correoInput": {
//         "correo": "nuevo@email.com"
//       },
//       "direccionInput": {
//         "parroquia": "Centro",
//         "codigo_postal": "1010",
//         "numero_casa": "12",
//         "calle": "Nueva calle",
//         "punto_referencia": "Cerca de la plaza",
//         "sector": "El Centro"
//       }
//     }
//   }
// }

//input update example:
// {
//   "id_paciente": 1,
//   "input": {
//     "peso": 72.5,
//     "alergias": "Penicilina",
//     "personaInput": {
//       "nombre1": "Juan",
//       "apellido1": "Pérez",
//       "telefonoInput": {
//         "codigo": "0414",
//         "numero": "9876543"
//       },
//       "correoInput": {
//         "correo": "nuevo@email.com"
//       },
//       "direccionInput": {
//         "calle": "Nueva calle",
//         "parroquia": "Centro"
//       }
//     }
//   }
// }
import { Paciente, Persona, Telefono, Correo, Direccion, Diagnostico, CDI, Doctor, Consulta, Examenes, Medicamento, Tratamiento } from "../../models";



export const Query = {
  // Obtener todos los pacientes
  pacientes: async () => {
    try {
      const pacientes = await Paciente.findAll(
        {
          include: [
           { model: CDI, as: 'cdi' },
            {
              model: Doctor, as: 'doctor', include: [{
                model: Persona, as: 'persona',
                include: [
                  { model: Telefono, as: "telefono" },
                  { model: Correo, as: "correo" },
                  { model: Direccion, as: "direccion" },
                ]
              }]
            },
            {
              model: Persona,
              as: "persona",
              include: [
                { model: Telefono, as: "telefono" },
                { model: Correo, as: "correo" },
                { model: Direccion, as: "direccion" },
              ],
            },
            {
              model: Diagnostico,
              as: "diagnosticos",
              include: [
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Consulta,
              as: "consultas",
              include: [
                { model: CDI, as: 'cdis' },
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Examenes,
              as: "examenes",
              include: [
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Medicamento,
              as: "medicamentos",
              include: [
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Tratamiento,
              as: "tratamientos",
              include: [
                { model: Doctor, as: 'doctor', include: [{ model: Persona, as: 'persona', }] },
              ]
            },
          ],
        }
      );
      console.log("TODOS LOS PACIENTES: ", pacientes);

      return pacientes;
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
      throw new UserInputError(error.message);
    }

  },
  // Obtener un paciente por ID
  paciente: async (parent, { id_paciente }) => {
    try {
      const paciente = await Paciente.findByPk(id_paciente,
        {
          include: [
            {
              model: Persona,
              as: "persona",
              include: [
                { model: Telefono, as: "telefono" },
                { model: Correo, as: "correo" },
                { model: Direccion, as: "direccion" },
              ],
            },
            {
              model: Diagnostico,
              as: "diagnosticos",
              include: [
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Consulta,
              as: "consultas",
              include: [
                { model: CDI, as: 'cdis' },
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Examenes,
              as: "examenes",
              include: [
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Medicamento,
              as: "medicamentos",
              include: [
                { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
            {
              model: Tratamiento,
              as: "tratamientos",
              include: [
                { model: Doctor, as: 'doctor', include: [{ model: Persona, as: 'persona' }] },
              ]
            },
          ],
        }
      );
      if (!paciente) throw new UserInputError("Paciente no encontrado");
      return paciente;
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },
};

export const Mutation = {

  crearPaciente: async (parent, { input }) => {
    try {
      const { personaInput, ...pacienteInput } = input;


      if (personaInput.telefonoInput) {
        telefono = await Telefono.findOne({ where: { numero: personaInput.telefonoInput.numero } });
        if (telefono) {
          throw new UserInputError("Ya existe un teléfono con ese número");
        }
      }

      if (personaInput.correoInput) {
        correo = await Correo.findOne({ where: { correo: personaInput.correoInput.correo } });
        if (correo) {
          throw new UserInputError("Ya existe un correo con ese email");
        }
      }

      if (personaInput.cedula_identidad) {
        const personaExistente = await Persona.findOne({
          where: { cedula_identidad: personaInput.cedula_identidad }
        });
        if (personaExistente) {
          throw new UserInputError("Ya existe una persona con esa cédula de identidad");
        }
      }

      // 1. Validar que no exista una persona con la misma cedula_identidad
      const personaExistente = await Persona.findOne({
        where: { cedula_identidad: personaInput.cedula_identidad }
      });
      if (personaExistente) {
        throw new UserInputError("Ya existe una persona con esa cédula de identidad");
      }

      // 2. Crear registros relacionados si vienen en el input
      let telefono = null, correo = null, direccion = null;

      if (personaInput.telefonoInput) {
        telefono = await Telefono.create(personaInput.telefonoInput);
      }
      if (personaInput.correoInput) {
        correo = await Correo.create(personaInput.correoInput);
      }
      if (personaInput.direccionInput) {
        direccion = await Direccion.create(personaInput.direccionInput);
      }

      // 3. Crear persona con las llaves foráneas de los registros creados
      const personaData = {
        ...personaInput,
        fk_telefono_id: telefono ? telefono.id_telefono : null,
        fk_correo_id: correo ? correo.id_correo : null,
        fk_direccion_id: direccion ? direccion.id_direccion : null,
      };

      // Quitar los inputs anidados para evitar error en el modelo
      delete personaData.telefonoInput;
      delete personaData.correoInput;
      delete personaData.direccionInput;

      const persona = await Persona.create(personaData);

      // 4. Crear paciente con la llave foránea de persona
      const paciente = await Paciente.create({
        ...pacienteInput,
        fk_persona_id: persona.id_persona,
      });

      // 5. Retornar paciente con las relaciones anidadas
      const nuevoPaciente = await Paciente.findByPk(paciente.id_paciente, {
        include: [
          {
            model: Persona,
            as: "persona",
            include: [
              { model: Telefono, as: "telefono" },
              { model: Correo, as: "correo" },
              { model: Direccion, as: "direccion" },
            ],
          },
        ],
      });

      return {
        ...nuevoPaciente.get(),
        persona: {
          ...nuevoPaciente.persona.get(),
          telefono: nuevoPaciente.persona.get().telefono.get(),
          correo: nuevoPaciente.persona.get().correo.get(),
          direccion: nuevoPaciente.persona.get().direccion.get(),
        }
      };
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },


  actualizarPaciente: async (parent, { id_paciente, input }) => {
    const { personaInput, ...pacienteInput } = input;

    const paciente = await Paciente.findByPk(id_paciente);
    if (!paciente) throw new UserInputError("Paciente no encontrado");

    await Paciente.update(pacienteInput, { where: { id_paciente } });

    if (personaInput) {
      const persona = await Persona.findByPk(paciente.fk_persona_id);
      if (!persona) throw new UserInputError("Persona asociada no encontrada");

      const { telefonoInput, correoInput, direccionInput, ...restPersona } = personaInput;
      await Persona.update(restPersona, { where: { id_persona: paciente.fk_persona_id } });

      if (telefonoInput && persona.get().fk_telefono_id) {
        const telefono = await Telefono.findByPk(persona.get().fk_telefono_id);
        if (telefono) await Telefono.update(telefonoInput, { where: { id_telefono: persona.get().fk_telefono_id } });
      }

      if (correoInput && persona.get().fk_correo_id) {
        const correo = await Correo.findByPk(persona.get().fk_correo_id);
        if (correo) await Correo.update(correoInput, { where: { id_correo: persona.get().fk_correo_id } });
      }

      if (direccionInput && persona.get().fk_direccion_id) {
        const direccion = await Direccion.findByPk(persona.get().fk_direccion_id);
        if (direccion) await Direccion.update(direccionInput, { where: { id_direccion: persona.get().fk_direccion_id } });
      }
    }

    const pacienteActualizado = await Paciente.findByPk(id_paciente, {
      include: [
        {
          model: Persona,
          as: "persona",
          include: [
            { model: Telefono, as: "telefono" },
            { model: Correo, as: "correo" },
            { model: Direccion, as: "direccion" },
          ],
        },
      ],
    });

    return {
      ...pacienteActualizado.get(),
      persona: {
        ...pacienteActualizado.persona.get(),
        telefono: pacienteActualizado.persona.get().telefono.get(),
        correo: pacienteActualizado.persona.get().correo.get(),
        direccion: pacienteActualizado.persona.get().direccion.get(),
      }
    };
  },

  eliminarPaciente: async (parent, { id_paciente }) => {

    const paciente = await Paciente.findByPk(id_paciente);
    if (!paciente) throw new UserInputError("Paciente no encontrado");

    const persona = await Persona.findByPk(paciente.fk_persona_id);
    if (persona) {

      const correo = await Correo.findByPk(persona.fk_correo_id);
      const telefono = await Telefono.findByPk(persona.fk_telefono_id);
      const direccion = await Direccion.findByPk(persona.fk_direccion_id);

      if (correo) await correo.destroy();
      if (telefono) await telefono.destroy();
      if (direccion) await direccion.destroy();

      await persona.destroy();
    }

    await paciente.destroy();

    return true;
  },
  // Resolver explícito para el campo persona en Paciente (opcional si usas include)
  Paciente: {
    persona: async (paciente) => {
      return await Persona.findByPk(paciente.fk_persona_id, {
        include: [
          { model: Telefono, as: "telefono" },
          { model: Correo, as: "correo" },
          { model: Direccion, as: "direccion" },
        ],
      });
    },
  }


};
