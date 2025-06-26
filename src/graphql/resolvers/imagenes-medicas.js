import {  UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import {  Paciente, ImagenesMedicas } from "../../models"; 


export const Query = {
    imagenMedica: async (_, { id_imagenes_medicas }, { models }) => {
        return await models.ImagenesMedicas.findByPk(id_imagenes_medicas);
      },
      imagenesMedicas: async (_, __, { models }) => {
        return await models.ImagenesMedicas.findAll();
      },
      imagenesMedicasPorPaciente: async (_, { fk_paciente_id }, { models }) => {
        return await models.ImagenesMedicas.findAll({
          where: { fk_paciente_id }
        });
      },
};

export const Mutation = {
    crearImagenMedica: async (_, { input }, { models }) => {
        // 1. Extraer el archivo del input
        const {
          archivo,
          ...datosImagen
        } = input;
  
        // 2. Procesar la subida del archivo
        const { createReadStream, filename } = await archivo;
        const ext = path.extname(filename);
        const nombreUnico = `${uuidv4()}${ext}`;
        const rutaDestino = path.join(__dirname, '..', 'uploads', nombreUnico);
  
        // Crear carpeta si no existe
        fs.mkdirSync(path.dirname(rutaDestino), { recursive: true });
  
        // Guardar el archivo físicamente
        await new Promise((resolve, reject) => {
          createReadStream()
            .pipe(fs.createWriteStream(rutaDestino))
            .on('finish', resolve)
            .on('error', reject);
        });
  
        // 3. Guardar registro en la base de datos
        const imagen = await models.ImagenesMedicas.create({
          ...datosImagen,
          url_archivo: `/uploads/${nombreUnico}`
        });
  
        return imagen;
      }
};