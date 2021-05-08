const router = require("express").Router();
const userRoutes = require("./users");
const transactionsRoutes = require("./transactions");
const groupRoutes = require("./groups");

//replace placeHolder with correct model routes
router.use("/users", userRoutes);
router.use("/transactions", transactionsRoutes);
router.use("/groups", groupRoutes);

module.exports = router;
