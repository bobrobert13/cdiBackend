import { ForbiddenError } from "apollo-server-express";

function handleError(exception) {
  return Promise.reject(exception);
}

function tokenHelper (type, roles, resolver, options) {
  const user = options.context.credentials.user;
  const error = options.context.credentials.error
  const info = options.info
  
  try {
    if (!Array.isArray(roles)) throw "role-invalid-type";
    // if (roles.length == 0) throw "roles debe contener al menos un rol:'user', 'admin'";
    if (roles.length > 0) {
      // si se requiere token y este expiro, 
      if (error && error == 'token-expired') throw "not-authorized-token-expired"
      // si se requiere token y este expiro, 
      if (error && error == 'invalid-token') throw "not-authorized-invalid-token"
      // si hubo un error en la verificación del token
      else if (error){
        console.error('error, authorize: ', error);
        throw "not-authorized-invalid-token";
      }
      // si no esta logueado
      else if (!user) throw "not-authenticated";
      // si no esta autorizado
      else if (roles.indexOf(user.role) == -1) throw "not-authorized";
    }

    console.log('resolver success');
    switch (type) {
      case 'resolver':
        return resolver(options.obj, options.body, options.context, options.info)
        break
      case 'subscription':
        return resolver(options.payload, options.variables, options.context, options.info)
        break
    }
  }
  catch (error) {
    if (error === 'role-invalid-type'){
      console.error(`error authorize resolver ${info.fieldName}: roles debe ser un array: [] para acceso libre o  ['user', 'admin'] para acceso restringido`);
      return handleError(new Error('internal-error'))
    }
    else if (error === 'not-authenticated'){
      console.error(`error authorize resolver ${info.fieldName}: Debe estar logueado para acceder a este recurso`);
      return handleError(new ForbiddenError(error));
      
    }
    else if (error === 'not-authorized-token-expired'){
      console.error(`error authorize resolver ${info.fieldName}: Debe estar logueado para acceder a este recurso`);
      return handleError(new ForbiddenError(error));
      
    }
    else if (error === 'not-authorized-invalid-token'){
      console.error(`error authorize resolver ${info.fieldName}: Token invalido, no se puede acceder a este recurso`);
      return handleError(new ForbiddenError(error));
    }

    else if (error === 'not-authorized'){
      console.error(`error authorize resolver ${info.fieldName}: No tiene permiso para este recurso`);
      return handleError(new ForbiddenError(error));
    }
    
  }
}

export function authorize (roles, resolver) {
  return function (obj, body, context, info) {
    if(body.password) console.log('body: ', body.email);
    else console.log('body: ', body);
    const options = {
      obj,
      body,
      context,
      info
    }
    return tokenHelper('resolver', roles, resolver, options)
  }
}
