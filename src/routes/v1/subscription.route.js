const express = require("express");
const router = express.Router();
const controller = require("../../controllers/subscription.controller");

//======= Create Subscription =======
router.post(
	"/create-subscription",
	controller.createSubscription
);

//======= Create Subscription Plans=======
router.post(
	"/create-subscription-plans",
	controller.createSubscriptionPlans
);

module.exports = router;