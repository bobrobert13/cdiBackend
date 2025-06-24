import { ApolloError, UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import { Persona, Telefono, Correo, Direccion, Usuario, Doctor } from "../../models"; 

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
//     "usuarioInput": {
//       "nombre_usuario": "DrAna",
//       "contrasena": "123456",
//       "rol": "doctor",
//       "estado": "activo"
//     }
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
//     },
//     "usuarioInput": {
//       "nombre_usuario": "DrAna",
//       "contrasena": "123456",
//       "rol": "doctor",
//       "estado": "activo"
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
      const { personaInput, usuarioInput, doctorInput } = input;

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
  
      const usuario = await Usuario.create({
        ...usuarioInput,
        fk_doctor_id: doctor.id_doctor,
        fk_cdi_id: personaInput.fk_cdi_id,
      });
  
      // Retornar doctor con relaciones anidadas
      const doctorResults = await Doctor.findByPk(doctor.id_doctor, {
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
        ...doctorResults.get(),
        persona: {
          ...doctorResults.get().persona.get(),
          telefono: doctorResults.get().persona.get().telefono.get(),
          correo: doctorResults.get().persona.get().correo.get(),
          direccion: doctorResults.get().persona.get().direccion.get(),
        }
      };
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
      anos_experiencia: input.doctorInput.anos_experiencia || doctor.anos_experiencia,
      numero_carnet: input.doctorInput.numero_carnet || doctor.numero_carnet,
      area_de_trabajo: input.doctorInput.area_de_trabajo || doctor.area_de_trabajo,
      horario: input.doctorInput.horario || doctor.horario,
    });

    // 3. Si viene personaInput, actualizar persona y sus relaciones
    if (input.personaInput) {
      const personaInput = input.personaInput;
      const persona = doctor.persona.get();
      const telefonoActual = persona.telefono.get();
      const correoActual = persona.correo.get();
      const direccionActual = persona.direccion.get();


      // Actualizar teléfono si viene
      if (personaInput.telefonoInput) {
        if (telefonoActual) {
          await Telefono.update(personaInput.telefonoInput, { where: { id_telefono: telefonoActual.id_telefono } });
        } else {
          const nuevoTelefono = await Telefono.create(personaInput.telefonoInput);
          await Persona.update({ fk_telefono_id: nuevoTelefono.id_telefono }, { where: { id_persona: persona.id_persona } });
        }
      }

      // Actualizar correo si viene
      if (personaInput.correoInput) {
        if (correoActual.correo) {
          await Correo.update(personaInput.correoInput, { where: { id_correo: correoActual.id_correo } });
        } 
        else {
          const nuevoCorreo = await Correo.create(personaInput.correoInput);
          await Persona.update({ fk_correo_id: nuevoCorreo.id_correo }, { where: { id_persona: persona.id_persona } });
        }
      }

      // Actualizar dirección si viene
      if (personaInput.direccionInput) {
        if (direccionActual.id_direccion) {
          await Direccion.update(personaInput.direccionInput, { where: { id_direccion: direccionActual.id_direccion } });
        } else {
          const nuevaDireccion = await Direccion.create(personaInput.direccionInput);
          await Persona.update({ fk_direccion_id: nuevaDireccion.id_direccion }, { where: { id_persona: persona.id_persona } });
        }
      }

      // Actualizar campos simples de persona
      const camposPersona = { ...personaInput };
      delete camposPersona.telefonoInput;
      delete camposPersona.correoInput;
      delete camposPersona.direccionInput;

      await Persona.update(camposPersona, { where: { id_persona: persona.id_persona } });
    }

    // SI VIENE usuarioInput, actualizar el usuario:
    if(input.usuarioInput){
      const usuarioInput = input.usuarioInput;
      const usuario = await Usuario.findOne({
        where: {
          fk_doctor_id: doctor.id_doctor,
        }
      });
      await usuario.update({
        nombre_usuario: usuarioInput.nombre_usuario || usuario.nombre_usuario,
        contrasena: usuarioInput.contrasena || usuario.contrasena,
        // rol: usuarioInput.rol || usuario.rol,
        estado: usuarioInput.estado || usuario.estado,
      });
    }

    // 4. Retornar doctor actualizado con todas las relaciones
   const doctorActualizado = await Doctor.findByPk(doctor.id_doctor, {
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
    console.log('doctor actualizado:', {
      ...doctorActualizado.get(),
      persona: {
        ...doctorActualizado.get().persona.get(),
        telefono: doctorActualizado.get().persona.get().telefono.get(),
        correo: doctorActualizado.get().persona.get().correo.get(),
        direccion: doctorActualizado.get().persona.get().direccion.get(),
      }
    });
    
    return {
      ...doctorActualizado.get(),
      persona: {
        ...doctorActualizado.get().persona.get(),
        telefono: doctorActualizado.get().persona.get().telefono.get(),
        correo: doctorActualizado.get().persona.get().correo.get(),
        direccion: doctorActualizado.get().persona.get().direccion.get(),
      }
    };
  },

  inhabilitarDoctor: async (parent, { id_doctor, estado }) => {
    try {
      const doctor = await Doctor.findByPk(id_doctor);
      
      if (!doctor) {
        throw new Error('Doctor no encontrado');
      }
  
      const [updated] = await Usuario.update(
        { estado: estado },
        { where: { fk_doctor_id: doctor.id_doctor } }
      );
  
      if (updated === 0) {
        throw new Error('No se encontró ningún usuario asociado para inhabilitar');
      }
  
      return true;
    } catch (error) {
      console.error('Error inhabilitando al doctor:', error);
      throw new Error('Error al inhabilitar al doctor');
    }
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
