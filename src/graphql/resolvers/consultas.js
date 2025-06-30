import { UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import { Paciente, Consulta, HistorialMedico } from "../../models";


export const Query = {
  consulta: async (parent, { id_consulta }) => {
    return await Consulta.findByPk(id_consulta);
  },
  consultas: async (parent, args) => {
    return await Consulta.findAll();
  },
};

export const Mutation = {
  crearConsulta: async (parent, { input }) => {
    return await Consulta.create(input);
  },
  actualizarConsulta: async (_, { id_consulta, input }) => {
    try {
      const consulta = await Consulta.findByPk(id_consulta);
      if (!consulta) {
        throw new Error('Consulta no encontrada');
      }
      await consulta.update(input);
      return consulta;
    } catch (error) {
      throw new UserInputError(error.message || 'Error al actualizar la consulta');
    }
  },
  actualizarEstadoConsulta: async (_, { id_consulta, estado_consulta }) => {
    try {
      const consulta = await Consulta.findByPk(id_consulta);
      if (!consulta) {
        throw new Error('Consulta no encontrada');
      }
      consulta.estado_consulta = estado_consulta;
      await consulta.save();
      return true;
    } catch (error) {
      throw new UserInputError(error.message || 'Error al actualizar el estado de la consulta');
    }
  },

};