const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const ExamenesResultados = sequelize.define('ExamenesResultados', {
    id_examenes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    fecha_examen: {
      type: DataTypes.DATE,
      allowNull: false
    },

    fk_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fk_paciente_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    tipo_de_examen: {
      type: DataTypes.ENUM(
        'Sangre',
        'Orina',
        'Radiografía',
        'Tomografía',
        'Resonancia Magnética',
        'Ecografía',
        'Electrocardiograma',
        'Endoscopia',
        'Biopsia',
        'Cultivo',
        'Análisis Genético',
        'Prueba de Esfuerzo',
        'Mamografía',
        'Densitometría',
        'Otros'
      ),
      allowNull: false
    },

    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    resultados: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    archivo_adjunto: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: 'URL o ruta del archivo adjunto (imágenes, PDFs, etc.)'
    },

    estado_examen: {
      type: DataTypes.ENUM('Pendiente', 'En Proceso', 'Completado', 'Cancelado'),
      allowNull: false,
      defaultValue: 'Pendiente'
    },

    medico_solicitante: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    laboratorio_centro: {
      type: DataTypes.STRING(150),
      allowNull: true
    },

    valores_referencia: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Valores normales de referencia para el examen'
    },

    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'examenes_resultados',
    timestamps: true,
  });

  return ExamenesResultados;
};
