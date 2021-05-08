const router = require("express").Router();
const userController = require("../../controllers/userController");

// insert witH "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// insert "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
