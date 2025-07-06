const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  const Telefono = sequelize.define('Telefono', {
    id_telefono: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'telefonos'
  });
  
  return Telefono;

}
