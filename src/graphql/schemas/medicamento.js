const types = `
enum ViaAdministracion {
  Oral
  Intravenosa
  Intramuscular
  Subcutanea
  Topica
  Oftalmica
  Otica
  Nasal
  Rectal
  Vaginal
  Inhalatoria
  Sublingual
  Transdermica
}

enum EstadoTratamientoMedicamento {
  Activo
  Suspendido
  Completado
}

enum TipoMedicamento {
  Antibiotico
  Analgesico
  Antiinflamatorio
  Antihipertensivo
  Antidiabetico
  Anticoagulante
  Vitamina
  Suplemento
  Hormonal
  Psiquiatrico
  Cardiovascular
  Respiratorio
  Digestivo
  Otros
}

type Medicamento {
  id_medicamento: ID!
  nombre: String!
  dosis: String!
  via_administracion: ViaAdministracion!
  frecuencia: String!
  duracion: String
  observaciones: String
  principio_activo: String
  laboratorio: String
  fecha_inicio: Date
  fecha_fin: Date
  medico_prescriptor: String
  estado_tratamiento: EstadoTratamientoMedicamento!
  tipo_medicamento: TipoMedicamento
  contraindicaciones: String
  efectos_secundarios: String
  doctores: Doctor
  fk_doctor_id: ID!
  fk_paciente_id: ID!
  createdAt: Date!
  updatedAt: Date!
}

input MedicamentoInput {
  nombre: String!
  dosis: String!
  via_administracion: ViaAdministracion!
  frecuencia: String!
  duracion: String
  observaciones: String
  principio_activo: String
  laboratorio: String
  fecha_inicio: Date
  fecha_fin: Date
  medico_prescriptor: String
  estado_tratamiento: EstadoTratamientoMedicamento!
  tipo_medicamento: TipoMedicamento
  contraindicaciones: String
  efectos_secundarios: String
  fk_doctor_id: ID!
  fk_paciente_id: ID!
}

`

const queries = `
  medicamento(id_medicamento: ID!): Medicamento
  medicamentos: [Medicamento!]!
  medicamentosPorPaciente(fk_paciente_id: ID!): [Medicamento!]!
  medicamentosPorDoctor(fk_doctor_id: ID!): [Medicamento!]!
`

const mutations = `
  crearMedicamento(input: MedicamentoInput!): Medicamento!
  actualizarMedicamento(id_medicamento: ID!, input: MedicamentoInput!): Medicamento!
  actualizarEstadoMedicamento(id_medicamento: ID!, estado_tratamiento: EstadoTratamientoMedicamento!): Boolean!
`

export { types, queries, mutations }
