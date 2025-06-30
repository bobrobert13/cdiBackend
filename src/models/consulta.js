const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Consulta = sequelize.define('Consulta', {
  id_consulta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  tipo_consulta: { // "General", "Especialista", "Emergencia"
    type: DataTypes.STRING(100),
    allowNull: false
  },

  motivo_consulta: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  fecha_consulta: {
    type: DataTypes.DATE,
    allowNull: true,
  },

  estado_consulta: {
    type: DataTypes.ENUM('Activo', 'Suspendido', 'Completado'),
    defaultValue: 'Activo',
    allowNull: false,
  },

  sintomas: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  notas_medicas: {
    type: DataTypes.TEXT,
    allowNull: true
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
    references: {
      model: 'cdis',
      key: 'id_cdi'
    },
    allowNull: false
  },

  fk_paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pacientes',
      key: 'id_paciente'
    }
  }
}, {
  tableName: 'consultas',
  timestamps: true
});

return Consulta;
};
