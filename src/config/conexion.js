const {sequelize} = require('../models/index.js');


const dataBaseConnect = async () => {
    try {
      // Probar conexión
      await sequelize.authenticate();
      console.log('✅ Conexión a BD establecida correctamente');
      
      // Sincronizar modelos (crear tablas)
      await sequelize.sync({ 
        force: false, // true = elimina y recrea tablas
        alter: true   // true = modifica tablas existentes
      });
      console.log('✅ Modelos sincronizados correctamente');
      
    } catch (error) {
      console.error('❌ Error conectando a BD:', error);
    }
    };

module.exports = dataBaseConnect;