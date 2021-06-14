const express = require("express");
const orderRoute = require("./order.route");
const subscriptionRoute = require("./subscription.route");

const router = express.Router();

router.use("/payment", orderRoute);
router.use("/subscription", subscriptionRoute);

module.exports = router;