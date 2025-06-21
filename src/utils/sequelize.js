
// import { Sequelize, DataTypes } from 'sequelize';
// import { populateEspecialidad, populateEstados, populateUsers } from '../../scripts/populate';

// const sequelize = new Sequelize('cdi_database', 'root', '123456', {
//     host: 'localhost',
//     dialect: 'mysql',
//     password: '123456',
//     username: 'root'
// });

//  const User = sequelize.define('Persona', {
//   id: {
//     autoIncrement: true,
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     primaryKey: true,
//   },
//     name: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING(100),
//       allowNull: true,
//       unique: true,
//       lowercase: true,
//     },
//     nacionalidad: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//     dni: {
//       type: DataTypes.STRING(30),
//       allowNull: false,
//     },
//     direccion: {
//       type: DataTypes.STRING(200),
//       allowNull: true,
//     },
//     password: {
//       type: DataTypes.STRING(150),
//       allowNull: true,
//     },
//     hash: {
//       type: DataTypes.STRING(50),
//       allowNull: false,
//       defaultValue: "",
//       index: true,
//     },
//     profileImage: {
//       type: DataTypes.STRING(120),
//       allowNull: false,
//       defaultValue: "",
//     },
//         role: {
//         type: DataTypes.STRING(20),
//         allowNull: false,
//         defaultValue: "user",
//         values: ["admin", "Encargado", "Doctor"],
//     }
//   }, {
//     timestamps: true,
//   });

//    const Direccion = sequelize.define('Direccion', {
//     calle: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     sector: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//     },
//     numero: {
//       type: DataTypes.STRING(16),
//       allowNull: false,
//     },
//   });

//   const Ciudad = sequelize.define('Ciudad', {
//     nombre: {
//       type: DataTypes.STRING(80),
//       allowNull: false,
//     },
//   });

//   const Estado = sequelize.define('Estado', {
//     nombre: {
//       type: DataTypes.STRING(80),
//       allowNull: false,
//     },
//   });

//   const Telefono = sequelize.define('Telefono', {
//     codigo: {
//       type: DataTypes.STRING(11),
//       allowNull: false,
//     },
//     numero: {
//       type: DataTypes.STRING(16),
//       allowNull: false,
//     },
//   });


//   const Seguridad = sequelize.define('Seguridad', {
//     pregunta1: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     respuesta1: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     pregunta2: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     respuesta2: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     pregunta3: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     respuesta3: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//   });

//   const Consultas = sequelize.define('Consultas', {
//     salida: {
//       type: DataTypes.DATE,
//       required: true,
//       defaultValue: new Date(),
//     },
//     ingreso: {
//       type: DataTypes.DATE,
//       required: true,
//       defaultValue: new Date(),
//     },
//     diagnostico: {
//       type: DataTypes.STRING(500),
//       required: true,
//       defaultValue: "",
//     },
//     numeroControl: {
//       type: DataTypes.STRING(30),
//       required: true,
//       defaultValue: "",
//     },
//   });

//   const Paciente = sequelize.define('Pacientes', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING(200),
//       allowNull: false,
//     },
//     nacionalidad: {
//       type: DataTypes.STRING(80),
//       allowNull: false,
//     },
//     dni: {
//       type: DataTypes.STRING(20),
//       allowNull: false,
//     },
//     edad: {
//       type: DataTypes.STRING(10),
//       allowNull: false,
//     },
//     direccion: {
//       type: DataTypes.STRING(200),
//       allowNull: true,
//     },
//     sexo: {
//       type: DataTypes.STRING(15),
//       allowNull: false,
//     },
//     hash: {
//       type: DataTypes.STRING(50),
//       allowNull: false,
//       defaultValue: "",
//       index: true,
//     },
//     fatherID: {
//       type: DataTypes.STRING(20),
//       defaultValue: "",
//     },
//     role: {
//       type: DataTypes.STRING(20),
//       allowNull: false,
//       defaultValue: "Paciente",
//     }
//   }, {
//     timestamps: true,
//   });

//   const Especialidad = sequelize.define('Especialidad', {
//     id: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     roleEspecialidad: {
//         type: DataTypes.STRING(50), // Establece un límite de 20 caracteres para el rol de especialidad
//         allowNull: false,
//         defaultValue: "Enfermeria",
//         values: ["Enfermeria", "Oftalmologia", "Rayosx", "Hospitalizacion", "Emergencias", "Laboratorio", "Farmacia", "TerapiasIntensivas", "Recepcion"],
//     }
//   });

//   User.hasOne(Seguridad, { foreignKey: 'UserId' });
//   User.hasOne(Direccion, { foreignKey: 'UserId' });
//   User.hasOne(Telefono, { foreignKey: 'UserId' });
//   Paciente.hasOne(Seguridad, { foreignKey: 'PacienteId' });
//   Paciente.hasOne(Direccion, { foreignKey: 'PacienteId' });
//   Paciente.hasOne(Telefono, { foreignKey: 'PacienteId' });
//   Direccion.belongsTo(Ciudad, { foreignKey: 'CiudadId' });
//   Ciudad.belongsTo(Estado, { foreignKey: 'EstadoId' });
//   User.belongsTo(Especialidad, {foreignKey: 'AreaId'});
//   Paciente.hasMany(Consultas, { as: 'consultas' , foreignKey: 'ConsultaId' });
//   Consultas.belongsTo(Paciente, { as: 'paciente', foreignKey: 'PacienteId' });
// ( async () => {
//    await sequelize.sync({force: false});
//         //  await populateUsers();
//         //  await populateEspecialidad();
//         //  await populateEstados();
// })
// export { sequelize, User, Direccion, Ciudad, Paciente, Telefono, Estado, Especialidad, Consultas, Seguridad };
