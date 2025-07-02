
const types = `
  type Usuario {
    id_usuario: ID!
    rol: String!
    nombre_usuario: String!
    fecha_creacion: String!
    estado: EstadoUsuario!
    contrasena: String
    cdi: CDI
    fk_doctor_id: ID
    fk_cdi_id: ID
    fk_seguridad_id: ID
  }

  enum EstadoUsuario {
    activo
    inactivo
    suspendido
  }

  input CrearUsuarioInput {
    rol: String
    nombre_usuario: String!
    contrasena: String
    estado: EstadoUsuario
    fk_doctor_id: ID
    fk_cdi_id: ID
    fk_seguridad_id: ID
  }

  input ActualizarUsuarioInput {
    rol: String
    nombre_usuario: String
    contrasena: String
    estado: EstadoUsuario
    fk_seguridad_id: ID
  }


  type PreguntaSeguridad {
  id_pregunta: ID!
  pregunta: String!
}

input ValidarPreguntaInput {
  nombre_usuario: String!
  respuestas: [RespuestaPreguntaInput!]!
  nueva_contrasena: String!
}

input RespuestaPreguntaInput {
  id_pregunta: ID!
  respuesta: String!
}

input ValidarPinInput {
  nombre_usuario: String!
  pin: String!
  nueva_contrasena: String!
}

type MetodoRecuperacion {
  tienePin: Boolean!
  preguntas: [PreguntaSeguridad!]!
}

input CrearPreguntaSeguridadInput {
  nombre_usuario: String!
  pregunta: String!
  respuesta: String!
}

input CrearPinInput {
  nombre_usuario: String!
  pin: String!
}
`;

const queries = `
  usuarios: [Usuario!]!
  usuario(id_usuario: ID!): Usuario
  metodosRecuperacion(nombre_usuario: String!): MetodoRecuperacion!
`;

const mutations = `
  crearUsuario(input: CrearUsuarioInput!): Usuario!
  actualizarUsuario(id_usuario: ID!, input: ActualizarUsuarioInput!): Usuario!
  eliminarUsuario(id_usuario: ID!): Boolean!
  restaurarClavePorPregunta(input: ValidarPreguntaInput!): Boolean!
  restaurarClavePorPin(input: ValidarPinInput!): Boolean!
  crearPreguntaSeguridad(input: CrearPreguntaSeguridadInput!): Boolean!
  crearPinRecuperacion(input: CrearPinInput!): Boolean!
`;

export { types, queries, mutations };
