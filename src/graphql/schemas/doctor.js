import { persona } from './persona';

const types = `
  type Doctor {
    id_doctor: ID!
    anos_experiencia: Int!
    numero_carnet: String!
    area_de_trabajo: String!
    horario: String
    fk_persona_id: ID
    fk_cdi_id: ID
    persona: Persona
    pacientes: [Paciente]
    usuarios: Usuario
  }

  input dataDoctorInput {
  anos_experiencia: Int!
  numero_carnet: String!
  area_de_trabajo: String!
  horario: String
  fk_cdi_id: ID!
  }

input CrearDoctorInput {
  doctorInput: dataDoctorInput!
  personaInput: CrearPersonaInput!
  usuarioInput: CrearUsuarioInput!
}

input ActualizarDoctorInput {
  doctorInput: dataDoctorInput!
  personaInput: ActualizarPersonaInput
  usuarioInput: ActualizarUsuarioInput
}
`;

const queries = `
  doctores: [Doctor!]
  doctor(id_doctor: ID!): Doctor
  doctorPacientes(id_doctor: ID!): Doctor
  buscarDoctorPacientes(id_doctor: ID!, id_paciente: ID!): Doctor
`;

const mutations = `
  crearDoctor(input: CrearDoctorInput!): Doctor!
  actualizarDoctor(id_doctor: ID!, input: ActualizarDoctorInput!): Doctor!
  eliminarDoctor(id_doctor: ID!): Boolean!
  inhabilitarDoctor(id_doctor: ID!, estado: String!): Boolean!
`;

export { types, queries, mutations };

