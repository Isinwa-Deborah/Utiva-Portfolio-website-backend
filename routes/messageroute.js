const express = require("express");
const router = express.Router();

const messageController = require("../controller/messagecontroller");

//post messages
// router.post('/', function (req, res) {
//     controller.add_message
// });

// router.post("/", controller.home)

router.post("/", messageController.add_message);

module.exports = router;
