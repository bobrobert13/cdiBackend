const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Doctor = sequelize.define('Doctor', {
  id_doctor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  anos_experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },

  numero_carnet: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  area_de_trabajo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  horario: {
    type: DataTypes.STRING(200),
    allowNull: true
  },
  fk_persona_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'personas',
      key: 'id_persona'
    }
  } ,
  fk_cdi_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cdis',
      key: 'id_cdi'
    }
  }
}, {
  tableName: 'doctores',
  timestamps: true
});

return Doctor;
};

