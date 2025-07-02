const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Persona = sequelize.define('Persona', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nombre1: {
    type: DataTypes.STRING(500),
    allowNull: false
  },

  sexo: {
    type: DataTypes.STRING(10),
    allowNull: true
  },

  edad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  estado_civil: {
    type: DataTypes.STRING(20),
    allowNull: true
  },

  ocupacion: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  cedula_identidad: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fk_cdi_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cdis',
      key: 'id_cdi'
    }
  },
  fk_direccion_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'direcciones',
      key: 'id_direccion'
    }
  },
  fk_telefono_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'telefonos',
      key: 'id_telefono'
    }
  },
  fk_correo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'correos',
      key: 'id_correo'
    }
  },
}, {
  tableName: 'personas',
  timestamps: true
});

return Persona;
};
