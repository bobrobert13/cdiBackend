"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Mutation = exports.Query = undefined;

var _apolloServerExpress = require("apollo-server-express");

var _tokenGenerator = require("../../utils/token-generator");

var _authorizeResolvers = require("../../utils/authorize-resolvers");

var _password = require("../../utils/password");

var _models = require("../../models");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// async function createQuery(data) {
//     const options = { query: { $and: [{ role: "Doctor" }] } };
//     data = data || {};
//     if (data) {
//         if (data.roleEspecialidad && data.roleEspecialidad !== "") {
//             options.query.$and.push({ roleEspecialidad: data.roleEspecialidad });
//         }
//     }
//     if (options.query.$and.length == 0) options.query = {};
//     return options;
// }


const Query = exports.Query = {

	usuarios: (0, _authorizeResolvers.authorize)([], _asyncToGenerator(function* () {
		return yield _models.Usuario.findAll();
	})),

	usuario: (0, _authorizeResolvers.authorize)([], (() => {
		var _ref2 = _asyncToGenerator(function* (obj, { id_usuario }) {
			const usuario = yield _models.Usuario.findByPk(id_usuario);
			if (!usuario) throw new _apolloServerExpress.UserInputError("Usuario no encontrado");
			return usuario;
		});

		return function (_x, _x2) {
			return _ref2.apply(this, arguments);
		};
	})()),

	metodosRecuperacion: (() => {
		var _ref3 = _asyncToGenerator(function* (_, { nombre_usuario }) {
			try {
				const usuario = yield _models.Usuario.findOne({
					where: { nombre_usuario }
				});
				if (!usuario) throw new Error('El usuario no existe en el sistema');
				const tienePin = !!(yield _models.Pin.findOne({ where: { fk_usuario_id: usuario.id_usuario } }));
				const preguntasSeguridad = yield _models.Seguridad.findAll({
					where: { fk_usuario_id: usuario.id_usuario }
				});
				const preguntas = preguntasSeguridad.map(function (p) {
					return {
						id_pregunta: p.id_pregunta,
						pregunta: p.pregunta
					};
				});
				return { tienePin, preguntas };
			} catch (error) {
				console.error('Error al obtener métodos de recuperación:', error);
				throw new _apolloServerExpress.UserInputError(error.message);
			}
		});

		return function metodosRecuperacion(_x3, _x4) {
			return _ref3.apply(this, arguments);
		};
	})()

};

