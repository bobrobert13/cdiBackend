const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Direccion = sequelize.define('Direccion', {
  id_direccion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  parroquia: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  codigo_postal: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  numero_casa: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  calle: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  punto_referencia: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  sector: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'direcciones',
  timestamps: true
});

return Direccion;
};
