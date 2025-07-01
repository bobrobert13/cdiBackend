const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Paciente = sequelize.define('Paciente', {
  id_paciente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  enfermedades_cronicas: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  peso: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true
  },

  vacunas: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  discapacidad: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  antecedentes_familiares: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  tipo_de_sangre: {
    type: DataTypes.STRING(10),
    allowNull: true
  },

  alergias: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  fk_persona_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'personas',
      key: 'id_persona'
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
  }
}, {
  tableName: 'pacientes',
  timestamps: true
});

return Paciente;
};
