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
    allowNull: false,
    defaultValue: 'usuario'
  },

  nombre_usuario: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
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

  foto_de_perfil: {
    type: DataTypes.STRING(500),
    allowNull: true
  },

  codigo_qr: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fk_role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'roles',
      key: 'id_role'
    }
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
  fk_seguridad_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'seguridad',
      key: 'id_seguridad'
    }
  },
}, {
  tableName: 'usuarios',
  timestamps: true
});


return Usuario;
};


