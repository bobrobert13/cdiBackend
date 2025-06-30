import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Medicamento } from "../../models"; 


export const Query = {
    // Obtener un medicamento por ID
    medicamento: async (_, { id_medicamento }) => {
        return await Medicamento.findByPk(id_medicamento);
      },
      // Listar todos los medicamentos
      medicamentos: async (_, __) => {
        return await Medicamento.findAll();
      },
      // Medicamentos por paciente
      medicamentosPorPaciente: async (_, { fk_paciente_id }) => {
        return await Medicamento.findAll({
          where: { fk_paciente_id }
        });
      },
      // Medicamentos por doctor
      medicamentosPorDoctor: async (_, { fk_doctor_id }) => {
        return await Medicamento.findAll({
          where: { fk_doctor_id }
        });
      },
};

export const Mutation = {
    // Crear un medicamento
    crearMedicamento: async (_, { input }) => {
        const medicamento = await Medicamento.create(input);
        return medicamento;
      },

      actualizarEstadoMedicamento: async (_, { id_medicamento, estado_tratamiento }) => {
        try {
          const medicamento = await Medicamento.findByPk(id_medicamento);
          if (!medicamento) {
            throw new Error('medicamento no encontrado');
          }
          medicamento.estado_tratamiento = estado_tratamiento;
          await medicamento.save();
          return true;
        } catch (error) {
          throw new UserInputError(error.message || 'Error al actualizar el estado del medicamento');
        }
      },


};