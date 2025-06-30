const types = `
type Diagnostico {
  id_diagnostico: ID!
  fecha_diagnostico: String
  condicion: String!
  descripcion: String
  gravedad: String!
  doctores: Doctor
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  fk_cdi_id: ID!
  createdAt: Date
  updatedAt: Date
}

input DiagnosticoInput {
  fecha_diagnostico: Date
  condicion: String!
  descripcion: String
  gravedad: String
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  fk_cdi_id: ID!
}

`
const queries = `
  diagnostico(id_diagnostico: ID!): Diagnostico
  diagnosticos: [Diagnostico!]!
`

const mutations = `
 crearDiagnostico(input: DiagnosticoInput!): Diagnostico!
`

export { types, queries, mutations }
