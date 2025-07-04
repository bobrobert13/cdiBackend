import dotenv from "dotenv";
dotenv.config();

const ENV = process.env.NODE_ENV || "development";

export default {
  env: ENV,
  server: {
    port: process.env.PORT || 4000,
  },
  secret: "3sp3r0ofunc1o0n3e3st4c0s4",
  cors: {
    origins: ENV === "production" ? [""] : ["http://localhost:4000"],
    allowCredentials: "true",
    exposeHeaders: ["content-type", "content-length"],
    maxAge: 600,
    methods: ["POST, GET, OPTIONS"],
  },
  emails: {
    noReply: "cdi<no-reply@cdi.com>",
  },
  host: {
    development: "http://localhost:8080/#/",
    production: "https://cdi.com/#/",
  },
};
