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
            allowNull: false,
            references: {
                model: 'circle',
                key: 'id',
                unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
                unique: false
            }
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