const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const bodyParser = require('body-parser');

//configurations
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


//custom imports
const messageroute = require("./routes/messageroute")


//middleware to accept form data
// app.use(express.urlencoded({ extended: true}));

//routes
app.use("/home", messageroute)
app.use("/sendmessage", messageroute);



//database
// const PORT = process.env.PORT || 5000;
const PORT = 3000;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
}).catch((err) => console.log(`failed to connect to server, error ${err}`));




