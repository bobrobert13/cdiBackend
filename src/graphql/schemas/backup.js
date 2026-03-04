
const types = `
  type Backup {
    filename: String!
    size: String!
    createdAt: String!
  }
`;

const queries = `
  listarRespaldos: [Backup!]!
`;

const mutations = `
  crearRespaldo: Backup!
  restaurarRespaldo(filename: String!): Boolean!
  eliminarRespaldo(filename: String!): Boolean!
`;

export { types, queries, mutations };
