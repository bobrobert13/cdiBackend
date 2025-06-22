import { UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

// Asume que tienes un modelo Usuario de Sequelize importado:
import { Persona, Telefono, Correo, Direccion } from "../../models"; // Ajusta el path según tu estructura

//input example:
// {
//   "input": {
//     "anos_experiencia": 10,
//     "numero_carnet": "DR-12345",
//     "area_de_trabajo": "Pediatría",
//     "horario": "Lunes a Viernes 8-16",
//     "personaInput": {
//       "nombre1": "Ana",
//       "nombre2": "María",
//       "apellido1": "Ruiz",
//       "apellido2": "Gómez",
//       "sexo": "F",
//       "edad": 42,
//       "estado_civil": "Casada",
//       "ocupacion": "Médico",
//       "cedula_identidad": "23456789",
//       "telefonoInput": {
//         "codigo": "0412",
//         "numero": "1234567"
//       },
//       "correoInput": {
//         "correo": "ana.ruiz@ejemplo.com"
//       },
//       "direccionInput": {
//         "parroquia": "Centro",
//         "codigo_postal": "1010",
//         "numero_casa": "22",
//         "calle": "Principal",
//         "punto_referencia": "Frente a la plaza",
//         "sector": "El Centro"
//       }
//     }
//   }
// }

//input update:

// {
//   "id_doctor": 1,
//   "input": {
//     "anos_experiencia": 15,
//     "horario": "Lunes a Viernes 7-15",
//     "personaInput": {
//       "nombre1": "Ana Carolina",
//       "telefonoInput": {
//         "codigo": "0414",
//         "numero": "9876543"
//       },
//       "direccionInput": {
//         "parroquia": "Nueva Parroquia",
//         "codigo_postal": "1020",
//         "numero_casa": "33",
//         "calle": "Secundaria"
//       }
//     }
//   }
// }


export const Query = {

    doctores: async () => {
        return await Doctor.findAll({
          include: [{ model: Persona, as: "persona" }]
        });
      },
  
      doctor: async (parent, { id_doctor }) => {
        const doctor = await Doctor.findByPk(id_doctor, {
          include: [{ model: Persona, as: "persona" }]
        });
        if (!doctor) throw new UserInputError("Doctor no encontrado");
        return doctor;
      },
};

export const Mutation = {
  crearDoctor: async (parent, { input }) => {
    const { personaInput, ...doctorInput } = input;

    // Crear teléfono, correo y dirección si vienen
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

    // Crear persona
    const personaData = {
      ...personaInput,
      fk_telefono_id: telefono ? telefono.id_telefono : null,
      fk_correo_id: correo ? correo.id_correo : null,
      fk_direccion_id: direccion ? direccion.id_direccion : null,
    };
    // Limpiar subinputs
    delete personaData.telefonoInput;
    delete personaData.correoInput;
    delete personaData.direccionInput;

    const persona = await Persona.create(personaData);

    // Crear doctor asociado a persona
    const doctor = await Doctor.create({
      ...doctorInput,
      fk_persona_id: persona.id_persona,
    });

    // Retornar doctor con relaciones anidadas
    return await Doctor.findByPk(doctor.id_doctor, {
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
  
  actualizarDoctor: async (parent, { id_doctor, input }) => {
    // 1. Buscar el doctor existente
    const doctor = await Doctor.findByPk(id_doctor, {
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

    if (!doctor) throw new UserInputError("Doctor no encontrado");

    // 2. Actualizar datos del doctor
    await doctor.update({
      anos_experiencia: input.anos_experiencia || doctor.anos_experiencia,
      numero_carnet: input.numero_carnet || doctor.numero_carnet,
      area_de_trabajo: input.area_de_trabajo || doctor.area_de_trabajo,
      horario: input.horario || doctor.horario,
    });

    // 3. Si viene personaInput, actualizar persona y sus relaciones
    if (input.personaInput) {
      const personaInput = input.personaInput;
      const persona = doctor.persona;

      // Actualizar teléfono si viene
      if (personaInput.telefonoInput) {
        if (persona.telefono) {
          await persona.telefono.update(personaInput.telefonoInput);
        } else {
          const nuevoTelefono = await Telefono.create(personaInput.telefonoInput);
          await persona.update({ fk_telefono_id: nuevoTelefono.id_telefono });
        }
      }

      // Actualizar correo si viene
      if (personaInput.correoInput) {
        if (persona.correo) {
          await persona.correo.update(personaInput.correoInput);
        } else {
          const nuevoCorreo = await Correo.create(personaInput.correoInput);
          await persona.update({ fk_correo_id: nuevoCorreo.id_correo });
        }
      }

      // Actualizar dirección si viene
      if (personaInput.direccionInput) {
        if (persona.direccion) {
          await persona.direccion.update(personaInput.direccionInput);
        } else {
          const nuevaDireccion = await Direccion.create(personaInput.direccionInput);
          await persona.update({ fk_direccion_id: nuevaDireccion.id_direccion });
        }
      }

      // Actualizar campos simples de persona
      const camposPersona = { ...personaInput };
      delete camposPersona.telefonoInput;
      delete camposPersona.correoInput;
      delete camposPersona.direccionInput;

      await persona.update(camposPersona);
    }

    // 4. Retornar doctor actualizado con todas las relaciones
    return await Doctor.findByPk(doctor.id_doctor, {
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
  
  eliminarDoctor: async (parent, { id_doctor }) => {
    // Buscar el doctor con todas las relaciones anidadas
    const doctor = await Doctor.findByPk(id_doctor, {
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

    if (!doctor) throw new UserInputError("Doctor no encontrado");

    // Eliminar teléfono si existe
    if (doctor.persona && doctor.persona.telefono) {
      await doctor.persona.telefono.destroy();
    }

    // Eliminar correo si existe
    if (doctor.persona && doctor.persona.correo) {
      await doctor.persona.correo.destroy();
    }

    // Eliminar dirección si existe
    if (doctor.persona && doctor.persona.direccion) {
      await doctor.persona.direccion.destroy();
    }

    // Eliminar persona si existe
    if (doctor.persona) {
      await doctor.persona.destroy();
    }

    // Eliminar doctor
    await doctor.destroy();

    // Retornar true si todo salió bien
    return true;
  },
};
