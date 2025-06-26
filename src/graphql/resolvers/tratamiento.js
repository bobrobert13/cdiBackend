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
};