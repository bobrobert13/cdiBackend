const types = `

enum TipoImagen {
  RX
  TAC
  RMN
  ECOGRAFIA
  MAMOGRAFIA
  PET
  ULTRASONIDO
  OTRO
}

enum EstadoImagen {
  Pendiente
  Procesada
  Validada
  Rechazada
}

type ImagenMedica {
  id_imagenes_medicas: ID!
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  tipo_imagen: TipoImagen!
  equipo_utilizado: String
  estado: EstadoImagen!
  region_anatomica: String!
  interpretacion_medica: String
  url_archivo: String
  createdAt: Date!
  updatedAt: Date!
}

input ImagenMedicaInput {
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  tipo_imagen: TipoImagen!
  equipo_utilizado: String
  estado: EstadoImagen
  region_anatomica: String!
  interpretacion_medica: String
  archivo: Upload!
}

`

const queries = `
  imagenMedica(id_imagenes_medicas: ID!): ImagenMedica
  imagenesMedicas: [ImagenMedica!]!
  imagenesMedicasPorPaciente(fk_paciente_id: ID!): [ImagenMedica!]!
`

const mutations = `
crearImagenMedica(input: ImagenMedicaInput!): ImagenMedica!
`

export { types, queries, mutations }
