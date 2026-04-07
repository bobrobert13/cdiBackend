'use strict';

const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const PreguntaSeguridad = sequelize.define('PreguntaSeguridad', {
    id_pregunta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pregunta: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    respuesta: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fk_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    tableName: 'preguntas_seguridad',
    timestamps: true
  });

  return PreguntaSeguridad;
};