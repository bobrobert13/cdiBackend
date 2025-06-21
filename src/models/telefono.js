const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const Telefono = sequelize.define('Telefono', {
    id_telefono: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  }, {
    tableName: 'telefonos'
  });
  
  return Telefono;

}
