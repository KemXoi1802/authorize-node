const Sequelize = require('sequelize');

const sequelize = new Sequelize('Profile', 'root', 'etc12345', {
    host: '10.0.23.185',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;