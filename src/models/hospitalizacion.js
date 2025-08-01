const { DataTypes, ENUM } = require('sequelize');

module.exports = (sequelize) => {
const Hospitalizacion = sequelize.define('Hospitalizacion', {
  id_hospitalizacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fecha_ingreso: {
    type: DataTypes.DATE,
    allowNull: false
  },

  fecha_egreso: {
    type: DataTypes.DATE,
    allowNull: true
  },

  motivo_de_hospitalizacion: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  unidad_hospitalaria: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  estado: {
    type: DataTypes.ENUM('Activo', 'Finalizado'),
    allowNull: false,
    defaultValue: 'Activo'
  },

  notas_medicas: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  
  fk_paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pacientes',
      key: 'id_paciente'
    }
  },

  fk_doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'doctores',
      key: 'id_doctor'
    }
  },

  fk_cdi_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cdis',
      key: 'id_cdi'
    }
  }
}, {
  tableName: 'hospitalizacion',
  timestamps: true
});

return Hospitalizacion;
};
