const consultas =  `
id: ID
diagnostico: String
numeroControl: String
salida: Date
ingreso: Date 
createdAt: Date 
`;

const seguridad =  `
id: ID
pregunta1: String
respuesta1: String
pregunta2: String
respuesta2: String
pregunta3: String
respuesta3: String
UserId: ID
createdAt: Date
`;

const ciudad = `
nombre: String
EstadoId: ID
`


const direccion =  `
id: ID
calle: String
numero: String
sector: String
UserId: ID
CiudadId: ID
ingreso: Date 
createdAt: Date 
`;
// schema

const types = `
  input UserInput {
    id: ID
    profileImage: Upload
    name: String
    email: String
    password: String
    role: String
    AreaId: ID
    nacionalidad: String
    codigoArea: String
    dni: String
    telefono: String
    direccion: direccionInput
    ciudad: ciudadInput
    createdAt: Date
  }
  input PacienteOldInput {
    id: ID
    name: String
    role: String
    nacionalidad: String
    codigoArea: String
    dni: String
    telefono: String
    direccion: direccionInput
    ciudad: ciudadInput
    edad: String
    sexo: String
    diagnostico: String
    consultas: [ConsultaInput]
    fatherID: String
    createdAt: Date
  }
  type UserResponse {
    code: Int
    status: String
    message: String
    token: Token
    user: User
  }

  type PacienteOldResponse {
    code: Int
    status: String
    message: String
    token: Token
    PacienteOld: PacienteOld
  }

  type User {
    id: ID
    name: String
    email: String
    profileImage: String
    role: String
    roleEspecialidad: String
    nacionalidad: String
    dni: String
    telefono: String
    direccion: direccion
    createdAt: Date
  }

  type PacienteOld {
    id: ID
    name: String
    role: String
    nacionalidad: String
    dni: String
    telefono: String
    direccion: direccion
    edad: String
    sexo: String
    consultas: [Consulta]
    diagnostico: String
    fatherID: String
    createdAt: Date
  }

  input FilterInput{
    roleEspecialidad: ID
  }

  type direccion{
    ${direccion}
  }

  type ciudad{
    ${ciudad}
  }

  input ciudadInput{
    ${ciudad}
  }

  input direccionInput{
    ${direccion}
  }

  type Consulta {
    ${consultas} 
  }

  input seguridadInput {
    ${seguridad}
  }

  type seguridad {
    ${seguridad}
  }

  input respuestasSeguridadInput {
    respuesta1: String
    respuesta2: String
    respuesta3: String
    UserId: ID
  }

  input ConsultaInput {
    ${consultas}  
  }

`;

const queries = `
allPacienteOlds: [PacienteOld]
allEncargados: [User]
allDoctores(data: FilterInput): [User]
MyWorkers: [User]
MisPacienteOlds: [PacienteOld]
BuscarUser(data: UserInput): [User]
BuscarDoctor(data: UserInput): [User]
BuscarPacienteOld(data: PacienteOldInput): [PacienteOld]
oneUser: User
getSeguridad(UserId: ID): seguridad
recuperarContrasena(data: respuestasSeguridadInput ): Boolean
checkUserRecovery(email: String): seguridad
`;

const mutations = `
AddPacienteOld(data: PacienteOldInput): PacienteOld
AddConsulta(id: ID, data: ConsultaInput): PacienteOld
UpdateConsulta(id: ID, idConsulta: ID, data: ConsultaInput): PacienteOld
AddUser(data: UserInput): User
DelUser(id: ID): Response
DelDoctor(id: ID): Response
DelEncargado(id: ID): Response
UpdateUserInfo(id: ID, data: UserInput): User
setPreguntas(data: seguridadInput): Boolean
updatePreguntas(data: seguridadInput): Boolean
setNewPassword(UserId: ID, password: String): Boolean
`;

export { types, queries, mutations };
