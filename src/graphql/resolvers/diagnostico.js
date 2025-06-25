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
};