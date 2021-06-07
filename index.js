const mongoose = require("mongoose");
const app = require("./src/app");
const dotenv = require('dotenv');
dotenv.config();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server connection on  http://127.0.0.1:${process.env.PORT}`);  // Server Connnected
});

/*======== Database connect===========*/
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("connect mongodb");
});
/*======== Database connect===========*/