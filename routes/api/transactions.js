const router = require("express").Router();
const transactionsController = require("../../controllers/transactionsController");

// insert  "/api/transactions"
router.route("/")
  .get(transactionsController.findAll)
  .post(transactionsController.create);

// insert "/api/transactions/:id"
router
  .route("/:id")
  .get(transactionsController.findById)
  .put(transactionsController.update)
  .delete(transactionsController.remove);

module.exports = router;