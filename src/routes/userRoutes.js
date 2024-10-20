const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.createUser);
router.put("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUser);

module.exports = router;
