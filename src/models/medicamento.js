const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Medicamento = sequelize.define('Medicamento', {
  id_medicamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },

  dosis: {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: 'Ejemplo: 500mg, 10ml, 1 tableta'
  },

  via_administracion: {
    type: DataTypes.ENUM(
      'Oral',
      'Intravenosa',
      'Intramuscular',
      'Subcutánea',
      'Tópica',
      'Oftálmica',
      'Ótica',
      'Nasal',
      'Rectal',
      'Vaginal',
      'Inhalatoria',
      'Sublingual',
      'Transdérmica'
    ),
    allowNull: false
  },

  frecuencia: {
    type: DataTypes.STRING(100),
    allowNull: false,
    comment: 'Ejemplo: Cada 8 horas, 2 veces al día, Una vez por semana'
  },

  duracion: {
    type: DataTypes.STRING(50),
    allowNull: true,
    comment: 'Ejemplo: 7 días, 2 semanas, Indefinido'
  },

  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  // Campos adicionales útiles
  principio_activo: {
    type: DataTypes.STRING(200),
    allowNull: true
  },

  laboratorio: {
    type: DataTypes.STRING(100),
    allowNull: true
  },

  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: true
  },

  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: true
  },

  medico_prescriptor: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  estado_tratamiento: {
    type: DataTypes.ENUM('Activo', 'Suspendido', 'Completado', 'Cancelado'),
    allowNull: false,
    defaultValue: 'Activo'
  },

  tipo_medicamento: {
    type: DataTypes.ENUM(
      'Antibiótico',
      'Analgésico',
      'Antiinflamatorio',
      'Antihipertensivo',
      'Antidiabético',
      'Anticoagulante',
      'Vitamina',
      'Suplemento',
      'Hormonal',
      'Psiquiátrico',
      'Cardiovascular',
      'Respiratorio',
      'Digestivo',
      'Otros'
    ),
    allowNull: true
  },

  contraindicaciones: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  efectos_secundarios: {
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
  tableName: 'medicamentos',
  timestamps: true,
});

return Medicamento;
};
