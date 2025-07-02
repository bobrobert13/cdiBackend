
const types = `
  type CDI {
    id_cdi: ID!
    numero_cdi: String!
    nombre: String!
    encargado: String
    cuadrante: String
    estado: String
    usuarios: Usuario
  }

  input CrearCDIInput {
    numero_cdi: String!
    nombre: String!
    encargado: String
    cuadrante: String
    usuarioInput: CrearUsuarioInput!
  }

  input ActualizarCDIInput {
    numero_cdi: String
    nombre: String
    encargado: String
    cuadrante: String
    usuarioInput: ActualizarUsuarioInput
  }
`;

const queries = ` 
  cdis: [CDI!]!
  cdiInfo(id_cdi: ID!): CDI
  todosCdis: [CDI!]!
  cdi(id_cdi: ID!): CDI
  doctoresCDI(id_cdi: ID!): [Doctor!]!
  pacientesCDI(id_cdi: ID!): [Paciente!]!
`;

const mutations = `
  crearCDI(input: CrearCDIInput!): CDI!
  actualizarCDI(id_cdi: ID!, input: ActualizarCDIInput!): CDI!
  eliminarCDI(id_cdi: ID!): Boolean!
  inhabilitarCDI(id_cdi: ID!, estado: String!): Boolean!
`;

export { types, queries, mutations };

