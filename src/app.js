const express = require('express');
const app = express();
const cors = require("cors");
const routes = require("./routes/v1");

// enable cors
app.use(cors());
app.options("*", cors());



app.use(express.static(__dirname+"/public/dist/ngx-flightbooking"));

app.get('/payment', cors(), function(req,res){
    res.sendFile(__dirname+"/public/dist/ngx-flightbooking/index.html");
});

app.post('/billpay',(req, res, next)=>{
    console.log('inside'+res.body);
    res.header('Access-Control-Allow-Origin', '*');  
    next();
})


bodyParser = require('body-parser').json();

app.use(bodyParser);

// v1 api routes
app.use("/v1", routes);

module.exports = app;
