'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const { sequelize } = require('../models/index.js');

const dataBaseConnect = (() => {
  var _ref = _asyncToGenerator(function* () {
    try {
      // Probar conexión
      yield sequelize.authenticate();
      console.log('✅ Conexión a BD establecida correctamente');

      yield sequelize.sync({
        force: false, // true = elimina y recrea tablas
        alter: true // true = modifica tablas existentes
      }).then(function () {});
      console.log('✅ Modelos sincronizados correctamente');
    } catch (error) {
      console.error('❌ Error conectando a BD:', error);
    }
  });

  return function dataBaseConnect() {
    return _ref.apply(this, arguments);
  };
})();

module.exports = dataBaseConnect;