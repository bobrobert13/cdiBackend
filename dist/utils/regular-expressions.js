'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const regexDNI = exports.regexDNI = [/^[VEJ]{1}\d{8,10}$/, 'dni-invalid-format'];
// /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const regexEmail = exports.regexEmail = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'format-email-invalid'];

const regexError = exports.regexError = /\w+\-[\w\-]+\-\w+/g;

const matchDNI = exports.matchDNI = [/^[VEJ]{1}\d{6,10}$/, 'dni-invalid-format'];

const matchEmail = exports.matchEmail = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid-email-format'];

const matchMemo = exports.matchMemo = /\w{12}/;

const matchMemoHex = exports.matchMemoHex = /^[\dabcdef]{12}$/;