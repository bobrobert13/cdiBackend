import { createToken, resetPasswordToken } from "../../utils/token-generator";
import { authorize } from "../../utils/authorize-resolvers";
import { UserInputError } from "apollo-server-express";
import { passwordMatch } from "../../utils/password";

export const Query = {

};

export const Mutation = {

    login: authorize([], async (obj, { input }, context) => {
        // input: { nombre_usuario, password }
        const { nombre_usuario, contrasena } = input;
        try {
          // 1. Buscar usuario por nombre_usuario
          const usuario = await Usuario.findOne({ where: { nombre_usuario } });
    
          if (!usuario) {
            throw new UserInputError("Usuario o contraseña incorrectos");
          }
    
          // 2. Verificar estado del usuario
          if (usuario.estado !== "activo") {
            throw new UserInputError("Usuario inactivo o suspendido");
          }
    
          // 3. Verificar contraseña
          const esValido = await passwordMatch(contrasena, usuario.contrasena);
          if (!esValido) {
            throw new UserInputError("Usuario o contraseña incorrectos");
          }
    
          // 4. Generar token
          const token = createToken(usuario);
    
          // 5. Retornar datos y token
          return {
            usuario: {
              id_usuario: usuario.id_usuario,
              nombre_usuario: usuario.nombre_usuario,
              rol: usuario.rol,
              estado: usuario.estado,
              // Agrega más campos si lo necesitas
            },
            token,
          };
        } catch (error) {
          console.log('error login', error);
          throw new UserInputError("Error en el login");
        }
      }),

};