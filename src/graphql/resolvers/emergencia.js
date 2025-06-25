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
};