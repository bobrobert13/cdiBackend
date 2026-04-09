const types = `

enum TipoDeExamen {
  SANGRE
  ORINA
  RADIOGRAFIA
  TOMOGRAFIA
  RESONANCIA_MAGNETICA
  ECOGRAFIA
  ELECTROCARDIOGRAMA
  ENDOSCOPIA
  BIOPSIA
  CULTIVO
  ANALISIS_GENETICO
  PRUEBA_DE_ESFUERZO
  MAMOGRAFIA
  DENSITOMETRIA
  OTROS
}

enum EstadoExamen {
  Pendiente
  Completado
  Cancelado
}


type ExamenesResultados {
  id_examenes: ID!
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  tipo_de_examen: String!
  descripcion: String
  resultados: String
  estado_examen: EstadoExamen!
  medico_solicitante: String
  laboratorio_centro: String
  valores_referencia: String
  observaciones: String
  doctores: Doctor
  createdAt: Date!
  updatedAt: Date!
}

input ExamenesResultadosInput {
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  tipo_de_examen: String
  descripcion: String
  resultados: String
  estado_examen: EstadoExamen
  medico_solicitante: String
  laboratorio_centro: String
  valores_referencia: String
  observaciones: String
}
`

const queries = `
  examenResultado(id_examenes: ID!): ExamenesResultados
  examenesResultados: [ExamenesResultados!]!
`

const mutations = `
crearExamenResultado(input: ExamenesResultadosInput!): ExamenesResultados!
actualizarEstadoExamen(id_examenes: ID!, estado_examen: EstadoExamen!): Boolean!
actualizarExamenResultado(id_examenes: ID!, input: ExamenesResultadosInput!): ExamenesResultados!
`

export { types, queries, mutations }
