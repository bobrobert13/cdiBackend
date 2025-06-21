import { authorize } from "../../utils/authorize-resolvers";
import { UserInputError } from "apollo-server-express";
import { User, Paciente, Consultas, Especialidad, Direccion, Ciudad, Estado, Seguridad, Telefono } from "../../utils/sequelize";
import { processUpload } from "./commonsGlobal";
import { createPassword, passwordMatch } from "../../utils/password";


export const Query = {
  // BuscarUser: authorize(
  //   [],
  //   async (_, { data }, { credentials: { user }, dirBase }) => {
  //       console.log("data del buscador", data)
  //     return User.findOne({
  //       where: {
  //         role: data.role,
  //         dni: data.dni
  //       },
  //       include: [Especialidad, Telefono],
  //       order: [['createdAt', 'DESC']]
  //     }).then((users) => {
  //       console.log("usuarioss", users.toJSON());
  //       if (!users) throw "not-users-for-show";
  //       let user = users.toJSON();
  //       if(users.Telefono) user['telefono'] = '0' + user.Telefono.codigo + user.Telefono.numero;
  //       // let usuarios = [];
  //       //     users.forEach((u, index) => {
  //       //       usuarios.push(u.toJSON());
  //       //       usuarios[index]['roleEspecialidad'] = usuarios[index].Especialidad.roleEspecialidad
  //       //     })
  //         return [user];
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //   }
  // ),
  // BuscarDoctor: authorize(
  //   [],
  //   async (_, { data }, { credentials: { user }, dirBase }) => {
  //       console.log("data del buscador", data)
  //     return User.findAll({
  //       where: {
  //         id: data.id,
  //         role: data.role
  //       },
  //       include: [Especialidad]
  //     }).then((doctores) => {
  //       if (!doctores) throw "not-doctores-for-show";
  //           let doctoresData = [];
  //           doctores.forEach((u, index) => {
  //             doctoresData.push(u.toJSON());
  //             doctoresData[index]['roleEspecialidad'] = doctoresData[index].Especialidad.roleEspecialidad
  //           })
  //         return doctoresData;
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //   }
  // ),
  // BuscarPaciente: authorize(
  //   [],
  //   async (_, { data }, { credentials: { user }, dirBase }) => {
  //       console.log("data del buscador", data)
  //     return Paciente.findAll({
  //       where: {
  //         dni: data.dni,
  //         role: data.role
  //       },
  //       include: [{ model: Consultas, as: 'consultas' }]
  //     })
  //         .then( async (users) => {
  //         if (!users) throw "not-pacientes-for-show";


  //         let pacientes = [];
  //         for (const [index, u] of users.entries()) {
  //           pacientes.push(u.toJSON());
  //           let consulta = await Consultas.findAll({ where: { PacienteId: u.toJSON().id } });
  //           let telefono = await Telefono.findOne({ where: { PacienteId: u.toJSON().id } });
  //           if(telefono) pacientes[index].telefono = '0' + telefono.toJSON().codigo + telefono.toJSON().numero;
  //           if (consulta.length > 0) {
  //             pacientes[index].consultas = consulta;
  //           }
  //         }
  //         return pacientes;
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //   }
  // ),
  // allPacientes: authorize([], (_, body, { credentials: { user } }) => {
  //   return Paciente.findAll({
  //     where: {
  //       role: "Paciente",
  //     },
  //     include: [Direccion, Telefono]
  //   }).then( async(user) => {
  //     if (!user) throw "not-exist-pacientes";
  //     console.log("DATOS DE PACIENTES", user[0].Direccion);
  //       let pacientes = [];
  //       for (const [index, u] of user.entries()) {
  //         pacientes.push(u.toJSON());
  //         let consulta = await Consultas.findAll({ where: { PacienteId: u.toJSON().id } });
  //         if(u.Direccion) pacientes[index].direccion = u.Direccion.toJSON();
  //         if(u.Telefono) pacientes[index]['telefono'] = '0' + pacientes[index].Telefono.codigo + pacientes[index].Telefono.numero;
  //         if (consulta.length > 0) {
  //           pacientes[index].consultas = consulta;

  //         }
  //       }
  //       console.log("dataPaciente", pacientes[4] );
  //       return pacientes;
  //     })
  //     .catch((err) => {
  //       // new UserInputError(err)
  //     });
  // }),
  // allDoctores: authorize([], async (_, { data }, { credentials: { user } }) => {
  //   // const options = await createQuery(data);
  //   // if (options.error) throw options.error;
  //   let filter = data.roleEspecialidad && { AreaId: data.roleEspecialidad }
  //   return User.findAll({
  //     where: {
  //       role: 'Doctor',
  //       ...filter
  //     },
  //     include: [Especialidad, Direccion, Telefono]
  //   })
  //     .then((doctor) => {
  //       if (!doctor) throw "not-exist-doctors";
  //       let doctoresData = [];
  //       doctor.forEach((u, index) => {
  //         doctoresData.push(u.toJSON());
  //         doctoresData[index]['roleEspecialidad'] = doctoresData[index].Especialidad.roleEspecialidad || ''
  //         if(u.Direccion) doctoresData[index].direccion = doctoresData[index].Direccion
  //         if(u.Telefono) doctoresData[index]['telefono'] = '0' + doctoresData[index].Telefono.codigo + doctoresData[index].Telefono.numero;
  //       })
  //       console.log("ALLDOCTORES_ALLLL", doctoresData);
  //       return doctoresData;
  //     })
  //     .catch((err) => new UserInputError(err));
  // }),
  // allEncargados: authorize([], (_, body, { credentials: { user } }) => {
  //   return User.findAll({
  //     where: {
  //       role: 'Encargado'
  //     },
  //     include: [Especialidad, Direccion, Telefono]
  //   })
  //     .then((encargado) => {
  //       if (!encargado) throw "not-exist-encargados";
  //       let encargados = [];
  //       encargado.forEach((u, index) => {
  //         encargados.push(u.toJSON());
  //         if(encargados[index].Especialidad) encargados[index]['roleEspecialidad'] = encargados[index].Especialidad.roleEspecialidad
  //         if(encargados[index].Direccion) encargado[index].direccion = {
  //           calle: encargados[index].Direccion.calle,
  //           numero: encargados[index].Direccion.numero,
  //           sector: encargados[index].Direccion.sector
  //         }
  //         if(encargados[index].Telefono) encargados[index]['telefono'] = '0' + encargados[index].Telefono.codigo + encargados[index].Telefono.numero;
  //       })
  //       // console.log("ENCARGAS", encargados);
  //       return encargados;
  //     })
  //     .catch((err) => new UserInputError(err));
  // }),
  // MyWorkers: authorize([], async (_, { }, { credentials: { user }, dirBase }) => {
  //   console.log("id padre: ", user.id)
  //   return User.findAll({
  //     where: {
  //       fatherID: user.id
  //     },
  //     include: [Especialidad],
  //     order: [['createdAt', 'DESC']]
  //   }).then((users) => {
  //       console.log("workers: ", users)
  //       if (!users) throw "not-users-for-show";
  //       return users;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // }),
  // MisPacientes: authorize([], async (_, { }, { credentials: { user }, dirBase }) => {
  //   console.log("user uddd", user.id);
  //   return Paciente.findAll({
  //     where: {fatherID: user.id},
  //     order: [['createdAt', 'DESC']],
  //     include: [{ model: Consultas, as: 'consultas' }]
  //   }).then( async(users) => {
  //       if (!users) throw "not-pacientes-for-show";
  //       let myPacientes = [];
  //       for (const [index, u] of users.entries()) {
  //         myPacientes.push(u.toJSON());
  //         console.log("PACIENTESS", myPacientes);
  //         let consulta = await Consultas.findAll({ where: { PacienteId: u.toJSON().id } });
  //         let direccion = await Direccion.findOne({ where: { PacienteId: u.toJSON().id  } });
  //         if (consulta.length > 0) {
  //           myPacientes[index].consultas = consulta;
  //         }
  //         if(direccion) {
  //           myPacientes[index].direccion = direccion;
  //         }
  //         if(u.Telefono) doctoresData[index]['telefono'] = '0' + doctoresData[index].Telefono.codigo + doctoresData[index].Telefono.numero;
  //       }
  //       return myPacientes;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  // }),
  // oneUser: authorize([], (_, body, { credentials: { user } }) => {
  //   return User.findOne({
  //     where: {
  //       id: user.id
  //     },
  //     include: [Especialidad]
  //   })
  //     .then((user) => {
  //       if (!user) throw "not-valid-user";
  //       console.log("ONEUSER", user);
  //       // , roleEspecialidad: user.toJSON().Especialidad.roleEspecialidad
  //       let oneUser = {...user.toJSON()}
  //       return oneUser;
  //     })
  //     .catch((err) => new UserInputError(err));
  // }),
  // checkUserRecovery: authorize([], async(_, {email}, { credentials: { user } }) => {
  //   console.log("emailrevover", email);
  //   return User.findOne({
  //     where: {
  //       email: email
  //     },
  //     include: [Seguridad]
  //   })
  //     .then((user) => {
  //       if (!user) throw "No se encuentra el usuario.";
  //       console.log("usuarioo", user.toJSON());
  //       return user.toJSON().Seguridad
  //     })
  //     .catch((err) => new UserInputError(err));
  // }),
  // getSeguridad: authorize([], async (_, {UserId}, { credentials: { user } }) => {
  //   console.log("DATA ID USUARIO", UserId);
  //   const seguridad = await Seguridad.findOne({
  //     where: {
  //       UserId: UserId
  //     }
  //   });
  //   if(!seguridad) throw 'No hay datos';
  //   console.log("seguridad", seguridad.toJSON());
  //   return seguridad;
  // }),
  // recuperarContrasena: authorize([], async (_, {data}, { credentials: { user } }) => {
  //   try {
  //     console.log("repsuestasss", data);
  //     const usuario = await User.findByPk(data.UserId, {
  //       include: [Seguridad],
  //     });
  //     console.log("usuario", usuario.toJSON());

  //     if (!usuario) throw 'Usuario no encontrado';

  //     const preguntasSeguridad = [
  //       usuario.Seguridad.respuesta1,
  //       usuario.Seguridad.respuesta2,
  //       usuario.Seguridad.respuesta3,
  //     ];
  //     const userRespuestas = [data.respuesta1, data.respuesta2, data.respuesta3];
  //     console.log("comprobaciones", preguntasSeguridad);
  //     console.log("userRespuestas", userRespuestas);

  //     for (let i = 0; i < preguntasSeguridad.length; i++) {
  //       if (!passwordMatch( userRespuestas[i], preguntasSeguridad[i])) {
  //         throw 'Respuestas incorrectas';
  //       }
  //     }

  //     return true;

  //   } catch (error) {
  //     console.error(error);
  //     return new UserInputError(error);
  //   }
  // }),
};

