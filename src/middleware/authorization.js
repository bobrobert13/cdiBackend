import { verifyToken } from "../utils/token-generator";
export async function getCredentials (authorization) {
  let credentials = {}
  if (authorization) {

    const token = await verifyToken(authorization);
    if (token.error) {
      if (token.error.message === 'jwt expired'){
        credentials = {
          error: 'token-expired'
        }
      }
      // invalid signature ocurre cuando el token no fue verificado con la misma secret con la que fue generado
      else if (token.error.message === 'invalid signature'){
        credentials = {
          error: 'invalid-token'
        }
      }
      else {
        credentials = {
          error: token.error.message
        }
      }
    }
    // si no hubo error al verificar el token
    else {
      credentials = {
        user:{
          id: token.data.data.id,
          role: token.data.data.role,
          dni: token.data.data.dni
        },
      };
    }
  }
  // si no hay authorization en header
  return credentials
}

export default async function authozation(req, res, next) {
  // authorization viene como una cadena vacia ''
  const autorization = req.headers.authorization
  req.credentials = await getCredentials(autorization)
  return next();
}
