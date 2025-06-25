import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Consulta, HistorialMedico } from "../../models"; 


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
};