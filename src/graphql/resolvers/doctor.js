import { ApolloError, UserInputError } from "apollo-server-express";
import { authorize } from "../../utils/authorize-resolvers";

import { Persona, Telefono, Correo, Direccion, Usuario, Doctor, Paciente, Consulta, Examenes, Medicamento, Tratamiento, CDI, Diagnostico, Hospitalizacion, Emergencia } from "../../models";
import { createPassword } from "../../utils/password";

export const Query = {

	doctores: async () => {
		const todosDoctores = await Doctor.findAll({
			include: [{ model: Persona, as: "persona" }, { model: Usuario, as: "usuarios", include: [ { model: CDI, as: "cdi" } ] }, ],
			order: [['createdAt', 'DESC']]
		});
		return todosDoctores;
	},

	doctorPacientes: async (parent, { id_doctor }) => {
		try {
			const doctor = await Doctor.findByPk(id_doctor, {
				include: [
					{
						model: Usuario, as: 'usuarios',
					},
					{
						model: Paciente, as: "pacientes",
						include: [

							{
								model: Persona,
								as: "persona",
								include: [
									{ model: Telefono, as: "telefono" },
									{ model: Correo, as: "correo" },
									{ model: Direccion, as: "direccion" },
								],
							},
							{
								model: Hospitalizacion,
								as: 'hospitalizaciones',
							},
							{
								model: Emergencia,
								as: 'emergencias',
							},
							{
								model: Diagnostico,
								as: "diagnosticos",
								include: [
									{ model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
								],
								order: [['createdAt', 'DESC']]
							},
							{
								model: Consulta,
								as: "consultas",
								include: [
									{ model: CDI, as: 'cdis' },
									{ model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
								]
							},
							{
								model: Examenes,
								as: "examenes",
								include: [
									{ model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
								]
							},
							{
								model: Medicamento,
								as: "medicamentos",
								include: [
									{ model: Doctor, as: 'doctores', include: [{ model: Persona, as: 'persona' }] },
								]
							},
							{
								model: Tratamiento,
								as: "tratamientos",
								include: [
									{ model: Doctor, as: 'doctor', include: [{ model: Persona, as: 'persona' }] },
								]
							},
						]
					},
					{
						model: Persona, as: 'persona',
						include: [
							{ model: Telefono, as: 'telefono' },
							{ model: Correo, as: 'correo' },
							{ model: Direccion, as: 'direccion' },
						]
					}
				]
			});
			if (!doctor) throw new UserInputError("Doctor no encontrado");
			return doctor;
		} catch (error) {
			console.error("Error al obtener pacientes del doctor:", error);
			throw new UserInputError(error.message);
		}
	},


	doctor: async (parent, { id_doctor }) => {
		const doctor = await Doctor.findByPk(id_doctor, {
			include: [{ model: Persona, as: "persona" }]
		});
		if (!doctor) throw new UserInputError("Doctor no encontrado");
		return doctor;
	},


};

export const Mutation = {
	crearDoctor: async (parent, { input }) => {
		try {
			const { personaInput, usuarioInput, doctorInput } = input;

			if (usuarioInput) {
				const usuario = await Usuario.findOne({
					where: {
						nombre_usuario: usuarioInput.nombre_usuario
					}
				});
				if (usuario) throw new UserInputError("El nombre de usuario ya existe, intente con otro.");
			}

			if (doctorInput) {
				const doctor = await Doctor.findOne({
					where: {
						numero_carnet: doctorInput.numero_carnet
					}
				});
				if (doctor) throw new UserInputError("El número de carnet ya existe y es único por doctor.");
			}

			if (personaInput) {
				const persona = await Persona.findOne({
					where: {
						cedula_identidad: personaInput.cedula_identidad
					}
				});
				if (persona) throw new UserInputError("La cédula de identidad ya existe y es única por persona.");
			}

			let telefono = null, correo = null, direccion = null;

			if (personaInput.telefonoInput) {
				const telefonoExistente = await Telefono.findOne({
					where: {
						numero: personaInput.telefonoInput.numero
					}
				});
				if (telefonoExistente) {
					throw new UserInputError("El teléfono esta siendo usado por otro usuario.");
				}
				telefono = await Telefono.create(personaInput.telefonoInput);
			}

			if (personaInput.correoInput) {
				const correoExistente = await Correo.findOne({
					where: {
						correo: personaInput.correoInput.correo
					}
				});
				if (correoExistente) {
					throw new UserInputError("El correo esta siendo usado por otro usuario.");
				}
				correo = await Correo.create(personaInput.correoInput);
			}

			if (personaInput.direccionInput) {
				direccion = await Direccion.create(personaInput.direccionInput);
			}

			const personaData = {
				...personaInput,
				fk_telefono_id: telefono ? telefono.id_telefono : null,
				fk_correo_id: correo ? correo.id_correo : null,
				fk_direccion_id: direccion ? direccion.id_direccion : null,
			};

			delete personaData.telefonoInput;
			delete personaData.correoInput;
			delete personaData.direccionInput;

			const persona = await Persona.create(personaData);

			const doctor = await Doctor.create({
				...doctorInput,
				fk_persona_id: persona.id_persona,
			});

			const usuario = await Usuario.create({
				...usuarioInput,
				contrasena: await createPassword(usuarioInput.contrasena),
				fk_doctor_id: doctor.id_doctor,
				fk_cdi_id: doctorInput.fk_cdi_id,
			});

			// Retornar doctor con relaciones anidadas
			const doctorResults = await Doctor.findByPk(doctor.id_doctor, {
				include: [
					{
						model: Persona,
						as: "persona",
						include: [
							{ model: Telefono, as: "telefono" },
							{ model: Correo, as: "correo" },
							{ model: Direccion, as: "direccion" },
						],
					},
				],
			});
			return {
				...doctorResults.get(),
				persona: {
					...doctorResults.get().persona.get(),
					telefono: doctorResults.get().persona.get().telefono.get(),
					correo: doctorResults.get().persona.get().correo.get(),
					direccion: doctorResults.get().persona.get().direccion.get(),
				}
			};
		} catch (error) {
			console.error("Error al crear el doctor:", error);
			throw new UserInputError(error.message);
		}
	},

	actualizarDoctor: async (parent, { id_doctor, input }) => {

		const doctor = await Doctor.findByPk(id_doctor, {
			include: [
				{
					model: Persona,
					as: "persona",
					include: [
						{ model: Telefono, as: "telefono" },
						{ model: Correo, as: "correo" },
						{ model: Direccion, as: "direccion" },
					],
				},
			],
		});

		if (!doctor) throw new UserInputError("Doctor no encontrado");

		await doctor.update({
			anos_experiencia: input.doctorInput.anos_experiencia || doctor.anos_experiencia,
			numero_carnet: input.doctorInput.numero_carnet || doctor.numero_carnet,
			area_de_trabajo: input.doctorInput.area_de_trabajo || doctor.area_de_trabajo,
			horario: input.doctorInput.horario || doctor.horario,
		});

		if (input.personaInput) {
			const personaInput = input.personaInput;
			const persona = doctor.persona.get();
			const telefonoActual = persona.telefono.get();
			const correoActual = persona.correo.get();
			const direccionActual = persona.direccion.get();


			if (personaInput.telefonoInput) {
				if (telefonoActual) {
					await Telefono.update(personaInput.telefonoInput, { where: { id_telefono: telefonoActual.id_telefono } });
				} else {
					const nuevoTelefono = await Telefono.create(personaInput.telefonoInput);
					await Persona.update({ fk_telefono_id: nuevoTelefono.id_telefono }, { where: { id_persona: persona.id_persona } });
				}
			}

			if (personaInput.correoInput) {
				if (correoActual.correo) {
					await Correo.update(personaInput.correoInput, { where: { id_correo: correoActual.id_correo } });
				}
				else {
					const nuevoCorreo = await Correo.create(personaInput.correoInput);
					await Persona.update({ fk_correo_id: nuevoCorreo.id_correo }, { where: { id_persona: persona.id_persona } });
				}
			}

			if (personaInput.direccionInput) {
				if (direccionActual.id_direccion) {
					await Direccion.update(personaInput.direccionInput, { where: { id_direccion: direccionActual.id_direccion } });
				} else {
					const nuevaDireccion = await Direccion.create(personaInput.direccionInput);
					await Persona.update({ fk_direccion_id: nuevaDireccion.id_direccion }, { where: { id_persona: persona.id_persona } });
				}
			}

			const camposPersona = { ...personaInput };
			delete camposPersona.telefonoInput;
			delete camposPersona.correoInput;
			delete camposPersona.direccionInput;

			await Persona.update(camposPersona, { where: { id_persona: persona.id_persona } });
		}

		if (input.usuarioInput) {
			const usuarioInput = input.usuarioInput;
			const usuario = await Usuario.findOne({
				where: {
					fk_doctor_id: doctor.id_doctor,
				}
			});
			await usuario.update({
				nombre_usuario: usuarioInput.nombre_usuario || usuario.nombre_usuario,
				contrasena: await createPassword(usuarioInput.contrasena) || usuario.contrasena,
				estado: usuarioInput.estado || usuario.estado,
			});
		}

		const doctorActualizado = await Doctor.findByPk(doctor.id_doctor, {
			include: [
				{
					model: Persona,
					as: "persona",
					include: [
						{ model: Telefono, as: "telefono" },
						{ model: Correo, as: "correo" },
						{ model: Direccion, as: "direccion" },
					],
				},
			],
		});
		console.log('doctor actualizado:', {
			...doctorActualizado.get(),
			persona: {
				...doctorActualizado.get().persona.get(),
				telefono: doctorActualizado.get().persona.get().telefono.get(),
				correo: doctorActualizado.get().persona.get().correo.get(),
				direccion: doctorActualizado.get().persona.get().direccion.get(),
			}
		});

		return {
			...doctorActualizado.get(),
			persona: {
				...doctorActualizado.get().persona.get(),
				telefono: doctorActualizado.get().persona.get().telefono.get(),
				correo: doctorActualizado.get().persona.get().correo.get(),
				direccion: doctorActualizado.get().persona.get().direccion.get(),
			}
		};
	},

	inhabilitarDoctor: async (parent, { id_doctor, estado }) => {
		try {
			const doctor = await Doctor.findByPk(id_doctor);

			if (!doctor) {
				throw new Error('Doctor no encontrado');
			}

			const [updated] = await Usuario.update(
				{ estado: estado },
				{ where: { fk_doctor_id: doctor.id_doctor } }
			);

			if (updated === 0) {
				throw new Error('No se encontró ningún usuario asociado para inhabilitar');
			}

			return true;
		} catch (error) {
			console.error('Error inhabilitando al doctor:', error);
			throw new Error('Error al inhabilitar al doctor');
		}
	},


	eliminarDoctor: async (parent, { id_doctor }) => {
		// Buscar el doctor con todas las relaciones anidadas
		const doctor = await Doctor.findByPk(id_doctor, {
			include: [
				{
					model: Persona,
					as: "persona",
					include: [
						{ model: Telefono, as: "telefono" },
						{ model: Correo, as: "correo" },
						{ model: Direccion, as: "direccion" },
					],
				},
			],
		});

		if (!doctor) throw new UserInputError("Doctor no encontrado");

		// Eliminar teléfono si existe
		if (doctor.persona && doctor.persona.telefono) {
			await doctor.persona.telefono.destroy();
		}

		// Eliminar correo si existe
		if (doctor.persona && doctor.persona.correo) {
			await doctor.persona.correo.destroy();
		}

		// Eliminar dirección si existe
		if (doctor.persona && doctor.persona.direccion) {
			await doctor.persona.direccion.destroy();
		}

		// Eliminar persona si existe
		if (doctor.persona) {
			await doctor.persona.destroy();
		}

		// Eliminar doctor
		await doctor.destroy();

		// Retornar true si todo salió bien
		return true;
	},
};
