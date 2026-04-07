"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const types = `
  scalar Date

  type Image {
    name: String
    image: String
  }

  type File {
    filename: String
    mimetype: String
    encoding: String
    relativePath: String
  }

`;

const queries = `

`;

const mutations = `
  singleUpload(file: Upload!): File
`;

exports.types = types;
exports.queries = queries;
exports.mutations = mutations;