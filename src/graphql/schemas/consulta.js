const types = `
type Consulta {
  id_consulta: ID!
  tipo_consulta: String
  motivo_consulta: String
  sintomas: String
  fecha_consulta: Date
  estado_consulta: String
notas_medicas: String
  createdAt: Date
  updatedAt: Date
  doctores: Doctor
  cdis: CDI
  paciente: Paciente
}

input ConsultaInput {
  tipo_consulta: String!
  motivo_consulta: String!
  sintomas: String
  estado_consulta: String
  fecha_consulta: Date
  notas_medicas: String
  fk_doctor_id: ID!
  fk_cdi_id: ID!
  fk_paciente_id: ID!
}

`
const queries = `
  consulta(id_consulta: ID!): Consulta
  consultas: [Consulta!]!
`

const mutations = `
 crearConsulta(input: ConsultaInput!): Consulta!
 actualizarConsulta(id_consulta: ID!, input: ConsultaInput!): Consulta!
 actualizarEstadoConsulta(id_consulta: ID!, estado_consulta: String!): Boolean!
`


export { types, queries, mutations }
