const sequelize = require('../config/database');

const Paciente = require('./paciente')(sequelize);
const Doctor = require('./doctor')(sequelize);
const Consulta = require('./consulta')(sequelize);
const HistorialMedico = require('./historial')(sequelize);
const Hospitalizacion = require('./hospitalizacion')(sequelize);
const Emergencia = require('./emergencia')(sequelize);
const Tratamiento = require('./tratamiento')(sequelize);


const CDI = require('./cdi')(sequelize);
const Correo = require('./correo')(sequelize);
const Diagnostico = require('./diagnostico')(sequelize);
const Direccion = require('./direccion')(sequelize);
// const Especialidad = require('./especialidad')(sequelize);
const Estado = require('./estado')(sequelize);
const Examenes = require('./examenes')(sequelize);
const ImagenesMedicas = require('./imagenes_medicas')(sequelize);
const Medicamento = require('./medicamento')(sequelize);
const Persona = require('./persona')(sequelize);
const Seguridad = require('./seguridad')(sequelize);
const Telefono = require('./telefono')(sequelize);
const Usuario = require('./usuario')(sequelize);
const Role = require('./role')(sequelize);


// Relación entre Persona y Doctor
Doctor.belongsTo(Persona, {
    foreignKey: 'fk_persona_id',
    as: 'persona'
});

Persona.hasOne(Doctor, {
    foreignKey: 'fk_persona_id',
    as: 'doctor'
});

// Relación entre Persona y Paciente
Paciente.belongsTo(Persona, {
    foreignKey: 'fk_persona_id',
    as: 'persona'
});

Persona.hasOne(Paciente, {
    foreignKey: 'fk_persona_id',
    as: 'paciente'
});

//relacion entre el PERSONA y el cdi
Persona.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    as: 'cdi'
});

CDI.hasMany(Persona, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    as: 'personas'
});

//relacion entre el usuario y el rol
Usuario.belongsTo(Role, {
    foreignKey: 'fk_role_id',
    as: 'role'
});

Role.hasMany(Usuario, {
    foreignKey: 'fk_role_id',
    onDelete: 'CASCADE',
    as: 'usuarios',
});


// RELACION ENTRE EL DOCTOR Y EL USUARIO
Usuario.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctores'
});

Doctor.hasMany(Usuario, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'usuarios'
});

// RELACION CON EL USUARIO Y LA SEGURIDAD
Usuario.belongsTo(Seguridad, {
    foreignKey: 'fk_seguridad_id',
    as: 'seguridad'
});

Seguridad.hasMany(Usuario, {
    foreignKey: 'fk_seguridad_id',
    onDelete: 'CASCADE',
    as: 'usuarios'
});


// RELACION ENTRE EL CDI Y EL USUARIO
Usuario.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    as: 'cdi'
});

CDI.hasMany(Usuario, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    as: 'usuarios'
});

// relacion entre la persona y la direccion
Persona.belongsTo(Direccion, {
    foreignKey: 'fk_direccion_id',
    as: 'direccion'
});

Direccion.hasMany(Persona, {
    foreignKey: 'fk_direccion_id',
    onDelete: 'CASCADE',
    as: 'personas'
});

// relacion entre la persona y el telefono
Persona.belongsTo(Telefono, {
    foreignKey: 'fk_telefono_id',
    as: 'telefono'
});

Telefono.hasMany(Persona, {
    foreignKey: 'fk_telefono_id',
    onDelete: 'CASCADE',
    as: 'personas'
});

// relacion entre la persona y el correo
Persona.belongsTo(Correo, {
    foreignKey: 'fk_correo_id',
    as: 'correo'
});

Correo.hasMany(Persona, {
    foreignKey: 'fk_correo_id',
    onDelete: 'CASCADE',
    as: 'personas'
});

// doctor registra consultas de pacientes
Doctor.hasMany(Consulta, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'consultas'
});

// paciente tiene registros de consultas
Paciente.hasMany(Consulta, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    as: 'consultas'
});

// Las consultas generan un historial medico

Consulta.hasOne(HistorialMedico, {
    foreignKey: 'fk_consulta_id',
    as: 'historial_medico'
});

// paciente se registra por una emergencia
Paciente.hasOne(Emergencia, {
    foreignKey: 'fk_paciente_id',
    as: 'emergencias'
});

// emergencia tiene un paciente
Emergencia.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// emergencia tiene un doctor
Emergencia.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});

// emergencia tiene un historial medico
Emergencia.hasOne(HistorialMedico, {
    foreignKey: 'fk_emergencia_id',
    as: 'historial_medico'
});

//  doctor puede registrar una hospitalizacion
Doctor.hasMany(Hospitalizacion, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'hospitalizaciones'
});

// hospitalizacion tiene un paciente
Hospitalizacion.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// hospitalizacion tiene un doctor
Hospitalizacion.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});

// doctor puede registrar un diagnostico del paciente
Doctor.hasMany(Diagnostico, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'diagnosticos'
});

// paciente tiene un diagnostico
Paciente.hasMany(Diagnostico, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    as: 'diagnosticos'
});

// diagnostico tiene un paciente
Diagnostico.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// diagnostico tiene un doctor
Diagnostico.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});

// doctor puede registrar un examen del paciente
Doctor.hasMany(Examenes, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'examenes'
});

// paciente tiene un examen
Paciente.hasMany(Examenes, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    as: 'examenes'
});

// examen tiene un paciente
Examenes.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// examen tiene un doctor
Examenes.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});

// doctor puede registrar un medicamento del paciente
Doctor.hasMany(Medicamento, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'medicamentos'
});

// paciente tiene un medicamento
Paciente.hasMany(Medicamento, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    as: 'medicamentos'
});

// medicamento tiene un paciente
Medicamento.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// medicamento tiene un doctor
Medicamento.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});

// doctor puede registrar un tratamiento del paciente
Doctor.hasMany(Tratamiento, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'tratamientos'
});

// paciente tiene un tratamiento
Paciente.hasMany(Tratamiento, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    as: 'tratamientos'
});

// tratamiento tiene un paciente
Tratamiento.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// tratamiento tiene un doctor
Tratamiento.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});

// doctor puede registrar una imagen medica del paciente
Doctor.hasMany(ImagenesMedicas, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    as: 'imagenes_medicas'
});

// paciente tiene una imagen medica
Paciente.hasMany(ImagenesMedicas, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    as: 'imagenes_medicas'
});

// imagen medica tiene un paciente
ImagenesMedicas.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// imagen medica tiene un doctor
ImagenesMedicas.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctor'
});







module.exports = {
    sequelize,
    CDI,
    Correo,
    Direccion,
    Telefono,
    Persona,
    Usuario,
    Role,
    Paciente,
    Doctor,
    Consulta,
    HistorialMedico,
    Hospitalizacion,
    Emergencia,
    Diagnostico,
    Tratamiento,
    Estado,
    Examenes,
    ImagenesMedicas,
    Medicamento,
    Seguridad,
}