const rbac = require('../config/rbac.config');
const models = require('../models');
const dbConnection = require('../config/db.config');


dbConnection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

models.users.findAll({
    where: {
        user_name: 'root',
        pwd: 'root'
    },
    include: {
        model: models.roles,
        alias: 'roles',
        required: true,
        include: {
            model: models.resource_role,
            alias: 'resource_role'
        },
    },

    raw: true,
}).then((user) => {
    console.log(user);
}).catch(err => {
    console.log("cannot query" + err);
});