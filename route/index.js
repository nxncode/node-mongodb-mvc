const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const accountsRoute = require("./accounts.route");
//localhost:5000/user/all
//localhost:5000/accounts/all


//http://localhost:5000/user/abcde
//http://localhost:5000/user/all

router.use("/user", userRoute);
//router.use("/accounts", accountsRoute);

module.exports = router;
