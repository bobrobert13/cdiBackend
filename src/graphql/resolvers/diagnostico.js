import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Diagnostico } from "../../models"; 


export const Query = {
    diagnostico: async (parent, { id_diagnostico }) => {
        return await Diagnostico.findByPk(id_diagnostico);
      },
      diagnosticos: async (parent, args) => {
        return await Diagnostico.findAll();
      },
};

export const Mutation = {
    crearDiagnostico: async (parent, { input }) => {
        const fechaLocal = input.fecha_diagnostico ? new Date(input.fecha_diagnostico) : new Date();
        const offsetUTC4 = fechaLocal.getTime() - (4 * 60 * 60 * 1000);
        const fechaDiagnosticLocal = new Date(offsetUTC4);

        const fechaInicio = new Date(fechaLocal);
        fechaInicio.setHours(0, 0, 0, 0);
        const fechaFin = new Date(fechaInicio);
        fechaFin.setDate(fechaFin.getDate() + 1);

        const diagnosticoExistente = await Diagnostico.findOne({
          where: {
            fk_doctor_id: input.fk_doctor_id,
            fk_paciente_id: input.fk_paciente_id,
            fecha_diagnostico: {
              [require('sequelize').Op.gte]: fechaInicio,
              [require('sequelize').Op.lt]: fechaFin,
            },
          },
        });

        if (diagnosticoExistente) {
          await diagnosticoExistente.update({
            ...input,
            condicion: input.condicion.toLowerCase(),
          });
          console.log(`Diagnóstico actualizado: ya existía un diagnóstico para el doctor ${input.fk_doctor_id} y paciente ${input.fk_paciente_id} en la fecha ${fechaInicio.toISOString().split('T')[0]}`);
          
          return new UserInputError('Ya existía un diagnóstico para hoy. Se actualizó el registro existente.');;
        }

        const nuevoDiagnostico = await Diagnostico.create({
          ...input,
          fecha_diagnostico: fechaDiagnosticLocal,
          condicion: input.condicion.toLowerCase(),
        });
        console.log(`Nuevo diagnóstico creado para doctor ${input.fk_doctor_id} y paciente ${input.fk_paciente_id} en la fecha ${fechaInicio.toISOString().split('T')[0]}`);
        return nuevoDiagnostico;
      },
      actualizarDiagnostico: async (_, { id_diagnostico, input }) => {
        try {
          const diagnostico = await Diagnostico.findByPk(id_diagnostico);
          if (!diagnostico) {
            throw new Error('diagnostico no encontrado');
          }
          await diagnostico.update({
            ...input,
            condicion: input.condicion.toLowerCase(),
          });
          return diagnostico;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el diagnostico');
        }
      },
};