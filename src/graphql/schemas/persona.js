export const persona = `
    nombre1: String!
    nombre2: String
    apellido1: String
    apellido2: String
    nacionalidad: String
    sexo: String
    edad: Int
    estado_civil: String
    ocupacion: String
    cedula_identidad: String!
    telefono: Telefono
    correo: Correo
    direccion: Direccion
    fk_cdi_id: Int
    fk_direccion_id: Int
    fk_telefono_id: Int
    fk_correo_id: Int 
`


const types = `

type Telefono {
    id_telefono: ID!
    codigo: String!
    numero: String!
  }

  type Correo {
    id_correo: ID!
    correo: String!
  }

  type Direccion {
    id_direccion: ID!
    parroquia: String!
    codigo_postal: String
    numero_casa: String
    calle: String!
    punto_referencia: String
    sector: String
  }

  type Persona {
    id_persona: ID!
    ${persona}
  }

  input CrearTelefonoInput {
  codigo: String!
  numero: String!
}

input CrearCorreoInput {
  correo: String!
}

input CrearDireccionInput {
  parroquia: String!
  codigo_postal: String
  numero_casa: String
  calle: String!
  punto_referencia: String
  sector: String
}

input ActualizarTelefonoInput {
  codigo: String
  numero: String
}

input ActualizarCorreoInput {
  correo: String
}

input ActualizarDireccionInput {
  parroquia: String
  codigo_postal: String
  numero_casa: String
  calle: String
  punto_referencia: String
  sector: String
}

  input CrearPersonaInput {
    nombre1: String!
    nombre2: String
    apellido1: String
    apellido2: String
    sexo: String
    edad: Int
    nacionalidad: String
    estado_civil: String
    ocupacion: String
    cedula_identidad: String!
  fk_cdi_id: Int  
  fk_direccion_id: Int
  fk_telefono_id: Int
  fk_correo_id: Int
  telefonoInput: CrearTelefonoInput
  correoInput: CrearCorreoInput
  direccionInput: CrearDireccionInput
  }

  input ActualizarPersonaInput {
    nombre1: String
    nombre2: String
    apellido1: String
    apellido2: String
    sexo: String
    edad: Int
    estado_civil: String
    nacionalidad: String
    ocupacion: String
    cedula_identidad: String
      telefonoInput: CrearTelefonoInput
  correoInput: CrearCorreoInput
  direccionInput: CrearDireccionInput
    fk_cdi_id: Int
    fk_direccion_id: Int
    fk_telefono_id: Int
    fk_correo_id: Int
  }
`;

const queries = `
  personas: [Persona!]!
  persona(id_persona: ID!): Persona
`;

const mutations = `
  crearPersona(input: CrearPersonaInput!): Persona!
  actualizarPersona(id_persona: ID!, input: ActualizarPersonaInput!): Persona!
  eliminarPersona(id_persona: ID!): Boolean!
`;

export { types, queries, mutations };

