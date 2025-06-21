
const types = `
  type CDI {
    id_cdi: ID!
    numero_cdi: String!
    nombre: String!
    encargado: String
    cuadrante: String
  }

  input CrearCDIInput {
    numero_cdi: String!
    nombre: String!
    encargado: String
    cuadrante: String
  }

  input ActualizarCDIInput {
    numero_cdi: String
    nombre: String
    encargado: String
    cuadrante: String
  }
`;

const queries = `
  cdis: [CDI!]!
  cdi(id_cdi: ID!): CDI
`;

const mutations = `
  crearCDI(input: CrearCDIInput!): CDI!
  actualizarCDI(id_cdi: ID!, input: ActualizarCDIInput!): CDI!
  eliminarCDI(id_cdi: ID!): Boolean!
`;

export { types, queries, mutations };

