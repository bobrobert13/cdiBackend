const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Telefono = sequelize.define('Telefono', {
  id_telefono: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  numero_telefono: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [7, 20]
    }
  }
}, {
  tableName: 'telefonos',
  timestamps: true
});

return Telefono;
};
