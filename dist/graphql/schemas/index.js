'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _apolloServerExpress = require('apollo-server-express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var types = '';
  let queries = ``;
  let mutations = ``;
  let subscriptions = ``;

  _fs2.default.readdirSync(__dirname).filter(function (file) {
    return file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js';
  }).forEach(function (file) {
    // importo todos los squemas 
    let schema = require(_path2.default.join(__dirname, file));
    types = types + schema.types + '\n';
    queries = queries + schema.queries + '\n';
    mutations = mutations + schema.mutations + '\n';
    // si hay subscriptions
    if (schema.subscriptions) {
      subscriptions = subscriptions + schema.subscriptions + '\n';
    }
  });

  let subsSchema;

  if (subscriptions !== ``) {
    subscriptions = `
      type Subscription {
        ${subscriptions}
      }
    `;
    console.log('--: hay subscriptions: ', subscriptions);
    subsSchema = `
      subscription: Subscription
    `;
  }

  return _apolloServerExpress.gql`
    ${types}

    type Query {
      ${queries}
    }

    type Mutation {
      ${mutations}
    }

    # ${subscriptions}

    schema {
      query: Query,
      mutation: Mutation,
      ${subsSchema || ''}
    }

  `;
}();