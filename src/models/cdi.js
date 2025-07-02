const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const CDI = sequelize.define('CDI', {
  id_cdi: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  numero_cdi: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 255]
    }
  },

  encargado: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      len: [2, 255]
    }
  },

  estado: {
    type: DataTypes.ENUM('activo', 'inactivo'),
    allowNull: false,
    defaultValue: 'activo'
  },

  cuadrante: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: {
      len: [1, 100]
    }
  }
}, {
  tableName: 'cdis',
  timestamps: true,
});

return CDI;
};
