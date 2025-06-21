const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const HistorialMedico = sequelize.define('HistorialMedico', {
  id_historial: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  estado_anterior: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  estado_posterior: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  usuario_responsable: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  notas_adicionales: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  categoria_evento: {
    type: DataTypes.ENUM(
      'Consulta',
      'Emergencia',
      'Cirugía',
      'Tratamiento',
      'Diagnóstico',
      'Seguimiento',
      'Hospitalización',
      'Alta médica'
    ),
    allowNull: false
  },
  fecha_evento: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  fk_consulta_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_emergencia_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  tableName: 'historial_medico',
  timestamps: true,
});

return HistorialMedico;
};
