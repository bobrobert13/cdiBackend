
const types = `
  type CDI {
    id_cdi: ID!
    numero_cdi: String!
    nombre: String!
    encargado: String
    cuadrante: String
    estado: String
    usuarios: Usuario
    doctores: [Doctor]
    pacientes: [Paciente]
  }

  type ConsultasPorMedico {
    nombresDoctores: [String]
    consultasMedico: [Int]
  }


  type Top10DiagnosticosMasComunes {
    condiciones: [String]
    totales: [Int]
  }

  type CantidadPacientesPorAreaDeTrabajo {
    areas: [String]
    totales: [Int]
  }

  type DistribucionPorGenero {
    masculino: Int
    femenino: Int
    masculinoNinos: Int
    masculinoAdolescentes: Int
    masculinoAdultos: Int
    masculinoMayores: Int
    femeninoNinas: Int
    femeninoAdolescentes: Int
    femeninoAdultas: Int
    femeninoMayores: Int
  }

  input CrearCDIInput {
    numero_cdi: String!
    nombre: String!
    encargado: String
    cuadrante: String
    usuarioInput: CrearUsuarioInput!
  }

  input ActualizarCDIInput {
    numero_cdi: String
    nombre: String
    encargado: String
    cuadrante: String
    usuarioInput: ActualizarUsuarioInput
  }
`;

const queries = `
  cdis: [CDI!]!
  cdiInfo(id_cdi: ID!): CDI
  todosCdis: [CDI!]!
  cdi(id_cdi: ID!): CDI
  doctoresCDI(id_cdi: ID!): [Doctor!]!
  pacientesCDI(id_cdi: ID!): [Paciente!]!
  cantidadPacienteTotales(id_cdi: ID!): Int!
  cantidadPacientesNuevos(id_cdi: ID!, periodo: String, mes: Int): [Int]
  cantidadPacientesPorAreaDeTrabajo(id_cdi: ID!): CantidadPacientesPorAreaDeTrabajo!
  distribucionPorGenero(id_cdi: ID!): DistribucionPorGenero!
  distribucionPorEdad(id_cdi: ID!): [Int]
  totalConsultasRealizadasPeriodo(id_cdi: ID!, periodo: String, mes: Int): [Int]
  totalConsultasRealizadasPorMedico(id_cdi: ID!, periodo: String, mes: Int): ConsultasPorMedico!
  top10DiagnosticosMasComunes(id_cdi: ID!, periodo: String, mes: Int): Top10DiagnosticosMasComunes!
`;

const mutations = `
  crearCDI(input: CrearCDIInput!): CDI!
  actualizarCDI(id_cdi: ID!, input: ActualizarCDIInput!): CDI!
  eliminarCDI(id_cdi: ID!): Boolean!
  inhabilitarCDI(id_cdi: ID!, estado: String!): Boolean!
`;

export { types, queries, mutations };

