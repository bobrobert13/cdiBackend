import { UserInputError } from "apollo-server-express";
import { Paciente, Persona, Telefono, Correo, Direccion, Diagnostico, CDI, Doctor, Consulta, Examenes, Medicamento, Tratamiento } from "../../models";

export const Query = {
  // Obtener datos de una persona por su numero de cédula de identidad
    personaPorCedula: async (parent, { cedula_identidad }) => {
      try {
        console.log('cedula para la query:', cedula_identidad);

        const persona = await Persona.findOne({
          where: { cedula_identidad },
          include: [
            { model: Telefono, as: "telefono" },
            { model: Correo, as: "correo" },
            { model: Direccion, as: "direccion" },
            { model: CDI, as: "cdi" },
            // Si la persona está registrada como paciente, traer todo lo relacionado al paciente
            {
              model: Paciente,
              as: "paciente",
              include: [
                { model: CDI, as: "cdi" },
                {
                  model: Doctor,
                  as: "doctor",
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
                },
                {
                  model: Diagnostico,
                  as: "diagnosticos",
                  include: [
                    { model: Doctor, as: "doctores", include: [{ model: Persona, as: "persona" }] },
                  ],
                },
                {
                  model: Consulta,
                  as: "consultas",
                  include: [
                    { model: CDI, as: "cdis" },
                    { model: Doctor, as: "doctores", include: [{ model: Persona, as: "persona" }] },
                  ],
                },
                {
                  model: Examenes,
                  as: "examenes",
                  include: [
                    { model: Doctor, as: "doctores", include: [{ model: Persona, as: "persona" }] },
                  ],
                },
                {
                  model: Medicamento,
                  as: "medicamentos",
                  include: [
                    { model: Doctor, as: "doctores", include: [{ model: Persona, as: "persona" }] },
                  ],
                },
                {
                  model: Tratamiento,
                  as: "tratamientos",
                  include: [
                    { model: Doctor, as: "doctor", include: [{ model: Persona, as: "persona" }] },
                  ],
                },
              ],
            },
            // Si la persona está registrada como doctor, traer información del doctor y sus relaciones principales
            {
              model: Doctor,
              as: "doctor",
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
                // { model: CDI, as: "cdi" },
                {
                  model: Paciente,
                  as: "pacientes",
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
                },
                {
                  model: Consulta,
                  as: "consultas",
                  include: [
                    // { model: CDI, as: "cdis" },
                    { model: Paciente, as: "pacientes", include: [{ model: Persona, as: "persona" }] },
                  ],
                },
                {
                  model: Diagnostico,
                  as: "diagnosticos",
                  include: [{ model: Paciente, as: "pacientes", include: [{ model: Persona, as: "persona" }] }],
                },
                {
                  model: Examenes,
                  as: "examenes",
                  include: [{ model: Paciente, as: "pacientes", include: [{ model: Persona, as: "persona" }] }],
                },
                {
                  model: Medicamento,
                  as: "medicamentos",
                  include: [{ model: Paciente, as: "pacientes", include: [{ model: Persona, as: "persona" }] }],
                },
                {
                  model: Tratamiento,
                  as: "tratamientos",
                  include: [{ model: Paciente, as: "paciente", include: [{ model: Persona, as: "persona" }] }],
                },
              ],
            },
          ],
        });
        // if (!persona) throw new UserInputError("Persona no encontrada");
        return persona;
      } catch (error) {
        console.error("Error al obtener datos de persona:", error);
        throw new UserInputError(error.message);
      }
    },
  // ...existing code...

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
      console.log('recibiendo input nuevo paciente: ', pacienteInput);

      // NOTA: Cambios realizados aquí para soportar los casos solicitados:
      // 1) Si la persona ya existe por cédula, no lanzar error inmediatamente.
      //    - Si la persona ya es paciente -> error "Paciente ya está registrado".
      //    - Si la persona existe y es doctor -> crear paciente ligado a esa persona.
      //    - Si la persona existe pero no es paciente ni doctor -> crear paciente ligado a la persona existente.
      // 2) Si la persona NO existe, mantener la lógica previa: crear telefono/correo/direccion, persona y paciente.

      // Preparar variables que usaremos más abajo
      let telefono = null, correo = null, direccion = null;

      // Si se proporcionó cédula, buscar persona existente
      if (personaInput && personaInput.cedula_identidad) {
        const personaExistente = await Persona.findOne({ where: { cedula_identidad: personaInput.cedula_identidad } });
        if (personaExistente) {
          // Si la persona ya está registrada como paciente -> error
          const pacienteExistente = await Paciente.findOne({ where: { fk_persona_id: personaExistente.id_persona } });
          if (pacienteExistente) {
            // Modificación: antes se lanzaba error si la persona existía; ahora solo si es paciente
            throw new UserInputError("El paciente ya está registrado");
          }

          // Si la persona existe y es doctor -> crear paciente usando la persona existente
          const doctorExistente = await Doctor.findOne({ where: { fk_persona_id: personaExistente.id_persona } });
          if (doctorExistente) {
            // Crear paciente ligado a la persona existente (no creamos telefono/correo/direccion)
            const paciente = await Paciente.create({
              ...pacienteInput,
              fk_persona_id: personaExistente.id_persona,
            });

            // Retornar paciente con relaciones anidadas
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
              persona: nuevoPaciente.persona
                ? {
                    ...nuevoPaciente.persona.get(),
                    telefono: nuevoPaciente.persona.get().telefono ? nuevoPaciente.persona.get().telefono.get() : null,
                    correo: nuevoPaciente.persona.get().correo ? nuevoPaciente.persona.get().correo.get() : null,
                    direccion: nuevoPaciente.persona.get().direccion ? nuevoPaciente.persona.get().direccion.get() : null,
                  }
                : null,
            };
          }

          // Si la persona existe pero NO es paciente (y tampoco doctor), podemos crear el paciente usando la persona existente
          const paciente = await Paciente.create({
            ...pacienteInput,
            fk_persona_id: personaExistente.id_persona,
          });

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
            persona: nuevoPaciente.persona
              ? {
                  ...nuevoPaciente.persona.get(),
                  telefono: nuevoPaciente.persona.get().telefono ? nuevoPaciente.persona.get().telefono.get() : null,
                  correo: nuevoPaciente.persona.get().correo ? nuevoPaciente.persona.get().correo.get() : null,
                  direccion: nuevoPaciente.persona.get().direccion ? nuevoPaciente.persona.get().direccion.get() : null,
                }
              : null,
          };
        }
      }

      // Si llegamos aquí, la persona NO existe por cédula -> validar unicidad de telefono y correo (si vienen)
      if (personaInput && personaInput.telefonoInput) {
        const foundTelefono = await Telefono.findOne({ where: { numero: personaInput.telefonoInput.numero } });
        if (foundTelefono) {
          throw new UserInputError("Ya existe un teléfono con ese número");
        }
      }

      if (personaInput && personaInput.correoInput) {
        const foundCorreo = await Correo.findOne({ where: { correo: personaInput.correoInput.correo } });
        if (foundCorreo) {
          throw new UserInputError("Ya existe un correo con ese email");
        }
      }

      // 2. Crear registros relacionados si vienen en el input

      if (personaInput && personaInput.telefonoInput) {
        telefono = await Telefono.create(personaInput.telefonoInput);
      }
      if (personaInput && personaInput.correoInput) {
        correo = await Correo.create(personaInput.correoInput);
      }
      if (personaInput && personaInput.direccionInput) {
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
