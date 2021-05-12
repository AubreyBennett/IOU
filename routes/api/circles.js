const router = require("express").Router();
const circleController = require("../../controllers/circleController");

// insert witH "/api/circle"
router.route("/")
  .get(circleController.findAll)
  .post(circleController.create);

// insert "/api/circle/:id"
router
  .route("/:id")
  .get(circleController.findById)
  .put(circleController.update)
  .delete(circleController.remove);

module.exports = router;