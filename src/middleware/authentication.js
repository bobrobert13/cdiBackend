import { getCredentials } from "../utils/get-credentials";

const scheme = (server, options) => {
  return {
    authenticate: async function (request, h) {
      const credentials = await getCredentials(request.headers.authorization);
      return h.authenticated(credentials);
    },
  };
};

const validate = (decoded, request) => {
  return { isValid: true };
};

exports.plugin = {
  name: "get-header-token",
  version: "1.0.0",
  register: async (server, options, next) => {
    server.auth.scheme("custom", scheme);
    server.auth.strategy("default", "custom");
    server.auth.default({
      strategy: "default",
      mode: "optional",
    });
  },
};
