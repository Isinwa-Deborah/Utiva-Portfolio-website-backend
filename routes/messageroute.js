const express = require("express");
const router = express.Router();


const controller = require("../controller/messagecontroller")

//post messages
// router.post('/', function (req, res) {
//     controller.add_message
// });

router.post("/", controller.home)

router.post("/", controller.add_message)


module.exports = router; 