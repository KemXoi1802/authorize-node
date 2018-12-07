const dbConnection = require('../config/db.config');
const Sequelize = require('sequelize');

const resource_role = require('./resource_role')(dbConnection, Sequelize);
const resources = require('./resources')(dbConnection, Sequelize);
const roles = require('./roles')(dbConnection, Sequelize);
const users = require('./users')(dbConnection, Sequelize);


users.hasOne(roles, {foreignKey: 'id', targetKey: 'role_id'});
roles.hasMany(resource_role, {foreignKey: 'id', targetKey: 'role_id'});


module.exports = {
    resource_role,
    resources,
    roles,
    users
};
