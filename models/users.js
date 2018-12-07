/* jshint indent: 2 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        role_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'roles',
                key: 'id'
            }
        },
        user_name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        pwd: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'users'
        });
    return User;
};
