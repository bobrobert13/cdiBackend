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
};