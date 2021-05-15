const router = require('express').Router();
const { User, Circle, Transaction } = require('../../models');

// id of circle
router.get('/:id',async (req, res) => {
    try {
      const transactionData = await Transaction.findByPk(req.params.id, {
        include: [{ model:User, attributes: { exclude: ['password','usercircle'] }}]
      });
      res.status(200).json(transactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });