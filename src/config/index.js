import dotenv from "dotenv";
dotenv.config();

const ENV = process.env.NODE_ENV || "development";

export default {
  env: ENV,
  server: {
    port: process.env.PORT || 4000,
  },
  db: {
    mongo: {
      development: "mongodb://127.0.0.1:27017/cdiDev",
      production: "mongodb://127.0.0.1:27017/cdiProd",
    },
    debug: true,
  },
  preorder: {
    expireTime: 30,
  },
  bcrypt: {
    saltRounds: 10,
  },
  secret: "3sp3r0ofunc1o0n3e3st4c0s4",
  wif: "5JEaSswQ4XMEdzEVnKBPGXByGDqvhEx7gDCHdPou7hJ5t1HDsjy",
  cors: {
    origins: ENV === "production" ? [""] : ["http://localhost:4000"],
    allowCredentials: "true",
    exposeHeaders: ["content-type", "content-length"],
    maxAge: 600,
    methods: ["POST, GET, OPTIONS"],
    headers: [
      "Accept",
      "Content-Type",
      "Authorization",
      "authentication",
      "origin",
    ],
  },
  aws: {
    config: {
      region: "",
      accessKeyId: "",
      secretAccessKey: "",
    },
  },
  emails: {
    noReply: "cdi<no-reply@cdi.com>",
  },
  host: {
    development: "http://localhost:8080/#/",
    production: "https://cdi.com/#/",
  },
};
