const {sequelize} = require('../models/index.js');

const dataBaseConnect = async () => {
    try {
      // Probar conexión
      await sequelize.authenticate();
      console.log('✅ Conexión a BD establecida correctamente');
      
      await sequelize.sync({ 
        force: false, // true = elimina y recrea tablas
        alter: false   // true = modifica tablas existentes
      }).then(() => {})
      console.log('✅ Modelos sincronizados correctamente');
      
    } catch (error) {
      console.error('❌ Error conectando a BD:', error);
    }
    };

module.exports = dataBaseConnect;