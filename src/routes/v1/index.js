const express = require("express");
const orderRoute = require("./order.route");

const router = express.Router();

router.use("/payment", orderRoute);

module.exports = router;