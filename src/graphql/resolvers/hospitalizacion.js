import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Hospitalizacion } from "../../models"; 


export const Query = {
    hospitalizacion: async (parent, { id_hospitalizacion }) => {
        return await Hospitalizacion.findByPk(id_hospitalizacion);
      },
      hospitalizaciones: async (parent, args) => {
        return await Hospitalizacion.findAll();
      },
};

export const Mutation = {
    crearHospitalizacion: async (parent, { input }) => {
        return await Hospitalizacion.create(input);
      },
      actualizarEstadoHospitalizacion: async (_, { id_hospitalizacion, estado }) => {
        try {
          const hospitalizacion = await Hospitalizacion.findByPk(id_hospitalizacion);
          if (!hospitalizacion) {
            throw new Error('hospitalización no encontrada');
          }
          hospitalizacion.estado = estado;
          if (estado === 'Finalizado') {
            hospitalizacion.fecha_egreso = new Date();
          }
          await hospitalizacion.save();
          return true;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el estado de la hospitalización');
        }
      },
};