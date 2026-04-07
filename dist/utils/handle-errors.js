'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mongoError = mongoError;
exports.extractMessage = extractMessage;

var _apolloServerExpress = require('apollo-server-express');

var _regularExpressions = require('./regular-expressions');

function mongoError(error, res, next) {
  console.log('mongoError: ', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new _apolloServerExpress.UserInputError('duplicate-index'));
  } else {
    next(); // The `update()` call will still error out.
  }
}

function extractMessage(error) {
  const match = error.message.match(_regularExpressions.regexError);
  console.log('match extractMessage: ', match);
  const duplicate = error.message.indexOf('E11000 duplicate');
  console.log('duplicate extractMessage: ', duplicate);
  let message = error.message;
  if (match) message = match[0];else if (duplicate > -1) message = 'duplicate-index-field';
  return message;
}