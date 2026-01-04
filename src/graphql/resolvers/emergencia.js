import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Emergencia } from "../../models"; 


export const Query = {
    emergencia: async (parent, { id_emergencia }) => {
        return await Emergencia.findByPk(id_emergencia);
      },
      emergencias: async (parent, args) => {
        return await Emergencia.findAll();
      },
};

export const Mutation = {
    crearEmergencia: async (parent, { input }) => {
        return await Emergencia.create(input);
      },
      actualizarEstadoEmergencia: async (_, { id_emergencia, estado_emergencia }) => {
        try {
          const emergencia = await Emergencia.findByPk(id_emergencia);
          if (!emergencia) {
            throw new Error('emergencia no encontrada');
          }
          emergencia.estado_emergencia = estado_emergencia;
          if (estado_emergencia === 'Finalizado') {
            emergencia.fecha_egreso = new Date();
          }
          await emergencia.save();
          return true;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el estado de la emergencia');
        }
      },
};