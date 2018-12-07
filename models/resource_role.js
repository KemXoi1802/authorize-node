/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('resource_role', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        resource_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'resources',
                key: 'id'
            }
        },
        role_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'roles',
                key: 'id'
            }
        },
        can_read: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        can_create: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        can_update: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        can_delete: {
            type: DataTypes.STRING(10),
            allowNull: true
        }
    }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'resource_role'
        });
};