const Mutation = exports.Mutation = {

	restaurarClavePorPregunta: (() => {
		var _ref4 = _asyncToGenerator(function* (_, { input }) {
			try {
				const { nombre_usuario, respuestas, nueva_contrasena } = input;
				const usuario = yield _models.Usuario.findOne({
					where: { nombre_usuario }
				});
				if (!usuario) throw new Error('Usuario no encontrado');
				const preguntasSeguridad = yield _models.Seguridad.findAll({
					where: { fk_usuario_id: usuario.id_usuario }
				});
				let respuestaValida;
				for (const resp of respuestas) {
					const pregunta = preguntasSeguridad.find(function (p) {
						return p.id_pregunta == resp.id_pregunta;
					});
					respuestaValida = pregunta && (yield (0, _password.passwordMatch)(resp.respuesta, pregunta.respuesta));
					if (!pregunta || !respuestaValida) {
						throw new Error('Respuesta incorrecta');
					}
				}
				usuario.contrasena = yield (0, _password.createPassword)(nueva_contrasena);
				yield usuario.save();
				return true;
			} catch (error) {
				console.error('Error al restaurar clave por pregunta:', error);
				throw new _apolloServerExpress.UserInputError(error.message);
			}
		});

		return function restaurarClavePorPregunta(_x5, _x6) {
			return _ref4.apply(this, arguments);
		};
	})(),

	restaurarClavePorPin: (() => {
		var _ref5 = _asyncToGenerator(function* (_, { input }) {
			try {
				const { nombre_usuario, pin, nueva_contrasena } = input;
				const usuario = yield _models.Usuario.findOne({ where: { nombre_usuario } });
				if (!usuario) throw new Error('Usuario no encontrado');
				const pinRec = yield _models.Pin.findOne({
					where: {
						fk_usuario_id: usuario.id_usuario
					}
				});
				let pinValido = yield (0, _password.passwordMatch)(pin, pinRec.pin);
				if (!pinValido) throw new Error('PIN incorrecto');
				usuario.contrasena = yield (0, _password.createPassword)(nueva_contrasena);
				yield usuario.save();
				return true;
			} catch (error) {
				console.error('Error al restaurar clave por PIN:', error);
				throw new _apolloServerExpress.UserInputError(error.message);
			}
		});

		return function restaurarClavePorPin(_x7, _x8) {
			return _ref5.apply(this, arguments);
		};
	})(),

	crearPreguntaSeguridad: (() => {
		var _ref6 = _asyncToGenerator(function* (_, { input }) {
			try {
				const { nombre_usuario, pregunta, respuesta } = input;
				const usuario = yield _models.Usuario.findOne({ where: { nombre_usuario } });
				if (!usuario) throw new Error('Usuario no encontrado');
				const preguntaExistente = yield _models.Seguridad.findOne({
					where: { fk_usuario_id: usuario.id_usuario }
				});
				if (preguntaExistente) {
					preguntaExistente.pregunta = pregunta;
					preguntaExistente.respuesta = yield (0, _password.createPassword)(respuesta);
					yield preguntaExistente.save();
				} else {
					yield _models.Seguridad.create({
						pregunta,
						respuesta: yield (0, _password.createPassword)(respuesta),
						fk_usuario_id: usuario.id_usuario
					});
				}
				return true;
			} catch (error) {
				console.error('Error al crear pregunta de seguridad:', error);
				throw new _apolloServerExpress.UserInputError(error.message);
			}
		});

		return function crearPreguntaSeguridad(_x9, _x10) {
			return _ref6.apply(this, arguments);
		};
	})(),

	crearPinRecuperacion: (() => {
		var _ref7 = _asyncToGenerator(function* (_, { input }) {
			try {
				const { nombre_usuario, pin } = input;
				console.log("pin", pin);

				const usuario = yield _models.Usuario.findOne({ where: { nombre_usuario } });
				if (!usuario) throw new Error('Usuario no encontrado');
				const pinExistente = yield _models.Pin.findOne({
					where: { fk_usuario_id: usuario.id_usuario }
				});
				if (pinExistente) {
					const pinUpdate = yield (0, _password.createPassword)(pin);
					pinExistente.pin = pinUpdate;
					yield pinExistente.save();
				} else {
					const pinCreate = yield (0, _password.createPassword)(pin);
					yield _models.Pin.create({
						pin: pinCreate,
						fk_usuario_id: usuario.id_usuario
					});
				}
				return true;
			} catch (error) {
				console.error('Error al crear PIN de recuperación:', error);
				throw new _apolloServerExpress.UserInputError(error.message);
			}
		});

		return function crearPinRecuperacion(_x11, _x12) {
			return _ref7.apply(this, arguments);
		};
	})(),

	crearUsuario: (0, _authorizeResolvers.authorize)([], (() => {
		var _ref8 = _asyncToGenerator(function* (obj, { input }) {
			try {
				const usuario = yield _models.Usuario.create(input);
				console.log('usuario creado:', usuario);

				return usuario;
			} catch (error) {
				console.log('error crear user', error.message);
				throw new _apolloServerExpress.UserInputError("Error al crear usuario", { error });
			}
		});

		return function (_x13, _x14) {
			return _ref8.apply(this, arguments);
		};
	})()),

	actualizarUsuario: (0, _authorizeResolvers.authorize)([], (() => {
		var _ref9 = _asyncToGenerator(function* (obj, { id_usuario, input }) {
			const usuario = yield _models.Usuario.findByPk(id_usuario);
			console.log('usuario en cuestion: ', input);

			if (!usuario) throw new _apolloServerExpress.UserInputError("Usuario no encontrado");
			try {
				if (input.contrasena) {
					input.contrasena = yield (0, _password.createPassword)(input.contrasena);
				} else {
					delete input.contrasena;
				}

				yield usuario.update(input);
				return usuario;
			} catch (error) {
				throw new _apolloServerExpress.UserInputError("Error al actualizar usuario", { error });
			}
		});

		return function (_x15, _x16) {
			return _ref9.apply(this, arguments);
		};
	})()),

	eliminarUsuario: (0, _authorizeResolvers.authorize)([], (() => {
		var _ref10 = _asyncToGenerator(function* (obj, { id_usuario }) {
			const usuario = yield _models.Usuario.findByPk(id_usuario);
			if (!usuario) throw new _apolloServerExpress.UserInputError("Usuario no encontrado");
			yield usuario.destroy();
			return true;
		});

		return function (_x17, _x18) {
			return _ref10.apply(this, arguments);
		};
	})()),

	login: (0, _authorizeResolvers.authorize)([], (() => {
		var _ref11 = _asyncToGenerator(function* (obj, { input }, context) {
			try {
				const { nombre_usuario, contrasena } = input;
				const usuario = yield _models.Usuario.findOne({ where: { nombre_usuario }, attributes: ['id_usuario', 'fk_doctor_id', 'fk_cdi_id', 'nombre_usuario', 'contrasena', 'rol', 'estado', 'fecha_creacion'] });
				if (!usuario) throw new _apolloServerExpress.UserInputError("Usuario o contraseña incorrectos");
				if (usuario.estado !== "activo") {
					throw new _apolloServerExpress.UserInputError("Usuario inactivo o suspendido");
				}

				const valid = yield (0, _password.passwordMatch)(contrasena, usuario.contrasena);
				if (!valid) throw new _apolloServerExpress.UserInputError("Usuario o contraseña incorrectos");
				const token = (0, _tokenGenerator.createToken)(usuario.get());
				return token;
			} catch (error) {
				throw new _apolloServerExpress.UserInputError(error.message);
			}
		});

		return function (_x19, _x20, _x21) {
			return _ref11.apply(this, arguments);
		};
	})())
};