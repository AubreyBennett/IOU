const sequelize = require("../config/connection");
const { Transaction, User, Circle, UserCircle } = require("../models");

const transactionSeedData = require("./transactionSeedData.json");
const userSeedData = require("./userSeedData.json");
const circleSeedData = require("./circleSeedData.json");
const userCircleSeedData = require("./userCircleSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userSeedData);
    const circles = await Circle.bulkCreate(circleSeedData);
    const userCircles = await UserCircle.bulkCreate(userCircleSeedData);
    const transactions = await Transaction.bulkCreate(transactionSeedData)

    process.exit(0);
}

seedDatabase();