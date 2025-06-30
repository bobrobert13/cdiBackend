import { UserInputError } from "apollo-server-express";
import { createToken, resetPasswordToken } from "../../utils/token-generator";
import { authorize } from "../../utils/authorize-resolvers";
import { passwordMatch } from "../../utils/password";

// Asume que tienes un modelo Usuario de Sequelize importado:
import { Usuario } from "../../models"; // Ajusta el path según tu estructura


async function createQuery(data) {
    const options = { query: { $and: [{ role: "Doctor" }] } };
    data = data || {};
    if (data) {
        if (data.roleEspecialidad && data.roleEspecialidad !== "") {
            options.query.$and.push({ roleEspecialidad: data.roleEspecialidad });
        }
    }
    if (options.query.$and.length == 0) options.query = {};
    return options;
}



export const Query = {

    usuarios: authorize([], async () => {
        return await Usuario.findAll();
    }),

    usuario: authorize([], async (obj, { id_usuario }) => {
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) throw new UserInputError("Usuario no encontrado");
        return usuario;
    }),

};

export const Mutation = {

    crearUsuario: authorize([], async (obj, { input }) => {
        try {
            const usuario = await Usuario.create(input);
            console.log('usuario creado:', usuario);
            
            return usuario;
        } catch (error) {
            console.log('error crear user', error.message);
            throw new UserInputError("Error al crear usuario", { error });
        }
    }),

    actualizarUsuario: authorize([], async (obj, { id_usuario, input }) => {
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) throw new UserInputError("Usuario no encontrado");
        try {
            await usuario.update(input);
            return usuario;
        } catch (error) {
            throw new UserInputError("Error al actualizar usuario", { error });
        }
    }),

    eliminarUsuario: authorize([], async (obj, { id_usuario }) => {
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) throw new UserInputError("Usuario no encontrado");
        await usuario.destroy();
        return true;
    }),

    login: authorize([], async (obj, { input }, context) => {
        try {
            const { nombre_usuario, contrasena } = input;
            const usuario = await Usuario.findOne({ where: { nombre_usuario }, attributes: ['id_usuario', 'fk_doctor_id', 'fk_cdi_id', 'nombre_usuario', 'rol' , 'estado', 'fecha_creacion']  });
            if (!usuario) throw new UserInputError("Usuario o contraseña incorrectos");
            if (usuario.estado !== "activo") {
                throw new UserInputError("Usuario inactivo o suspendido");
              }
            // Si tienes campo password en tu modelo y función passwordMatch:
            // const valid = await passwordMatch(password, usuario.password);
            // if (!valid) throw new UserInputError("Contraseña incorrecta");
            const token = createToken(usuario.get());
            return token
        } catch (error) {
            throw new UserInputError(error.message);
        }
    }),
};
