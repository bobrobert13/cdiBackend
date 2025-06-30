import { persona } from './persona';

export const paciente = `
  id_paciente: ID!
  enfermedades_cronicas: String
  peso: Float
  vacunas: String
  discapacidad: String
  antecedentes_familiares: String
  tipo_de_sangre: String
  alergias: String
  persona: Persona!
  consultas: [Consulta]
  examenes: [ExamenesResultados]
  medicamentos: [Medicamento]
  tratamientos: [Tratamiento]
  diagnosticos: [Diagnostico]
  hospitalizaciones: [Hospitalizacion]
  emergencias: [Emergencia]
`;

const types = `
  type Paciente {
    ${paciente}
  }

  input CrearPacienteInput {
    enfermedades_cronicas: String
    peso: Float
    vacunas: String
    discapacidad: String
    antecedentes_familiares: String
    tipo_de_sangre: String
    alergias: String
    fk_doctor_id: ID!
    personaInput: CrearPersonaInput!
  }

  input ActualizarPacienteInput {
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
