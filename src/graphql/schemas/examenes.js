const types = `

enum TipoDeExamen {
  Sangre
  Orina
  Radiografia
  Tomografia
  ResonanciaMagnetica
  Ecografia
  Electrocardiograma
  Endoscopia
  Biopsia
  Cultivo
  AnalisisGenetico
  PruebaDeEsfuerzo
  Mamografia
  Densitometria
  Otros
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
  tipo_de_examen: TipoDeExamen!
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
  tipo_de_examen: TipoDeExamen
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
