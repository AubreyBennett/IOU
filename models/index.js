const Transaction = require('./Transaction');
const User = require("./User");
const Circle = require("./Circle");
const UserCircle = require("./UserCircle");

User.belongsToMany(Circle, {
    through: {
        model: UserCircle,
        unique: false
    }
})
Circle.belongsToMany(User, {
    through: {
        model: UserCircle,
        unique: false
    } 
})


module.exports = { Transaction, User, Circle, UserCircle }