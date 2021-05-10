const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class UserCircle extends Model {}

UserCircle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        circle_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'usercircle'
    }
);

module.exports = UserCircle;