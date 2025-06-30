import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Tratamiento } from "../../models"; 


export const Query = {
    tratamiento: async (parent, { id_tratamiento }) => {
        return await Tratamiento.findByPk(id_tratamiento);
      },
      tratamientos: async (parent, args) => {
        return await Tratamiento.findAll();
      },
};

export const Mutation = {
    crearTratamiento: async (parent, { input }) => {
        return await Tratamiento.create(input);
      },
      actualizarTratamiento: async (_, { id_tratamiento, input }) => {
        try {
          const tratamiento = await Tratamiento.findByPk(id_tratamiento);
          if (!tratamiento) {
            throw new Error('tratamiento no encontrado');
          }
          await tratamiento.update(input);
          return tratamiento;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el tratamiento');
        }
      },
      actualizarEstadoTratamiento: async (_, { id_tratamiento, estado }) => {
        try {
          const tratamiento = await Tratamiento.findByPk(id_tratamiento);
          if (!tratamiento) {
            throw new Error('tratamiento no encontrado');
          }
          tratamiento.estado = estado;
          await tratamiento.save();
          return true;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el estado del tratamiento');
        }
      },
};