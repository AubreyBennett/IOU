const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require("./LoginSignup")
// const homeRoutes = require('./homeRoutes.js');
// const dashboardRoutes = require('./dashBoard.js');

router.use('/api', apiRoutes);
// router.use("/login", loginRoutes);
// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);


module.exports = router;