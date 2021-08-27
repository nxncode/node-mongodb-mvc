const express = require("express");

const router = express.Router();
const userController = require("../controller/user.controller");
//localhost:5000/user/all   ==> GET Request
//http://localhost:5000/user/abcde
//http://localhost:5000/user/all

router.get("/all", userController.getAllUser);

module.exports = router;
