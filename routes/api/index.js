const router = require("express").Router();
const userRoutes = require("./users");
const transactionsRoutes = require("./transactions");
const circleRoutes = require("./circles");

//replace placeHolder with correct model routes
router.use("/users", userRoutes);
router.use("/transactions", transactionsRoutes);
router.use("/circles",circleRoutes );

module.exports = router;
