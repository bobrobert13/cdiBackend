
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
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_culminacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    estado: {
      type: DataTypes.ENUM('Activo', 'Suspendido', 'Finalizado'),
      allowNull: false,
      defaultValue: 'Activo',
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
