import { persona } from './persona';

const types = `
  type Doctor {
    ${persona}
    id_doctor: ID!
    anos_experiencia: Int!
    numero_carnet: String!
    area_de_trabajo: String!
    horario: String
    fk_persona_id: Int
  }

input CrearDoctorInput {
  anos_experiencia: Int!
  numero_carnet: String!
  area_de_trabajo: String!
  horario: String
  personaInput: CrearPersonaInput!
}

input ActualizarDoctorInput {
  anos_experiencia: Int
  numero_carnet: String
  area_de_trabajo: String
  horario: String
  personaInput: ActualizarPersonaInput
}
`;

const queries = `
  doctores: [Doctor!]!
  doctor(id_doctor: ID!): Doctor
`;

const mutations = `
  crearDoctor(input: CrearDoctorInput!): Doctor!
  actualizarDoctor(id_doctor: ID!, input: ActualizarDoctorInput!): Doctor!
  eliminarDoctor(id_doctor: ID!): Boolean!
`;

export { types, queries, mutations };

