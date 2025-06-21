
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Tratamiento = sequelize.define('Tratamiento', {
    id_tratamiento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo_de_tratamiento: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true
      }
    },
    fecha_culminacion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    detalles: {
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
    },
  }, {
    tableName: 'tratamientos',
    timestamps: true,
  });

  return Tratamiento;
};
