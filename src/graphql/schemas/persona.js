export const persona = `
    nombre1: String!
    nombre2: String
    apellido1: String!
    apellido2: String
    sexo: String!
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

  input CrearPersonaInput {
    nombre1: String!
    nombre2: String
    apellido1: String!
    apellido2: String
    sexo: String!
    edad: Int
    estado_civil: String
    ocupacion: String
    cedula_identidad: String!
    fk_cdi_id: Int
    fk_direccion_id: Int
    fk_telefono_id: Int
    fk_correo_id: Int
  }

  input ActualizarPersonaInput {
    nombre1: String
    nombre2: String
    apellido1: String
    apellido2: String
    sexo: String
    edad: Int
    estado_civil: String
    ocupacion: String
    cedula_identidad: String
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