export const Mutation = {
//   AddUser: authorize([], async (_, { id, data }, { credentials: { user }, dirBase }) => {
//     console.log("USUARIO credenciales", user);
//     try {
//       let exist = await User.findOne({
//         where: {
//           email: data.email,
//           dni: data.dni
//         },
//       })
//       if (exist) throw "Este correo ya se encuentra registrado";
//       let existdni = await User.findOne({
//         where: {
//           dni: data.dni
//         },
//       });
//       if (existdni)  throw 'Documento de identidad ya pertenece a un usuario registrado.';
//         if (data.profileImage) {
//           let tempImageDir = await processUpload(data.profileImage, dirBase);
//           console.log("Imagen de perfil guardada en: ", tempImageDir);
//           if (tempImageDir.relativePath)
//             data.profileImage = tempImageDir.relativePath;
//         }
//         let direccion = data.direccion;
//         let ciudad = data.ciudad;
//         console.log("INSERCIONN", data);
//         data.direccion = '';
//         delete data.ciudad;
//         data.password = createPassword(data.password);
//       return User.create(data)
//         .then(async (user) => {
//           let result = await Ciudad.create({
//             nombre: ciudad.nombre,
//             EstadoId: ciudad.EstadoId ,
//           });
//           let response = await Direccion.create({
//             calle: direccion.calle,
//             sector: direccion.sector,
//             numero: direccion.numero,
//             UserId: user.toJSON().id,
//             CiudadId: result.toJSON().id,
//           });
//           await Telefono.create({
//             codigo: data.codigoArea,
//             numero: data.telefono,
//             UserId: response.toJSON().UserId,
//           })
//           console.log("direccion registrada: ", response.toJSON());
//           return user.toJSON();
//         })
//         .catch((err) => {
//           console.error(err);
//           throw err;
//         });
//     } catch (error) {
//       console.error(error);
//       return new UserInputError(error);
//     }
//   }),
//   AddPaciente: authorize([], async (_, { id, data }, { credentials: { user }, dirBase }) => {
//     try {
//       console.log("data paciente", data);
//       let exist = await Paciente.findOne({
//         where: {
//           dni: data.dni
//         }
//        });
//       // let itsme = await User.findOne({ dni: data.dni });
//       console.log("mis credenciales: ", user);
//       console.log("soy yo: ", data.dni === user.dni)
//       if (exist) throw "Este paciente ya se encuentra registrado";
//       if (data.dni == user.dni) throw "No te puedes agregar a ti mismo";
//       let direccion = data.direccion;
//       let ciudad = data.ciudad;
//       console.log("INSERCIONN", data);
//       data.direccion = '';
//       delete data.ciudad;
//       return Paciente.create(data)
//         .then(async (user) => {
//           let result = await Ciudad.create({
//             nombre: ciudad.nombre,
//             EstadoId: ciudad.EstadoId ,
//           });
//           let response = await Direccion.create({
//             calle: direccion.calle,
//             sector: direccion.sector,
//             numero: direccion.numero,
//             PacienteId: user.toJSON().id,
//             CiudadId: result.toJSON().id,
//           });
//           await Telefono.create({
//             codigo: data.codigoArea,
//             numero: data.telefono,
//             PacienteId: response.toJSON().PacienteId,
//           })
//           return user.toJSON();
//         })
//         .catch((err) => {
//           console.error(err);
//           throw err;
//         });
//     } catch (error) {
//       console.error(error);
//       return new UserInputError(error);
//     }
//   }),
//   AddConsulta: authorize([], async (_, { id, data }, { credentials: { user }, dirBase }) => {
//     try {
//       return Paciente.findOne({
//         where: {
//           id: id
//         },
//         include: [{ model: Consultas, as: 'consultas' }]
//       }).then( async (res) => {
//         if (!data) throw "data-is-undefined";
//         // if (data.diagnostico) res.diagnostico = data.diagnostico;
//         // if (data.ingreso) res.ingreso = data.ingreso;
//         // if (data.salida) res.salida = data.salida;
//         let dataConsulta = {
//           diagnostico: data.diagnostico,
//           salida: data.salida,
//           numeroControl: data.numeroControl,
//           ingreso: data.ingreso,
//           PacienteId: res.toJSON().id,
//         }
//         const pacienteData = { ...res.toJSON() }
//         if(res.consultas === undefined){
//           res.toJSON().consultas = [dataConsulta]
//         } else {
//           const consulta = await Consultas.create(dataConsulta);
//           pacienteData.consultas.push(consulta.toJSON());
//         }
//         return pacienteData;
//       });
//     } catch (error) {
//       console.error(error);
//       return new UserInputError(error);
//     }
//   }),
//   UpdateConsulta: authorize(
//     [],
//     async (_, { id, idConsulta, data }, { credentials: { user }, dirBase }) => {
//       console.log("consulta del paciente que llega:", data)
//       try {
//         return Consultas.update( data, {
//           where: {
//             id: data.id
//           }
//         }).then((res) => {
//           console.log("RESPUESTA: ", res)
//           return res;
//         });
//       } catch (err) {
//         console.error(err);
//         return new UserInputError(err);
//       }
//     }
//   ),
//   DelUser: authorize(
//     [],
//     async (_, { id }, { credentials: { user }, dirBase }) => {
//       try {
//         return User.destroy({
//           where: {
//             id: id
//           }
//         })
//           .then((res) => {
//             console.log(res);
//             if(!res) throw 'no se pudo eliminar el usuario'
//             return {
//               status: "Ok",
//               message: "user deleted!",
//             };
//           })
//           .catch((err) => {
//             throw err;
//           });
//       } catch (err) {
//         console.error(err);
//         return new UserInputError(err);
//       }
//     }
//   ),
//   UpdateUserInfo: authorize(
//     [],
//     async (_, { id, data }, { credentials: { user }, dirBase }) => {
//       console.log("info del usuario que llega:", data)
//       try {
//         if (data.profileImage) {
//           let tempImageDir = await processUpload(data.profileImage, dirBase);
//           console.log("Imagen de perfil guardada en: ", tempImageDir);
//           if (tempImageDir.relativePath)
//             data.profileImage = tempImageDir.relativePath;
//         }
//         return User.findOne({
//           where: {
//             id: id
//           }
//         }).then((res) => {
//           if (!data) throw "data-is-undefined";
//           if (data.profileImage) res.profileImage = data.profileImage;
//           if (data.name) res.name = data.name;
//           if (data.email) res.email = data.email;
//           res.save();
//           return res;
//         });
//       } catch (err) {
//         console.error(err);
//         return new UserInputError(err);
//       }
//     }
//   ),
//   setPreguntas: authorize([], async(_, {data} , {credentials: {user}} ) => {
//     console.log("preguntas seguridad", data);
//     try {
//       const exist = await Seguridad.findOne({
//         where: {
//           UserId: data.UserId
//         }
//       });
//       if(exist) throw 'Ya tienes una configuración de preguntas establecidas';
//       data.respuesta1 = createPassword(data.respuesta1);
//       data.respuesta2 = createPassword(data.respuesta2);
//       data.respuesta3 = createPassword(data.respuesta3);
//       await Seguridad.create(data);
//       return true
//     } catch (error) {
//       console.error(error);
//       return new UserInputError(error);
//     }
//   }),
//   updatePreguntas: authorize([], async(_, {data} , {credentials: {user}} ) => {
//     console.log("update_seguridad", data);
//     data.respuesta1 = createPassword(data.respuesta1);
//     data.respuesta2 = createPassword(data.respuesta2);
//     data.respuesta3 = createPassword(data.respuesta3);
//     try {
//       const update = await Seguridad.update(data, {
//         where: {
//           UserId: data.UserId,
//         }
//       });
//       return true
//     } catch (error) {
//       console.error(error);
//       return new UserInputError(error);
//     }
//   }),
//   setNewPassword: authorize([], async(_, {UserId, password} , {credentials: {user}} ) => {
//     console.log("update_password", UserId, password);
//     try {
//  const usuario = await User.findByPk(UserId);

//  if (!usuario) {
//    throw new Error('Usuario no encontrado');
//  }

//  usuario.password = createPassword(password);
//  await usuario.save();
//  return true

//     } catch (error) {
//       console.error(error);
//       return new UserInputError(error);
//     }
//   })
};
