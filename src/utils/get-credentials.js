import { verifyToken } from "./token-generator";

export async function getCredentials(token) {
  let credentials;
  if (!token) return { credentials: {} };
  console.log("hay token: ", token);
  token = await verifyToken(token);
  if (token.error) {
    if (token.error.message === "jwt expired") {
      credentials = {
        error: "token-expired",
      };
    }
    // invalid signature ocurre cuando el token no fue verificado con la misma secret con la que fue generado
    else if (token.error.message === "invalid signature") {
      credentials = {
        error: "invalid-token",
      };
    } else {
      credentials = {
        error: token.error.message,
      };
    }
    return { credentials };
  }
  // si no hubo error al verificar el token
  else {
    credentials = {
      user: {
        id: token.data.id,
        username: token.data.username,
        role: token.data.role,
      },
    };
    return { credentials };
  }
}
