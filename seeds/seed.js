const sequelize = require("../config/connection");
const { Transaction, User } = require("../models");

const transactionSeedData = require("./transactionSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const transactions = await Transaction.bulkCreate(transactionSeedData)
    const users = await User.bulkCreate(userSeedData);
    process.exit(0);
}

seedDatabase();