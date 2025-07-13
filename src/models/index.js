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
const Pin = require('./pin')(sequelize);
const Telefono = require('./telefono')(sequelize);
const Usuario = require('./usuario')(sequelize);
const Role = require('./role')(sequelize);


// Relación entre Persona y Doctor
Doctor.belongsTo(Persona, {
    foreignKey: 'fk_persona_id',
    onDelete: 'CASCADE',
    as: 'persona'
});

Persona.hasOne(Doctor, {
    foreignKey: 'fk_persona_id',
    onDelete: 'CASCADE',
    as: 'doctor'
});






// Relación entre Persona y Paciente
Paciente.belongsTo(Persona, {
    foreignKey: 'fk_persona_id',
    onDelete: 'CASCADE',
    as: 'persona'
});

Persona.hasOne(Paciente, {
    foreignKey: 'fk_persona_id',
    onDelete: 'CASCADE',
    as: 'paciente'
});

//relacion entre el PERSONA y el cdi
Persona.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    as: 'cdi'
});

CDI.hasMany(Persona, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    as: 'personas'
});

CDI.hasMany(Paciente, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    as: 'pacientes'
});

Paciente.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    as: 'cdi'
});

CDI.hasMany(Doctor, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'doctores'
});



// RELACION ENTRE EL DOCTOR Y EL USUARIO
Usuario.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctores'
});

Doctor.hasOne(Usuario, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'usuarios'
});

// RELACION CON EL USUARIO Y LA SEGURIDAD
Usuario.hasOne(Seguridad, {
    foreignKey: 'fk_usuario_id',
    onDelete: 'CASCADE',
    as: 'preguntas_seguridad'
});

Seguridad.belongsTo(Usuario, {
    foreignKey: 'fk_usuario_id',
    onDelete: 'CASCADE',
    as: 'usuarios'
});

Usuario.hasOne(Pin, {
    foreignKey: 'fk_usuario_id',
    onDelete: 'CASCADE',
    as: 'pin'
});

Pin.belongsTo(Usuario, {
    foreignKey: 'fk_usuario_id',
    onDelete: 'CASCADE',
    as: 'usuarios'
});



// RELACION ENTRE EL CDI Y EL USUARIO
Usuario.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    as: 'cdi'
});

CDI.hasOne(Usuario, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'usuarios'
});

// relacion entre la persona y la direccion
Persona.belongsTo(Direccion, {
    foreignKey: 'fk_direccion_id',
    onDelete: 'CASCADE',
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
    onDelete: 'CASCADE',
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
    onDelete: 'CASCADE',
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
    onUpdate: 'CASCADE',
    as: 'consultas'
});

//Doctor tiene pacientes
Doctor.hasMany(Paciente, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'pacientes'
});

Paciente.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id', 
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'doctor' 
});


CDI.hasMany(Consulta, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'consultas'
});

// paciente tiene registros de consultas
Paciente.hasMany(Consulta, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'consultas'
});

Consulta.belongsTo(Doctor, { foreignKey: 'fk_doctor_id', as: 'doctores' });
Consulta.belongsTo(CDI, { foreignKey: 'fk_cdi_id', as: 'cdis' });
Consulta.belongsTo(Paciente, { foreignKey: 'fk_paciente_id', as: 'pacientes' });


// Las consultas generan un historial medico

Consulta.hasOne(HistorialMedico, {
    foreignKey: 'fk_consulta_id',
    as: 'historial_medico'
});

// paciente se registra por una emergencia


Doctor.hasMany(Emergencia, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'emergencias'
});


Paciente.hasMany(Emergencia, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'emergencias'
});

CDI.hasMany(Emergencia, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'emergencias'
});

// emergencia tiene un paciente
Emergencia.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'pacientes'
});

// emergencia tiene un doctor
Emergencia.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctores'
});

Emergencia.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    as: 'cdis'
});

// emergencia tiene un historial medico
// Emergencia.hasOne(HistorialMedico, {
//     foreignKey: 'fk_emergencia_id',
//     as: 'historial_medico'
// });

//  doctor puede registrar una hospitalizacion
Doctor.hasMany(Hospitalizacion, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'hospitalizaciones'
});

// hospitalizacion tiene un paciente
Hospitalizacion.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'paciente'
});

// paciente tiene una hospitalizacion
Paciente.hasMany(Hospitalizacion, {
    foreignKey: 'fk_paciente_id',
    as: 'hospitalizaciones'
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
    onUpdate: 'CASCADE',
    as: 'diagnosticos'
});

// paciente tiene un diagnostico
Paciente.hasMany(Diagnostico, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'diagnosticos'
});

CDI.hasMany(Diagnostico, {
    foreignKey: 'fk_cdi_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'diagnosticos'
});

// diagnostico tiene un paciente
Diagnostico.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'pacientes'
});

// diagnostico tiene un doctor
Diagnostico.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctores'
});

Diagnostico.belongsTo(CDI, {
    foreignKey: 'fk_cdi_id',
    as: 'cdis'
});

// doctor puede registrar un examen del paciente
Doctor.hasMany(Examenes, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'examenes'
});

// paciente tiene un examen
Paciente.hasMany(Examenes, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'examenes'
});

// examen tiene un paciente
Examenes.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'pacientes'
});

// examen tiene un doctor
Examenes.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctores'
});

// doctor puede registrar un medicamento del paciente
Doctor.hasMany(Medicamento, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'medicamentos'
});

// paciente tiene un medicamento
Paciente.hasMany(Medicamento, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'medicamentos'
});

// medicamento tiene un paciente
Medicamento.belongsTo(Paciente, {
    foreignKey: 'fk_paciente_id',
    as: 'pacientes'
});

// medicamento tiene un doctor
Medicamento.belongsTo(Doctor, {
    foreignKey: 'fk_doctor_id',
    as: 'doctores'
});

// doctor puede registrar un tratamiento del paciente
Doctor.hasMany(Tratamiento, {
    foreignKey: 'fk_doctor_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'tratamientos'
});

// paciente tiene un tratamiento
Paciente.hasMany(Tratamiento, {
    foreignKey: 'fk_paciente_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'tratamientos'
});


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
    Pin,
}
