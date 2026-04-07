"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.types = types;
exports.queries = queries;
exports.mutations = mutations;