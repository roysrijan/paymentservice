const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
	{
		orderId : {
			type: String,
			required: true
		},
		orderAmount : {
			type: String,
			required: true
		},
		orderCurrency : {
			type: String,
			required: true
		},
		orderNote : {
			type: String,
		},
		customerName : {
			type: String,
		},
		customerEmail : {
			type: String,
			required: true
		},
		customerPhone : {
			type: String,
		},
		returnUrl : {
			type: String,
		},
		notifyUrl : {
			type: String,
		},
		orderStatus: {
			type: String,
		},
		txStatus: {
			type: String,
		},
		txTime: {
			type: String,
		},
		txMsg: {
			type: String,
		},
		referenceId: {
			type: String,
		},
		paymentMode: {
			type: String,
		},
    }
);

const Messages = mongoose.model("order", OrderSchema);

module.exports = Messages;