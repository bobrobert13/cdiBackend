
const types = `
  type AuthPayload {
    token: String!
    usuario: Usuario
    mensaje: String
  }

  input LoginInput {
    nombre_usuario: String!
    contrasena: String!
  }

  input RegistroInput {
    rol: String!
    nombre_usuario: String!
    contrasena: String!
    estado: EstadoUsuario
    fk_doctor_id: Int
    fk_seguridad_id: Int
  }
`;
  
const queries = `
  verificarToken(token: String!): Usuario
`;

const mutations = `
  login(input: LoginInput!): AuthPayload!
  registrarUsuario(input: RegistroInput!): Usuario!
`;

export { types, queries, mutations };
