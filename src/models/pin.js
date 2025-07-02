const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PinRecuperacion = sequelize.define('PinRecuperacion', {
    id_pin: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pin: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fk_usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    tableName: 'pins_recuperacion',
    timestamps: true
  });

  PinRecuperacion.associate = (models) => {
    PinRecuperacion.belongsTo(models.Usuario, { foreignKey: 'fk_usuario_id' });
  };

  return PinRecuperacion;
};
