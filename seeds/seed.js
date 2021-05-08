const sequelize = require("../config/connection");
const { Transaction, User, Circle } = require("../models");

const transactionSeedData = require("./transactionSeedData.json");
const userSeedData = require("./userSeedData.json");
const circleSeedData = require("./circleSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const transactions = await Transaction.bulkCreate(transactionSeedData)
    const users = await User.bulkCreate(userSeedData);
    const circles = await Circle.bulkCreate(circleSeedData);
    process.exit(0);
}

seedDatabase();