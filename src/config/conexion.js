const {sequelize} = require('../models/index.js');
const {Usuario, CDI, Persona, Doctor
 } = require('../models/index.js');


async function crearUsuariosDePrueba({ Usuario, CDI, Persona }) {
  // Primero, crea un CDI de prueba (si no existe)
  const cdi = await CDI.create({
    numero_cdi: "CDI-000",
    nombre: "CDI Central",
    encargado: "Dr. Robert",
    cuadrante: "A1"
  });

  // Crea personas de prueba (si quieres asociar usuarios con personas)
  const personaAdmin = await Persona.create({
    nombre1: "Robert",
    apellido1: "Caraballo",
    sexo: "M",
    cedula_identidad: "V12345678",
    fk_cdi_id: cdi.id_cdi
  });

  const personaDoctor = await Persona.create({
    nombre1: "Carlos",
    apellido1: "Gómez",
    sexo: "M",
    cedula_identidad: "V87654321",
    fk_cdi_id: cdi.id_cdi
  });

  const personaDoctor2 = await Persona.create({
    nombre1: "Enrique",
    apellido1: "Abache",
    sexo: "M",
    cedula_identidad: "V87214321",
    fk_cdi_id: cdi.id_cdi
  });

  // Crea usuarios de prueba con diferentes roles
  const doctor = await Doctor.create({
    anos_experiencia: 5,
    numero_carnet: "DOC-001",
    area_de_trabajo: "Pediatría",
    horario: "Lunes a Viernes 8:00-16:00",
    fk_persona_id: personaDoctor.id_persona
  });

  const doctor2 = await Doctor.create({
    anos_experiencia: 2,
    numero_carnet: "DOC-002",
    area_de_trabajo: "Quirofano",
    horario: "Lunes a Viernes 8:00-16:00",
    fk_persona_id: personaDoctor2.id_persona
  });

  await Usuario.create({
    rol: "doctor",
    nombre_usuario: "DrCarlos",
    estado: "activo",
    fk_cdi_id: cdi.id_cdi,
    fk_doctor_id: doctor.id_doctor,
    contrasena: "123456"
  });

  await Usuario.create({
    rol: "doctor",
    nombre_usuario: "DrEnrique",
    estado: "activo",
    fk_cdi_id: cdi.id_cdi,
    fk_doctor_id: doctor2.id_doctor,
    contrasena: "123456",
  });

  await Usuario.create({
    rol: "cdi",
    nombre_usuario: "cdi-admin",
    estado: "activo",
    fk_cdi_id: cdi.id_cdi,
    contrasena: "123456"
  });

  await Usuario.create({
    rol: "admin",
    nombre_usuario: "superadmin",
    estado: "activo",
    contrasena: "123456"
  });

  console.log("Usuarios de prueba creados correctamente.");
}



const dataBaseConnect = async () => {
    try {
      // Probar conexión
      await sequelize.authenticate();
      console.log('✅ Conexión a BD establecida correctamente');
      
      // Sincronizar modelos (crear tablas)
      await sequelize.sync({ 
        force: false, // true = elimina y recrea tablas
        alter: true   // true = modifica tablas existentes
      }).then(() => {
        // crearUsuariosDePrueba({ Usuario, CDI, Persona })
      })
      console.log('✅ Modelos sincronizados correctamente');
      
    } catch (error) {
      console.error('❌ Error conectando a BD:', error);
    }
    };

module.exports = dataBaseConnect;