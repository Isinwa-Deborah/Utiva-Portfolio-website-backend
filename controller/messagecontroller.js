let message = require("../model/messagemodel")


const home = async (req, res) => {

    res.send("index");
}


const add_message = async (req, res) => {

    let message = new Message(req.body);
    message.save().then(() => {
        // res.redirect("/home");
        res.json("successfully sent message")
    }).catch((err) => {
        console.log(err);
    })

    // res.json(`successfully sent message`)
}

module.exports = add_message, home;

