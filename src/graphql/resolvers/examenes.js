import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Examenes } from "../../models"; 


export const Query = {
    examenResultado: async (parent, { id_examenes }) => {
        return await Examenes.findByPk(id_examenes);
      },
      examenesResultados: async (parent, args) => {
        return await Examenes.findAll();
      },
};

export const Mutation = {
    crearExamenResultado: async (parent, { input }) => {
        return await Examenes.create(input);
      },

      actualizarExamenResultado: async (_, { id_examenes, input }) => {
        try {
          const examen = await Examenes.findByPk(id_examenes);
          if (!examen) {
            throw new Error('Examen no encontrado');
          }
          await examen.update(input);
          return examen;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el examen');
        }
      },
      actualizarEstadoExamen: async (_, { id_examenes, estado_examen }) => {
        try {
          const examen = await Examenes.findByPk(id_examenes);
          if (!examen) {
            throw new Error('Examen no encontrado');
          }
          examen.estado_examen = estado_examen;
          await examen.save();
          return true;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el estado del examen');
        }
      },
};