/* jshint indent: 2 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        role_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'roles'
        });
    return Role;
};
