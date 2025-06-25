const types = `
type Emergencia {
  id_emergencia: ID!
  motivo_emergencia: String!
  diagnostico_provisional: String
  estado_paciente: String!
  procesamiento_realizado: String
  tiempo_atencion: Int
  notas_de_atencion: String
  destino: String
  createdAt: Date!
  updatedAt: Date!
  paciente: Paciente
  doctor: Doctor
  cdi: CDI
}

input EmergenciaInput {
  motivo_emergencia: String!
  diagnostico_provisional: String
  estado_paciente: String!
  procesamiento_realizado: String
  tiempo_atencion: Int
  notas_de_atencion: String
  destino: String
  fk_paciente_id: ID!
  fk_doctor_id: ID!
  fk_cdi_id: ID!
}

`
const queries = `
  emergencia(id_emergencia: ID!): Emergencia
  emergencias: [Emergencia!]!
`

const mutations = `
crearEmergencia(input: EmergenciaInput!): Emergencia!
`

export { types, queries, mutations }
