import { UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import { Usuario, CDI, Doctor, Persona, Paciente, Telefono, Correo, Direccion } from "../../models";


export const Query = {

  cdis: async () => {
    try {
      const todosCDI = await CDI.findAll({ include: [{ model: Usuario, as: 'usuarios' }] });
      return todosCDI;
    } catch (error) {
      console.error('Error al obtener los CDI:', error);
      throw new UserInputError(error.message);
    }
  },

  cdi: async (parent, { id_cdi }) => {
    const cdi = await CDI.findByPk(id_cdi, { include: [{ model: Usuario, as: 'usuarios' }] });
    if (!cdi) throw new UserInputError("CDI no encontrado");
    return cdi;
  },

  doctoresCDI: async (_, { id_cdi }) => {
    const doctores = await Doctor.findAll({ where: { fk_cdi_id: id_cdi }, include: [{ model: Usuario, as: 'usuarios', }, { model: Persona, as: 'persona' }] });
    return doctores;
  },

  pacientesCDI: async (_, { id_cdi }) => {
    const pacientes = await Paciente.findAll({
      where: { fk_cdi_id: id_cdi }, include: [{
        model: Persona, as: 'persona', include: [
          { model: Telefono, as: "telefono" },
          { model: Correo, as: "correo" },
          { model: Direccion, as: "direccion" },
        ],
      }]
    });
    return pacientes;
  }

};


export const Mutation = {

  crearCDI: async (parent, { input }) => {
    try {
      const { usuarioInput, ...cdiInput } = input;

      const cdiExistente = await CDI.findOne({
        where: { numero_cdi: cdiInput.numero_cdi }
      });
      if (cdiExistente) {
        throw new UserInputError("Ya existe un CDI con ese número");
      }

      const usuarioExistente = await Usuario.findOne({
        where: { nombre_usuario: usuarioInput.nombre_usuario }
      });
      if (usuarioExistente) {
        throw new UserInputError("Ya existe un usuario con ese nombre de usuario");
      }

      const nuevoCDI = await CDI.create(cdiInput);

      const nuevoUsuario = await Usuario.create({
        rol: "cdi",
        nombre_usuario: usuarioInput.nombre_usuario,
        estado: "activo",
        fk_cdi_id: nuevoCDI.id_cdi,
        contrasena: usuarioInput.contrasena
      });

      return {
        ...nuevoCDI.get(),
        usuario: {
          ...nuevoUsuario.get(),
          contrasena: null
        }
      };

    } catch (error) {
      console.error('Error al crear el CDI:', error);
      throw new UserInputError(error.message);
    }
  },

  actualizarCDI: async (parent, { id_cdi, input }) => {
    const { usuarioInput, ...cdiInput } = input;
    const cdi = await CDI.findByPk(id_cdi);
    if (!cdi) throw new UserInputError("CDI no encontrado");

    const usuario = await Usuario.findOne({ where: { fk_cdi_id: id_cdi } });
    if (!usuario) throw new UserInputError("Usuario asociado al CDI no encontrado");

    try {
      if (cdiInput.numero_cdi && cdiInput.numero_cdi !== cdi.numero_cdi) {
        const cdiExistente = await CDI.findOne({ where: { numero_cdi: cdiInput.numero_cdi } });
        if (cdiExistente) throw new UserInputError("Ya existe un CDI con ese número");
      }

      if (usuarioInput && usuarioInput.nombre_usuario && usuarioInput.nombre_usuario !== usuario.nombre_usuario) {
        const usuarioExistente = await Usuario.findOne({ where: { nombre_usuario: usuarioInput.nombre_usuario } });
        if (usuarioExistente) throw new UserInputError("Ya existe un usuario con ese nombre de usuario");
      }

      await CDI.update(cdiInput, { where: { id_cdi: id_cdi } });

      if (usuarioInput) {
        const { contrasena, ...restoUsuario } = usuarioInput;
        if (contrasena) {
          await usuario.update({ ...restoUsuario, contrasena });
        } else {
          await usuario.update(restoUsuario);
        }
      }

      return {
        ...cdi.get(),
        usuario: {
          ...usuario.get(),
          contrasena: null
        }
      };

    } catch (error) {
      throw new UserInputError(error.message);
    }
  },

  inhabilitarCDI: async (parent, { id_cdi, estado }) => {
    try {
      const cdi = await CDI.findByPk(id_cdi);

      if (!cdi) {
        throw new Error('CDI no encontrado');
      }

      const [updated] = await Usuario.update(
        { estado: estado },
        { where: { fk_cdi_id: cdi.id_cdi } }
      );

      if (updated === 0) {
        throw new Error('No se encontró ningún usuario asociado para inhabilitar');
      }

      return true;
    } catch (error) {
      console.error('Error inhabilitando al CDI:', error);
      throw new Error(error.message);
    }
  },
};