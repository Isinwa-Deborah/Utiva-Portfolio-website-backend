const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageModel = mongoose.Schema(
    {
        sendername: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        messagebody: {
            type: String,
            required: true,
        }
    }, { timestamps: true }

)

const Message = mongoose.model("Message", messageModel);


module.exports = Message;