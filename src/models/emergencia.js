const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Emergencia = sequelize.define('Emergencia', {
  id_emergencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  tableName: 'emergencias',
  timestamps: true
});

return Emergencia;
};
