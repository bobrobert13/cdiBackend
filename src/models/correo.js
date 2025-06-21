const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Correo = sequelize.define('Correo', {
  id_correo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  correo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {
  tableName: 'correos',
  timestamps: true
});

return Correo;
};
