const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Diagnostico = sequelize.define('Diagnostico', {
  id_diagnostico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fecha_diagnostico: {
    type: DataTypes.DATE,
    allowNull: false
  },

  condicion: {
    type: DataTypes.STRING(200),
    allowNull: false
  },

  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  gravedad: {
    type: DataTypes.ENUM('Leve', 'Moderada', 'Grave', 'Crítica'),
    allowNull: false,
    defaultValue: 'Leve'
  },
  fk_doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  tableName: 'diagnosticos',
  timestamps: true
});

return Diagnostico;
};
