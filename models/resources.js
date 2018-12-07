/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('resources', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        resource_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
            freezeTableName: true,
            timestamps: false,
            tableName: 'resources'
        });
};
