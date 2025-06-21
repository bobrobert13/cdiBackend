const { sequelize } = require('../src/models');

const migrate = async () => {
try {
  console.log('🔄-- INICIANDO MIGRACIOON --');
  
  await sequelize.sync({ force: true });

  console.log('✅-- MIGRACION COMPLETADA --');
  
  process.exit(0);
} catch (error) {
  console.error('❌ Error en migración:', error);
  process.exit(1);
}
};

migrate();