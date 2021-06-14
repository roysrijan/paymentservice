const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const {
    subscriptionService
} = require("../services")
//======= Create Subscription =======
exports.createSubscription = catchAsync(async (req, res) => {
	//let userId = req.decoded.sub;
	let body = req.body;
	const orderList = await subscriptionService.createSubscription(body);
	res.status(httpStatus.CREATED).send({
		staus: 'OK',
		data: orderList,
	});
});


//======= Create Subscription Plans=======
exports.createSubscriptionPlans = catchAsync(async (req, res) => {
	//let userId = req.decoded.sub;
	let body = req.body;
	const newOrder = await subscriptionService.createSubscriptionPlans(body);
	res.status(httpStatus.CREATED).send({
		staus: 'OK',
		data: newOrder,
	});
});