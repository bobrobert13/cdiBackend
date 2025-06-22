import { persona } from './persona';

export const paciente = `
  id_paciente: ID!
  fecha_registro: String!
  enfermedades_cronicas: String
  peso: Float
  vacunas: String
  discapacidad: String
  antecedentes_familiares: String
  tipo_de_sangre: String
  alergias: String
  persona: Persona!
`;

const types = `
  type Paciente {
    ${paciente}
  }

  input CrearPacienteInput {
    fecha_registro: String!
    enfermedades_cronicas: String
    peso: Float
    vacunas: String
    discapacidad: String
    antecedentes_familiares: String
    tipo_de_sangre: String
    alergias: String
    personaInput: CrearPersonaInput!
  }

  input ActualizarPacienteInput {
    fecha_registro: String
    enfermedades_cronicas: String
    peso: Float
    vacunas: String
    discapacidad: String
    antecedentes_familiares: String
    tipo_de_sangre: String
    alergias: String
    personaInput: ActualizarPersonaInput      
  }
`;

const queries = `
  pacientes: [Paciente!]!
  paciente(id_paciente: ID!): Paciente
`;

const mutations = `
  crearPaciente(input: CrearPacienteInput!): Paciente!
  actualizarPaciente(id_paciente: ID!, input: ActualizarPacienteInput!): Paciente!
  eliminarPaciente(id_paciente: ID!): Boolean!
  Paciente: Paciente
`;

export { types, queries, mutations };
