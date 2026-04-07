"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = exports.Query = undefined;

var _tokenGenerator = require("../../utils/token-generator");

var _apolloServerExpress = require("apollo-server-express");

var _password = require("../../utils/password");

var _models = require("../../models");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import { authorize } from "../../utils/authorize-resolvers";


const Query = exports.Query = {};

const Mutation = exports.Mutation = {

  login: (() => {
    var _ref = _asyncToGenerator(function* (obj, { input }, context) {
      // input: { nombre_usuario, password }
      console.log('inpuuutt', input);

      const { nombre_usuario, contrasena } = input;
      try {
        // 1. Buscar usuario por nombre_usuario
        const usuario = yield _models.Usuario.findOne({ where: { nombre_usuario } });
        console.log('usuario:', usuario);

        if (!usuario) {
          console.log(`El usuario ${nombre_usuario} no existe`);
          throw new _apolloServerExpress.UserInputError("Usuario o contraseña incorrectos");
        }

        // 2. Verificar estado del usuario
        if (usuario.estado !== "activo") {
          throw new _apolloServerExpress.UserInputError("Usuario inactivo o suspendido");
        }

        // 3. Verificar contraseña
        // const esValido = await passwordMatch(contrasena, usuario.contrasena);
        // if (!esValido) {
        //   throw new UserInputError("Usuario o contraseña incorrectos");
        // }

        // 4. Generar token
        const token = (0, _tokenGenerator.createToken)(usuario);

        // 5. Retornar datos y token
        return {
          usuario: {
            id_usuario: usuario.id_usuario,
            nombre_usuario: usuario.nombre_usuario,
            rol: usuario.rol,
            estado: usuario.estado
            // Agrega más campos si lo necesitas
          },
          token
        };
      } catch (error) {
        console.log('error login', error.message);
        throw new _apolloServerExpress.UserInputError(error.message);
      }
    });

    return function login(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  })()
};