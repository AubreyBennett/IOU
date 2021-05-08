const router = require("express").Router();
const groupController = require("../../controllers/groupController");

// insert witH "/api/group"
router.route("/")
  .get(groupController.findAll)
  .post(groupController.create);

// insert "/api/group/:id"
router
  .route("/:id")
  .get(groupController.findById)
  .put(groupController.update)
  .delete(groupController.remove);

module.exports = router;