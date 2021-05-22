const router = require('express').Router();
const userRoutes = require('./userRoutes');
const circleRoutes = require('./circleRoutes');
const transactionRoutes = require('./transactionRoutes');
const userCircleRoutes = require('./userCircleRoutes');
const circleTransactions = require ('./circleTransactions');

router.use('/circletransactions', circleTransactions);
router.use('/users', userRoutes);
router.use('/circles', circleRoutes);
router.use('/transactions', transactionRoutes);
router.use('/usercircles', userCircleRoutes);


module.exports = router;