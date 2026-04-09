import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, Examenes } from "../../models"; 

const TIPOS_DE_EXAMEN_VALIDOS = [
  'Sangre',
  'Orina',
  'Radiografía',
  'Tomografía',
  'Resonancia Magnética',
  'Ecografía',
  'Electrocardiograma',
  'Endoscopia',
  'Biopsia',
  'Cultivo',
  'Análisis Genético',
  'Prueba de Esfuerzo',
  'Mamografía',
  'Densitometría',
  'Otros'
];

function validarTipoExamen(tipo) {
  if (tipo && !TIPOS_DE_EXAMEN_VALIDOS.includes(tipo)) {
    throw new UserInputError(
      `Tipo de examen "${tipo}" no válido. Valores permitidos: ${TIPOS_DE_EXAMEN_VALIDOS.join(', ')}`
    );
  }
  return tipo;
}

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
        const { tipo_de_examen, ...rest } = input;
        validarTipoExamen(tipo_de_examen);
        return await Examenes.create({ ...rest, tipo_de_examen });
      },

      actualizarExamenResultado: async (_, { id_examenes, input }) => {
        try {
          const examen = await Examenes.findByPk(id_examenes);
          if (!examen) {
            throw new Error('Examen no encontrado');
          }
          const { tipo_de_examen, ...rest } = input;
          validarTipoExamen(tipo_de_examen);
          await examen.update({ ...rest, tipo_de_examen });
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