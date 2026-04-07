"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const ENV = process.env.NODE_ENV || "development";

exports.default = {
  env: ENV,
  server: {
    port: process.env.PORT || 4000
  },
  secret: "3sp3r0ofunc1o0n3e3st4c0s4",
  cors: {
    origins: ENV === "production" ? [""] : ["http://localhost:4000"],
    allowCredentials: "true",
    exposeHeaders: ["content-type", "content-length"],
    maxAge: 600,
    methods: ["POST, GET, OPTIONS"]
  },
  emails: {
    noReply: "cdi<no-reply@cdi.com>"
  },
  host: {
    development: "http://localhost:8080/#/",
    production: "https://cdi.com/#/"
  }
};