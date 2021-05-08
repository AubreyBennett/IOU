const sequelize = require("../config/connection");
const { Transaction } = require("../models");

const transactionSeedData = require("./transactionSeedData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const transactions = await Transaction.bulkCreate(transactionSeedData)

    process.exit(0);
}

seedDatabase();