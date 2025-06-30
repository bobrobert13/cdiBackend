const types = `

enum TipoDeTratamiento {
  Farmacologico
  Quirurgico
  Fisioterapia
  Psicologico
  Nutricional
  Radioterapia
  Quimioterapia
  Otro
}

enum EstadoTratamiento {
  Activo
  Suspendido
  Finalizado
}


type Tratamiento {
  id_tratamiento: ID!
  tipo_de_tratamiento: TipoDeTratamiento!
  fecha_inicio: Date!
  fecha_culminacion: Date
  estado: EstadoTratamiento!
  detalles: String
  doctor: Doctor
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  createdAt: Date!
  updatedAt: Date!
}

input TratamientoInput {
  tipo_de_tratamiento: TipoDeTratamiento!
  fecha_inicio: Date!
  fecha_culminacion: Date
  estado: EstadoTratamiento!
  detalles: String
  fk_doctor_id: ID!
  fk_paciente_id: ID!
}
`

const queries = `
  tratamiento(id_tratamiento: ID!): Tratamiento
  tratamientos: [Tratamiento!]!
`

const mutations = `
crearTratamiento(input: TratamientoInput!): Tratamiento!
`

export { types, queries, mutations }
