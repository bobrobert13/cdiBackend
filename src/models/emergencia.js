const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Emergencia = sequelize.define('Emergencia', {
  id_emergencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false
  },

  motivo_emergencia: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  diagnostico_provisional: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  estado_paciente: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  procesamiento_realizado: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  tiempo_atencion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Tiempo en minutos'
  },

  notas_de_atencion: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  destino: {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: 'Destino del paciente después de la emergencia'
  }
}, {
  tableName: 'emergencia',
  timestamps: true
});

return Emergencia;
};
