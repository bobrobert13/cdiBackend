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
            return usuario;
        } catch (error) {
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
            const { nombre_usuario, password } = input;
            const usuario = await Usuario.findOne({ where: { nombre_usuario } });
            if (!usuario) throw new UserInputError("Usuario no encontrado");

            // Si tienes campo password en tu modelo y función passwordMatch:
            const valid = await passwordMatch(password, usuario.password);
            if (!valid) throw new UserInputError("Contraseña incorrecta");

            const token = createToken(usuario);
            return {
                token,
                usuario,
            };
        } catch (error) {
            console.log('error login', error);
            throw new UserInputError("Error en login", { error });
        }
    }),
};
