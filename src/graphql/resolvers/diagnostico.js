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
        return await Diagnostico.create(input);
      },
      actualizarDiagnostico: async (_, { id_diagnostico, input }) => {
        try {
          const diagnostico = await Diagnostico.findByPk(id_diagnostico);
          if (!diagnostico) {
            throw new Error('diagnostico no encontrado');
          }
          await diagnostico.update(input);
          return diagnostico;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el diagnostico');
        }
      },
};