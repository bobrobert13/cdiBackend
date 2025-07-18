const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  rol: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },

  nombre_usuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  contrasena: {
    type: DataTypes.STRING(300),
    allowNull: false
  },

  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },

  estado: {
    type: DataTypes.ENUM('activo', 'inactivo', 'suspendido'),
    allowNull: false,
    defaultValue: 'activo'
  },

  fk_doctor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'doctores',
      key: 'id_doctor'
    }
  },
  fk_cdi_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cdis',
      key: 'id_cdi'
    }
  },
  id_pregunta: {
    type: DataTypes.INTEGER,
    references: {
      model: 'preguntas_seguridad',
      key: 'id_pregunta'
    }
  },
    id_pin: {
    type: DataTypes.INTEGER,
    references: {
      model: 'pins_recuperacion',
      key: 'id_pin'
    }
  },

}, {
  tableName: 'usuarios',
  timestamps: true
});


return Usuario;
};


