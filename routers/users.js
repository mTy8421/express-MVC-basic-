const express = require("express");
const router = express.Router();
const controller = require("../controllers/userControllers");

router.get("/", controller.index);
router
  .route("/query")
  .get(controller.showUsers)
  .post(controller.insertUser)
  .put(controller.updateUser)
  .delete(controller.deleteUser);
router.get("/query/:id", controller.showOneUser);

module.exports = router;
