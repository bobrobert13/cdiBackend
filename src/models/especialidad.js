const {DataTypes} = require('sequelize');

module.exports = (sequelize) => { 
  const Especialidad = sequelize.define('Especialidad', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    roleEspecialidad: {
        type: DataTypes.STRING(50), // Establece un límite de 20 caracteres para el rol de especialidad
        allowNull: false,
        defaultValue: "Enfermeria",
        values: ["Enfermeria", "Oftalmologia", "Rayosx", "Hospitalizacion", "Emergencias", "Laboratorio", "Farmacia", "TerapiasIntensivas", "Recepcion"],
    }
  });

};
