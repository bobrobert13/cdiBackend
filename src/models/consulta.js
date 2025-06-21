const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Consulta = sequelize.define('Consulta', {
  id_consulta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fecha_hora: {
    type: DataTypes.DATE,
    allowNull: false
  },

  tipo_consulta: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  motivo_consulta: {
    type: DataTypes.TEXT,
    allowNull: false
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
    allowNull: false
  },
  fk_paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'consultas',
  timestamps: true
});

return Consulta;
};
