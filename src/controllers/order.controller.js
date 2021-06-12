const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const {
	orderService,
} = require("../services");


//======= Payment Verifiction =======
exports.paymentVerification = catchAsync(async (req, res) => {
	//let userId = req.decoded.sub;
	let body = req.body;
	const verificationStaus = await orderService.paymentVerification(body,req.query.order_id);
	res.status(httpStatus.CREATED).send({
		staus: 'OK',
		data: verificationStaus,
	});
});


//======= Order History =======
exports.orderHistory = catchAsync(async (req, res) => {
	//let userId = req.decoded.sub;
	let body = req.body;
	const orderList = await orderService.orderHistory();
	res.status(httpStatus.CREATED).send({
		staus: 'OK',
		data: orderList,
	});
});


//======= Place Order =======
exports.placeOrder = catchAsync(async (req, res) => {
	//let userId = req.decoded.sub;
	let body = req.body;
	const newOrder = await orderService.placeOrder(body);
	res.status(httpStatus.CREATED).send({
		staus: 'OK',
		data: newOrder,
	});
});