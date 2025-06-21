
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Seguridad = sequelize.define('Seguridad', {
    id_seguridad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pregunta1: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    respuesta1: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    pregunta2: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    respuesta2: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    pregunta3: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    respuesta3: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: 'seguridad',

  }

);

return Seguridad;
}