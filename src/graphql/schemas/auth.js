// schema
const types = `

  type Token {
    code: String
    expire: Int
  }

  type Response {
    code: Int
    status: String
    message: String
    token: Token
  }

  type Account {
    id: ID!
    email: String
    name: String
  }

  input Auth {
    email: String
    password: String
  }

  input SignUp {
    name: String
    email: String
    password: String
  }

`;
const queries = `
  Login(data: Auth): Response
`;

const mutations = `
  SignUp(data: SignUp): Response
  RecoveryPassword(email: String!): Response
  ResetPassword(token: String!, password: String!): Response
`;

export { types, queries, mutations };
