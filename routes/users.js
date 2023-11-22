const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.post("/create", userController.createUser);
router.put("/edit/:id", userController.updateUser);
router.get("/:id", userController.getUser);
router.get("/all-users/:id", userController.getAllUsers);

module.exports = router;
