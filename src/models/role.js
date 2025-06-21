const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const Role = sequelize.define('Role', {
  id_role: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
    enum: ['cdi', 'admin', 'doctor']
  }
}, {
  tableName: 'roles',
});
return Role;
};
