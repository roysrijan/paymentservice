const { Orders } = require("../models");
const crypto = require('crypto');
const axios = require("axios");
var FormData = require('form-data');

//======= Payment Verification =======
exports.paymentVerification = async (body, orderId) => {
    const notify = body;
    // Updates Live Notification
    let formData = new FormData();
    formData.append('appId',process.env.appId);
    formData.append('secretKey',process.env.secretKey);
    formData.append('orderId',orderId);
    const rawResponse = await axios.post( 'https://test.cashfree.com/api/v1/order/info/status',
    formData.getBuffer(),
    {  headers: {'Content-Type': 'multipart/form-data', 
        ...formData.getHeaders()}
    }
  )
    if(rawResponse.data.status == 'OK')
      order = await Orders.findOneAndUpdate({orderId: orderId},rawResponse.data);
    return rawResponse.data;
};

//======= Order History =======
exports.orderHistory = async () => {
  const notify = null;
  // Updates Live Notification
  let orders = await Orders.find({orderStatus: "PAID"})
  return orders;
};

//======= Place Order =======
exports.placeOrder = async (body) => {
  const notify = body;
  const orderId = 'order_'+crypto.randomBytes(12).toString('base64');
  // Updates Live Notification
  var postData = {
		"appId" : process.env.appId,
		"orderId" : orderId,
		"orderAmount" : body.orderAmount,
		"orderCurrency" : body.orderCurrency,
		"orderNote" : body.orderNote,
		'customerName' : body.customerName,
		"customerEmail" : body.customerEmail,
		"customerPhone" : body.customerPhone,
		"returnUrl" : body.returnUrl+'/'+orderId,
		"notifyUrl" : body.notifyUrl+'/'+orderId
	};
  mode = "TEST",
	secretKey = "7f609176d6268f8eef306aeda0e1c8d808a500bb",
  /* signatureData = "";
	sortedkeys.sort();
	for (var i = 0; i < sortedkeys.length; i++) {
		k = sortedkeys[i];
		signatureData += k + postData[k];
	}
  var signature = crypto.createHmac('sha256',secretKey).update(signatureData).digest('base64'); */
	postData['secretKey'] = process.env.secretKey;
	sortedkeys = Object.keys(postData);
  let formData = new FormData();
  sortedkeys.forEach(key => formData.append(key, postData[key]));
  const rawResponse = await axios.post( 'https://test.cashfree.com/api/v1/order/create',
            formData.getBuffer(),
            {  headers: {'Content-Type': 'multipart/form-data', 
                ...formData.getHeaders()}
            }
          )
  if(rawResponse.data.status == 'OK')        
    order = await Orders.create(postData);
  //console.log(formData)
  return rawResponse.data;
};