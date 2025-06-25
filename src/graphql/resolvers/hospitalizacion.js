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
};