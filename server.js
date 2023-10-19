const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

//configurations
const app = express();
app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(bodyParser.json());

//custom imports
const messageroute = require("./routes/messageroute");

// Serve static files from a directory
app.use(express.static(`${__dirname}/public`));

//middleware to accept form data
// app.use(express.urlencoded({ extended: true}));
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PATCH", "DELETE"], // Allow these HTTP methods
		allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
		credentials: true, // Allow credentials to be shared between origins
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);

//routes
// app.use("/home", messageroute)
app.use("/sendmessage", messageroute);

//database
// const PORT = process.env.PORT || 5000;
const PORT = 3000;

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
	})
	.catch((err) => console.log(`failed to connect to server, error ${err}`));
