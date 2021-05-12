const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Transaction
      .findAll()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))

    // .find(req.query)
    // .sort({ date: -1 })
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Transaction
      .findByPk(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Transaction
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Transaction
      .update({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Transaction
      .findByPk({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};