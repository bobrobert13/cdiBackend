import { UserInputError } from "apollo-server-express";
import { createToken, resetPasswordToken } from "../../utils/token-generator";
import { authorize } from "../../utils/authorize-resolvers";
import { createPassword , passwordMatch} from "../../utils/password";


import { Seguridad, Usuario, Pin } from "../../models";


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



export const Query = {

	usuarios: authorize([], async () => {
		return await Usuario.findAll();
	}),

	usuario: authorize([], async (obj, { id_usuario }) => {
		const usuario = await Usuario.findByPk(id_usuario);
		if (!usuario) throw new UserInputError("Usuario no encontrado");
		return usuario;
	}),

	metodosRecuperacion: async (_, { nombre_usuario }) => {
		try {
			const usuario = await Usuario.findOne({
				where: { nombre_usuario }
			});
			if (!usuario) throw new Error('El usuario no existe en el sistema');
			const tienePin = !!(await Pin.findOne({ where: { fk_usuario_id: usuario.id_usuario } }));
			const preguntasSeguridad = await Seguridad.findAll({
				where: { fk_usuario_id: usuario.id_usuario },
			});
			const preguntas = preguntasSeguridad.map(p => ({
				id_pregunta: p.id_pregunta,
				pregunta: p.pregunta
			}));
			return { tienePin, preguntas };
		} catch (error) {
			console.error('Error al obtener métodos de recuperación:', error);
			throw new UserInputError(error.message);
		}
	}

};

export const Mutation = {

	restaurarClavePorPregunta: async (_, { input }) => {
		try {
			const { nombre_usuario, respuestas, nueva_contrasena } = input;
			const usuario = await Usuario.findOne({
				where: { nombre_usuario },
			});
			if (!usuario) throw new Error('Usuario no encontrado');
			const preguntasSeguridad = await Seguridad.findAll({
				where: { fk_usuario_id: usuario.id_usuario },
			});
			let respuestaValida;
			for (const resp of respuestas) {
				const pregunta = preguntasSeguridad.find(p => p.id_pregunta == resp.id_pregunta);
				respuestaValida = pregunta && await passwordMatch(resp.respuesta, pregunta.respuesta);
				if (!pregunta || !respuestaValida) {
					throw new Error('Respuesta incorrecta');
				}
			}
			usuario.contrasena = await createPassword(nueva_contrasena);
			await usuario.save();
			return true;
		} catch (error) {
			console.error('Error al restaurar clave por pregunta:', error);
			throw new UserInputError(error.message);
		}
	},

	restaurarClavePorPin: async (_, { input }) => {
		try {
			const { nombre_usuario, pin, nueva_contrasena } = input;
			const usuario = await Usuario.findOne({ where: { nombre_usuario } });
			if (!usuario) throw new Error('Usuario no encontrado');
			const pinRec = await Pin.findOne({
				where: {
					fk_usuario_id: usuario.id_usuario,
				}
			});
			let pinValido = await passwordMatch(pin, pinRec.pin);
			if (!pinValido) throw new Error('PIN incorrecto');
			usuario.contrasena = await createPassword(nueva_contrasena);
			await usuario.save();
			return true;
		} catch (error) {
			console.error('Error al restaurar clave por PIN:', error);
			throw new UserInputError(error.message);
		}
	},

	crearPreguntaSeguridad: async (_, { input },) => {
		try {
			const { nombre_usuario, pregunta, respuesta } = input;
			const usuario = await Usuario.findOne({ where: { nombre_usuario } });
			if (!usuario) throw new Error('Usuario no encontrado');
			const preguntaExistente = await Seguridad.findOne({
				where: { fk_usuario_id: usuario.id_usuario }
			});
			if (preguntaExistente) {
				preguntaExistente.pregunta = pregunta;
				preguntaExistente.respuesta = await createPassword(respuesta);
				await preguntaExistente.save();
			} else {
				await Seguridad.create({
					pregunta,
					respuesta: await createPassword(respuesta),
					fk_usuario_id: usuario.id_usuario
				});
			}
			return true;
		} catch (error) {
			console.error('Error al crear pregunta de seguridad:', error);
			throw new UserInputError(error.message);
		}
	},

	crearPinRecuperacion: async (_, { input },) => {
		try {
			const { nombre_usuario, pin } = input;
			console.log("pin", pin);
			
			const usuario = await Usuario.findOne({ where: { nombre_usuario } });
			if (!usuario) throw new Error('Usuario no encontrado');
			const pinExistente = await Pin.findOne({
				where: { fk_usuario_id: usuario.id_usuario }
			});
			if (pinExistente) {
				const pinUpdate = await createPassword(pin);
				pinExistente.pin = pinUpdate;
				await pinExistente.save();
			} else {
				const pinCreate = await createPassword(pin);
				await Pin.create({
					pin: pinCreate,
					fk_usuario_id: usuario.id_usuario
				});
			}
			return true;
		} catch (error) {
			console.error('Error al crear PIN de recuperación:', error);
			throw new UserInputError(error.message);
		}
	},


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
			if	(input.contrasena) {
				input.contrasena = await createPassword(input.contrasena);
			}
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
			const usuario = await Usuario.findOne({ where: { nombre_usuario }, attributes: ['id_usuario', 'fk_doctor_id', 'fk_cdi_id', 'nombre_usuario', 'contrasena', 'rol', 'estado', 'fecha_creacion'] });
			if (!usuario) throw new UserInputError("Usuario o contraseña incorrectos");
			if (usuario.estado !== "activo") {
				throw new UserInputError("Usuario inactivo o suspendido");
			}
			const valid = await passwordMatch(contrasena, usuario.contrasena);
			if (!valid) throw new UserInputError("Contraseña incorrecta");
			const token = createToken(usuario.get());
			return token
		} catch (error) {
			throw new UserInputError(error.message);
		}
	}),
};
