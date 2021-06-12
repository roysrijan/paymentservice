const express = require("express");
const router = express.Router();
const controller = require("../../controllers/order.controller");

//======= Payment Verification =======
router.get(
	"/payment-verification",
	controller.paymentVerification
);

//======= Order History =======
router.get(
	"/order-history",
	controller.orderHistory
);

//======= Place Order =======
router.post(
	"/place-order",
	controller.placeOrder
);

module.exports = router;
