
const types = `
  type Usuario {
    id_usuario: ID!
    rol: String!
    nombre_usuario: String!
    fecha_creacion: String!
    estado: EstadoUsuario!
    contrasena: String
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
`;

const queries = `
  usuarios: [Usuario!]!
  usuario(id_usuario: ID!): Usuario
`;

const mutations = `
  crearUsuario(input: CrearUsuarioInput!): Usuario!
  actualizarUsuario(id_usuario: ID!, input: ActualizarUsuarioInput!): Usuario!
  eliminarUsuario(id_usuario: ID!): Boolean!
`;

export { types, queries, mutations };
