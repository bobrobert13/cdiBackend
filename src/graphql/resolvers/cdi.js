import { UserInputError } from "apollo-server-express";
import { Op } from "sequelize";

import { Usuario, CDI, Doctor, Persona, Paciente, Telefono, Correo, Direccion, Hospitalizacion, Emergencia, Diagnostico, Consulta, Examenes, Medicamento, Tratamiento } from "../../models";
import { createPassword } from "../../utils/password";


export const Query = {

    cdis: async () => {
        try {
            const todosCDI = await CDI.findAll({
                include: [{
                    model: Usuario, as: 'usuarios',
                    where: {
                        '$usuarios.fk_doctor_id$': null
                    }
                },
                {
                    model: Doctor,
                    as: 'doctores',
                    include: [
                        {
                            model: Persona, as: 'persona', include: [
                                { model: Telefono, as: "telefono" },
                                { model: Correo, as: "correo" },
                                { model: Direccion, as: "direccion" },
                            ]
                        },

                    ]
                },
                {
                    model: Paciente,
                    as: 'pacientes',
                    include: [
                        {
                            model: Persona, as: 'persona', include: [
                                { model: Telefono, as: "telefono" },
                                { model: Correo, as: "correo" },
                                { model: Direccion, as: "direccion" },
                            ]
                        },
                    ]
                }
                ], order: [['createdAt', 'DESC']]
            });
            return todosCDI;
        } catch (error) {
            console.error('Error al obtener los CDI:', error);
            throw new UserInputError(error.message);
        }
    },

    cdiInfo: async (parent, { id_cdi }) => {
        const cdi = await CDI.findByPk(id_cdi);
        if (!cdi) throw new UserInputError("CDI no encontrado");
        return cdi;
    },

    todosCdis: async () => {
        try {
            const todosCDI = await CDI.findAll();
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
        const doctores = await Doctor.findAll({
            where: { fk_cdi_id: id_cdi }, include: [
                { model: Usuario, as: 'usuarios', },
                {
                    model: Paciente, as: 'pacientes', include: [
                        {
                            model: Persona, as: 'persona', include: [
                                { model: Telefono, as: "telefono" },
                                { model: Correo, as: "correo" },
                                { model: Direccion, as: "direccion" },
                            ]
                        }
                    ]
                },
                {
                    model: Persona, as: 'persona', include: [
                        { model: Telefono, as: "telefono" },
                        { model: Correo, as: "correo" },
                        { model: Direccion, as: "direccion" },
                    ]
                }
            ]
        });
        return doctores;
    },

    pacientesCDI: async (_, { id_cdi }) => {
        console.log('ID CDI', id_cdi);

        const pacientes = await Paciente.findAll({
            where: { fk_cdi_id: id_cdi }, include: [
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
                {
                    model: Doctor, as: 'doctor', include: [
                        { model: Persona, as: 'persona' }
                    ]
                }
            ]
        });
        console.log('PACIENTES DE CDI', pacientes);

        return pacientes;
    }

};


export const Mutation = {

    crearCDI: async (parent, { input }) => {
        try {
            const { usuarioInput, ...cdiInput } = input;

            const { numero_cdi, nombre } = cdiInput;
            const cdiExistente = await CDI.findOne({
                where: {
                    [Op.or]: [
                        { numero_cdi },
                        { nombre }
                    ]
                }
            });
            if (cdiExistente) {
                throw new UserInputError("Ya existe un CDI con ese código o nombre");
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
                contrasena: await createPassword(usuarioInput.contrasena)
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
                    const passEnciptada = await createPassword(contrasena);
                    await usuario.update({ ...restoUsuario, contrasena: passEnciptada });
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
            console.log("datos para actualizar", id_cdi, estado);

            await CDI.update(
                { estado: estado },
                { where: { id_cdi: id_cdi } }
            );

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
