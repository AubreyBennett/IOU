const router = require('express').Router();
const { Router } = require('express');
const { User, Circle, Transaction } = require('../../models');

// id of circle
router.get('/:id',async (req, res) => {
    try {
      const transactionData = await Transaction.findAll();
      res.status(200).json(transactionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = Router;