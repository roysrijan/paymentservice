const axios = require("axios");


//======= Create Subscription =======
exports.createSubscription = async (body) => {
    const notify = body;
    // Updates Live Notification
    const rawResponse = await axios.post( 'https://test.cashfree.com/api/v2/subscriptions',
    body,
    {  headers: {
        'X-Client-Id': process.env.appId,
        'X-Client-Secret': process.env.secretKey,
        'Content-Type': 'application/json'
        }
    }
  )
    return rawResponse.data;
}

//======= Create Subscription Plans=======
exports.createSubscriptionPlans = async (body) => {
    const notify = body;
    // Updates Live Notification
    const rawResponse = await axios.post( 'https://test.cashfree.com/api/v2/subscription-plans',
    body,
    {  headers: {
        'X-Client-Id': process.env.appId,
        'X-Client-Secret': process.env.secretKey,
        'Content-Type': 'application/json'
        }
    }
  )
    return rawResponse.data;
}
