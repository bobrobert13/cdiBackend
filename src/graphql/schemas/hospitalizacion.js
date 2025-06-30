const types = `
type Hospitalizacion {
  id_hospitalizacion: ID!
  fecha_ingreso: Date!
  fecha_egreso: Date
  motivo_de_hospitalizacion: String!
  unidad_hospitalaria: String!
  estado: String!
  notas_medicas: String
  createdAt: Date!
  updatedAt: Date!
  fk_paciente_id: ID!
  fk_doctor_id: ID!
  fk_cdi_id: ID!
}

input HospitalizacionInput {
  fecha_ingreso: Date
  fecha_egreso: Date
  motivo_de_hospitalizacion: String!
  unidad_hospitalaria: String!
  estado: String
  notas_medicas: String
  fk_paciente_id: ID!
  fk_doctor_id: ID!
  fk_cdi_id: ID!
}


`
const queries = `
 hospitalizacion(id_hospitalizacion: ID!): Hospitalizacion
hospitalizaciones: [Hospitalizacion!]!
`

const mutations = `
crearHospitalizacion(input: HospitalizacionInput!): Hospitalizacion!
actualizarEstadoHospitalizacion(id_hospitalizacion: ID!,  : String!): Boolean!
`

export { types, queries, mutations }
