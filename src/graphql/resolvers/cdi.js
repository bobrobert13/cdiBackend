import { UserInputError } from "apollo-server-express";
import { Op, Sequelize } from "sequelize";

import { Usuario, CDI, Doctor, Persona, Paciente, Telefono, Correo, Direccion, Hospitalizacion, Emergencia, Diagnostico, Consulta, Examenes, Medicamento, Tratamiento } from "../../models";
import { createPassword } from "../../utils/password";


export const Query = {

  cdis: async () => {
    try {
      const todosCDI = await CDI.findAll({
        include: [{
          model: Usuario, as: 'usuarios',
          where: {
            '$usuarios.fk_doctor_id$': null
          }
        },
        {
          model: Doctor,
          as: 'doctores',
          include: [
            {
              model: Persona, as: 'persona', include: [
                { model: Telefono, as: "telefono" },
                { model: Correo, as: "correo" },
                { model: Direccion, as: "direccion" },
              ]
            },

          ]
        },
        {
          model: Paciente,
          as: 'pacientes',
          include: [
            {
              model: Persona, as: 'persona', include: [
                { model: Telefono, as: "telefono" },
                { model: Correo, as: "correo" },
                { model: Direccion, as: "direccion" },
              ]
            },
          ]
        }
        ], order: [['createdAt', 'DESC']]
      });
      return todosCDI;
    } catch (error) {
      console.error('Error al obtener los CDI:', error);
      throw new UserInputError(error.message);
    }
  },

  cdiInfo: async (parent, { id_cdi }) => {
    const cdi = await CDI.findByPk(id_cdi);
    if (!cdi) throw new UserInputError("CDI no encontrado");
    return cdi;
  },

  todosCdis: async () => {
    try {
      const todosCDI = await CDI.findAll();
      return todosCDI;
    } catch (error) {
      console.error('Error al obtener los CDI:', error);
      throw new UserInputError(error.message);
    }
  },


  cdi: async (parent, { id_cdi }) => {
    const cdi = await CDI.findByPk(id_cdi, { include: [{ model: Usuario, as: 'usuarios' }] });
    if (!cdi) throw new UserInputError("CDI no encontrado");
    return cdi;
  },

  doctoresCDI: async (_, { id_cdi }) => {
    const doctores = await Doctor.findAll({
      where: { fk_cdi_id: id_cdi }, include: [
        { model: Usuario, as: 'usuarios', },
        {
          model: Paciente, as: 'pacientes', include: [
            {
              model: Persona, as: 'persona', include: [
                { model: Telefono, as: "telefono" },
                { model: Correo, as: "correo" },
                { model: Direccion, as: "direccion" },
              ]
            }
          ]
        },
        {
          model: Persona, as: 'persona', include: [
            { model: Telefono, as: "telefono" },
            { model: Correo, as: "correo" },
            { model: Direccion, as: "direccion" },
          ]
        }
      ]
    });
    return doctores;
  },

  pacientesCDI: async (_, { id_cdi }) => {

    const pacientes = await Paciente.findAll({
      where: { fk_cdi_id: id_cdi }, include: [
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
          model: Hospitalizacion,
          as: 'hospitalizaciones',
        },
        {
          model: Emergencia,
          as: 'emergencias',
        },
        {
          model: Diagnostico,
          as: "diagnosticos",
          include: [
            { model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
          ],
          order: [['createdAt', 'DESC']]
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
        {
          model: Doctor, as: 'doctor', include: [
            { model: Persona, as: 'persona' }
          ]
        }
      ]
    });
    return pacientes;
  },

  // ESTADISTICAS DE PACIENTES POR CDI:
  // NOTA: ESTABLECER PERIODO DE TIEMPO Y FORMATO PARA CADA ESTADISTICA

  // #1: Total de Pacientes Registrados: El número absoluto de pacientes en la base de datos.
  cantidadPacienteTotales: async (_, { id_cdi }) => {
    try {
      const cantidadPacientesTotales = await Paciente.count({ where: { fk_cdi_id: id_cdi } });
      return cantidadPacientesTotales;
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  // #2: Total de Pacientes nuevos por mes y por semana en un CDI
  cantidadPacientesNuevos: async (_, { id_cdi, periodo }) => {
    try {
      const period = periodo || 'month';

      if (period === 'month') {
        const fourWeeksAgo = new Date();
        fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28);

        const pacientesPorSemana = [];

        for (let i = 0; i < 4; i++) {
          const weekStart = new Date();
          weekStart.setDate(weekStart.getDate() - (28 - (i * 7)));

          const weekEnd = new Date();
          weekEnd.setDate(weekEnd.getDate() - (21 - (i * 7)));

          const count = await Paciente.count({
            where: {
              fk_cdi_id: id_cdi,
              createdAt: {
                [Op.gte]: weekStart,
                [Op.lt]: weekEnd
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

          const count = await Paciente.count({
            where: {
              fk_cdi_id: id_cdi,
              createdAt: {
                [Op.gte]: day,
                [Op.lt]: nextDay
              }
            }
          });

          pacientesPorDia.push(count);
        }

        return pacientesPorDia || [];
      } else {
        throw new UserInputError('Periodo no válido. Use "month" o "week".');
      }
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  // #4: Distribución por Género: Un conteo simple de pacientes masculinos y femeninos.
  distribucionPorGenero: async (_, { id_cdi }) => {
    try {
      const countMasculino = await Paciente.count({
        where: { fk_cdi_id: id_cdi },
        include: [{
          model: Persona,
          as: 'persona',
          where: {
            sexo: 'Masculino'
          }
        }]
      });

      const countFemenino = await Paciente.count({
        where: { fk_cdi_id: id_cdi },
        include: [{
          model: Persona,
          as: 'persona',
          where: {
            sexo: 'Femenino'
          }
        }]
      });

      return {
        masculino: countMasculino || 0,
        femenino: countFemenino || 0
      };
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  // ESTADISTICAS RELACIONADAS A CONSULTAS, ALGUNAS INVOLUCRAN A DOCTORES.

  // #5: Total de consultas realizadas: El número total de veces que los pacientes fueron atendidos en un período dado (por ejemplo, semana, al mes).

  totalConsultasRealizadasPeriodo: async (_, { id_cdi, periodo }) => {
    try {
      const period = periodo || 'month';

      if (period === 'month') {
        const consultasPorSemana = [];

        for (let i = 0; i < 4; i++) {
          const weekStart = new Date();
          weekStart.setDate(weekStart.getDate() - (28 - (i * 7)));

          const weekEnd = new Date();
          weekEnd.setDate(weekEnd.getDate() - (21 - (i * 7)));

          const count = await Consulta.count({
            where: {
              fk_cdi_id: id_cdi,
              createdAt: {
                [Op.gte]: weekStart,
                [Op.lt]: weekEnd
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

          const count = await Consulta.count({
            where: {
              fk_cdi_id: id_cdi,
              createdAt: {
                [Op.gte]: day,
                [Op.lt]: nextDay
              }
            }
          });

          consultasPorDia.push(count);
        }

        return consultasPorDia || [];
      } else {
        throw new UserInputError('Periodo no válido. Use "month" o "week".');
      }
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  // #6: Consultas por Médico (o Profesional de la Salud)

  totalConsultasRealizadasPorMedico: async (_, { id_cdi, periodo }) => {
    try {
      const period = periodo || 'month';

      const doctores = await Doctor.findAll({
        where: { fk_cdi_id: id_cdi },
        include: [
          {
            model: Persona,
            as: 'persona',
          }
        ]
      });

      const nombresDoctores = doctores.map(doctor => doctor.persona.nombre1 || 'Sin nombre');

      const consultasPorDoctor = [];

      if (period === 'month') {
        const mesInicio = new Date();
        mesInicio.setDate(1);
        mesInicio.setHours(0, 0, 0, 0);

        const mesFin = new Date();
        mesFin.setMonth(mesFin.getMonth() + 1);
        mesFin.setDate(1);
        mesFin.setHours(0, 0, 0, 0);

        for (const doctor of doctores) {
          const count = await Consulta.count({
            where: {
              fk_doctor_id: parseInt(doctor.id_doctor),
              createdAt: {
                [Op.gte]: mesInicio,
                [Op.lt]: mesFin
              }
            }
          });
          consultasPorDoctor.push(count);
        }

        return {
          nombresDoctores,
          consultasMedico: consultasPorDoctor,
        };
      } else if (period === 'week') {
        const semanaInicio = new Date();
        semanaInicio.setDate(semanaInicio.getDate() - semanaInicio.getDay());
        semanaInicio.setHours(0, 0, 0, 0);

        const semanaFin = new Date(semanaInicio);
        semanaFin.setDate(semanaFin.getDate() + 7);

        for (const doctor of doctores) {
          const count = await Consulta.count({
            where: {
              fk_doctor_id: parseInt(doctor.id_doctor),
              createdAt: {
                [Op.gte]: semanaInicio,
                [Op.lt]: semanaFin
              }
            }
          });
          consultasPorDoctor.push(count);
        }

        return {
          nombresDoctores,
          consultasMedico: consultasPorDoctor,
        };
      } else {
        throw new UserInputError('Periodo no válido. Use "month" o "week".');
      }
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  // #7 Edad promedio de pacientes

  distribucionPorEdad: async (_, { id_cdi }) => {
    try {
      const [rango1, rango2, rango3, rango4] = await Promise.all([
        Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: Persona,
            as: 'persona',
            where: {
              edad: {
                [Op.gte]: 0,
                [Op.lte]: 12
              }
            },
            attributes: []
          }]
        }),
        Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: Persona,
            as: 'persona',
            where: {
              edad: {
                [Op.gte]: 13,
                [Op.lte]: 28
              }
            },
            attributes: []
          }]
        }),
        Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: Persona,
            as: 'persona',
            where: {
              edad: {
                [Op.gte]: 19,
                [Op.lte]: 64
              }
            },
            attributes: []
          }]
        }),
        Paciente.count({
          where: { fk_cdi_id: id_cdi },
          include: [{
            model: Persona,
            as: 'persona',
            where: {
              edad: {
                [Op.gte]: 65
              }
            },
            attributes: []
          }]
        })
      ]);

      return [rango1, rango2, rango3, rango4];
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  // #8 Diagnosticos mas frecuentes: Top 10 diagnosticos mas frecuentes por CDI

  top10DiagnosticosMasComunes: async (_, { id_cdi, periodo }) => {
    try {
      const period = periodo || 'month';

      let startDate;
      let endDate = new Date();

      if (period === 'month') {
        startDate = new Date();
        startDate.setDate(1);
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 1);
        endDate.setDate(1);
        endDate.setHours(0, 0, 0, 0);
      } else if (period === 'week') {
        startDate = new Date();
        startDate.setDate(startDate.getDate() - startDate.getDay());
        startDate.setHours(0, 0, 0, 0);

        endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 7);
      } else {
        throw new UserInputError('Periodo no válido. Use "month" o "week".');
      }

      const top10DiagnosticosMasComunes = await Diagnostico.findAll({
        where: {
          fk_cdi_id: id_cdi,
          createdAt: {
            [Op.gte]: startDate,
            [Op.lt]: endDate
          }
        },
        attributes: [
          'condicion',
          [Sequelize.fn('COUNT', Sequelize.col('id_diagnostico')), 'total']
        ],
        group: ['condicion'],
        order: [[Sequelize.literal('total'), 'DESC']],
        limit: 10
      });

      const condiciones = top10DiagnosticosMasComunes.map(diagnostico => diagnostico.condicion);
      const totales = top10DiagnosticosMasComunes.map(diagnostico => parseInt(diagnostico.getDataValue('total')));

      return {
        condiciones,
        totales,
      };
    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

};

export const Mutation = {

  crearCDI: async (parent, { input }) => {
    try {
      const { usuarioInput, ...cdiInput } = input;

      const { numero_cdi, nombre } = cdiInput;
      const cdiExistente = await CDI.findOne({
        where: {
          [Op.or]: [
            { numero_cdi },
            { nombre }
          ]
        }
      });
      if (cdiExistente) {
        throw new UserInputError("Ya existe un CDI con ese código o nombre");
      }

      const usuarioExistente = await Usuario.findOne({
        where: { nombre_usuario: usuarioInput.nombre_usuario }
      });

      if (usuarioExistente) {
        throw new UserInputError("Ya existe un usuario con ese nombre de usuario");
      }

      const nuevoCDI = await CDI.create(cdiInput);

      const nuevoUsuario = await Usuario.create({
        rol: "cdi",
        nombre_usuario: usuarioInput.nombre_usuario,
        estado: "activo",
        fk_cdi_id: nuevoCDI.id_cdi,
        contrasena: await createPassword(usuarioInput.contrasena)
      });

      return {
        ...nuevoCDI.get(),
        usuario: {
          ...nuevoUsuario.get(),
          contrasena: null
        }
      };

    } catch (error) {
      console.error('Error al crear el CDI:', error);
      throw new UserInputError(error.message);
    }
  },

  actualizarCDI: async (parent, { id_cdi, input }) => {
    const { usuarioInput, ...cdiInput } = input;
    const cdi = await CDI.findByPk(id_cdi);
    if (!cdi) throw new UserInputError("CDI no encontrado");

    const usuario = await Usuario.findOne({ where: { fk_cdi_id: id_cdi } });
    if (!usuario) throw new UserInputError("Usuario asociado al CDI no encontrado");

    try {
      if (cdiInput.numero_cdi && cdiInput.numero_cdi !== cdi.numero_cdi) {
        const cdiExistente = await CDI.findOne({ where: { numero_cdi: cdiInput.numero_cdi } });
        if (cdiExistente) throw new UserInputError("Ya existe un CDI con ese número");
      }

      if (usuarioInput && usuarioInput.nombre_usuario && usuarioInput.nombre_usuario !== usuario.nombre_usuario) {
        const usuarioExistente = await Usuario.findOne({ where: { nombre_usuario: usuarioInput.nombre_usuario } });
        if (usuarioExistente) throw new UserInputError("Ya existe un usuario con ese nombre de usuario");
      }

      await CDI.update(cdiInput, { where: { id_cdi: id_cdi } });

      if (usuarioInput) {
        const { contrasena, ...restoUsuario } = usuarioInput;
        if (contrasena) {
          const passEnciptada = await createPassword(contrasena);
          await usuario.update({ ...restoUsuario, contrasena: passEnciptada });
        } else {
          await usuario.update(restoUsuario);
        }
      }

      return {
        ...cdi.get(),
        usuario: {
          ...usuario.get(),
          contrasena: null
        }
      };

    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  inhabilitarCDI: async (parent, { id_cdi, estado }) => {
    try {
      const cdi = await CDI.findByPk(id_cdi);

      if (!cdi) {
        throw new Error('CDI no encontrado');
      }
      console.log("datos para actualizar", id_cdi, estado);

      await CDI.update(
        { estado: estado },
        { where: { id_cdi: id_cdi } }
      );

      const [updated] = await Usuario.update(
        { estado: estado },
        { where: { fk_cdi_id: cdi.id_cdi } }
      );

      if (updated === 0) {
        throw new Error('No se encontró ningún usuario asociado para inhabilitar');
      }

      return true;
    } catch (error) {
      console.error('Error inhabilitando al CDI:', error);
      throw new Error(error.message);
    }
  },
};
