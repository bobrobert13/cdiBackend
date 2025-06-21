"use strinct";

import jwt from "jsonwebtoken";
import moment from "moment";
import config from "../config";

// token para la sesion de un usuario
const sessionToken = (user, expire) => {
  const token = {};
  expire = moment().add(expire, "seconds").unix();
  
  token.payload = {
    id: user.id,
    _id: user._id,
    username: user.username,
    role:user.role,
    dni: user.dni,
    iat: moment().unix(),
    exp: expire,
  };    

  token.code = jwt.sign(token.payload, config.secret);
  token.expire = expire;
  return { code: token.code, expire: token.expire };
};

// genera token para recuperar contraseña y validar cuenta de correo
//
const emailToken = (user) =>{
  const token = {}
    token.payload = {
      id: user._id,
      action: 'verify-account',
      iat: moment().unix(),
      exp: moment().add(24, "hours").unix(),
    };                  
    token.code = jwt.sign(token.payload, config.secret);
    return { code: token.code, expire: token.expire };;
}

// valida y decodifica un token
const verifyToken = async (token) =>{
  return await jwt.verify(token, config.secret, function(err, decoded) {
    if (err) {
      if(err.message === 'jwt expired')
        console.error(`
        token decoded error:
        -- message: ${err.message}
        -- expiro: ${err.expiredAt}
        `);
      else
        console.error('---- unknow token decoded error ----')
    }
    return {error: err, data: decoded}
  })
}

const createToken = (options) => {
  const token = {}
  const times = {
    iat: moment().unix(),
    exp: moment().add(365, "days").unix(),
  }
  token.payload = Object.assign(options, times);
  token.code = jwt.sign({data :token.payload}, config.secret);
  return token;
}
const resetPasswordToken = (options) => {
  const token = {};
  const times = {
    iat: moment().unix(),
    exp: moment().add(1, "hours").unix(),
  };
  token.payload = Object.assign(options, times);
  token.code = jwt.sign(token.payload, config.secret);
  return token;
};

export { sessionToken, emailToken, verifyToken, createToken, resetPasswordToken };
