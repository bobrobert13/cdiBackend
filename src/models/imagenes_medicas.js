const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const ImagenesMedicas = sequelize.define('ImagenesMedicas', {
  id_imagenes_medicas: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  fk_doctor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_paciente_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  tipo_imagen: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  fecha_captura: {
    type: DataTypes.DATE,
    allowNull: false
  },

  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  formato: {
    type: DataTypes.STRING(20),
    allowNull: false
  },

  resolucion: {
    type: DataTypes.STRING(50),
    allowNull: true
  },

  tamaño: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },

  equipo_utilizado: {
    type: DataTypes.STRING(200),
    allowNull: true
  },

  estado: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'Pendiente'
  },

  region_anatomica: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  interpretacion_medica: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'imagenes_medicas',
  timestamps: true
});

return ImagenesMedicas;
};
