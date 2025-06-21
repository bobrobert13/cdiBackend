const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
dialect: 'mysql',
host: 'localhost',
port:  3306,
database: 'cdi_database',
username: 'root',
password: '123456',
pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
});

module.exports = sequelize;