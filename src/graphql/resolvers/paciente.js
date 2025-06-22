import { UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

// Asume que tienes un modelo Usuario de Sequelize importado:
import { Paciente, Persona, Telefono, Correo, Direccion } from "../../models";

// input create example:
// {
//   "input": {
//     "fecha_registro": "2024-06-22",
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



export const Query = {
  // Obtener todos los pacientes
  pacientes: async () => {
    return await Paciente.findAll({
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
  },
  // Obtener un paciente por ID
  paciente: async (parent, { id_paciente }) => {
    const paciente = await Paciente.findByPk(id_paciente, {
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
    if (!paciente) throw new UserInputError("Paciente no encontrado");
    return paciente;
  },
};

export const Mutation = {

  crearPaciente: async (parent, { input }) => {
    const { personaInput, ...pacienteInput } = input;

    // 1. Crear registros relacionados si vienen en el input
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

    // 2. Crear persona con las llaves foráneas de los registros creados
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

    // 3. Crear paciente con la llave foránea de persona
    const paciente = await Paciente.create({
      ...pacienteInput,
      fk_persona_id: persona.id_persona,
    });

    // 4. Retornar paciente con las relaciones anidadas
    return await Paciente.findByPk(paciente.id_paciente, {
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
  },


  // Actualizar un paciente existente
  actualizarPaciente: async (parent, { id_paciente, input }) => {
    // Desestructuramos los posibles campos anidados
    const { personaInput, ...pacienteInput } = input;

    // 1. Buscar paciente
    const paciente = await Paciente.findByPk(id_paciente);
    if (!paciente) throw new UserInputError("Paciente no encontrado");

    // 2. Actualizar datos de paciente
    await paciente.update(pacienteInput);

    // 3. Si viene personaInput, actualizar persona y sus relaciones
    if (personaInput) {
      const persona = await Persona.findByPk(paciente.fk_persona_id);
      if (!persona) throw new UserInputError("Persona asociada no encontrada");

      // Actualizar datos de persona
      const { telefonoInput, correoInput, direccionInput, ...restPersona } = personaInput;
      await persona.update(restPersona);

      // Actualizar teléfono si viene
      if (telefonoInput && persona.fk_telefono_id) {
        const telefono = await Telefono.findByPk(persona.fk_telefono_id);
        if (telefono) await telefono.update(telefonoInput);
      }

      // Actualizar correo si viene
      if (correoInput && persona.fk_correo_id) {
        const correo = await Correo.findByPk(persona.fk_correo_id);
        if (correo) await correo.update(correoInput);
      }

      // Actualizar dirección si viene
      if (direccionInput && persona.fk_direccion_id) {
        const direccion = await Direccion.findByPk(persona.fk_direccion_id);
        if (direccion) await direccion.update(direccionInput);
      }
    }

    // 4. Retornar el paciente actualizado con todas sus relaciones
    return await Paciente.findByPk(id_paciente, {
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
  },

  eliminarPaciente: async (parent, { id_paciente }) => {
    const paciente = await Paciente.findByPk(id_paciente);
    if (!paciente) throw new UserInputError("Paciente no encontrado");

    // Eliminar la persona asociada (opcional, según reglas de negocio)
    const persona = await Persona.findByPk(paciente.fk_persona_id);
    await paciente.destroy();
    if (persona) await persona.destroy();

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
