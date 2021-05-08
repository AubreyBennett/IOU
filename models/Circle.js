const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Circle extends Model {}

Circle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        circle_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'circle'
    }
)

module.exports = Circle;