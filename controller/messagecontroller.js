const Message = require("../model/messagemodel");

// const home = async (req, res) => {
// 	res.send("index");

// 	next();
// };

exports.add_message = async (req, res) => {
	let message = new Message(req.body);

	let response = await message
		.save()
		.then(() => {
			return "successfully sent message";
		})
		.catch((err) => {
			console.log(err);
			next();
		});

	res.send(response);
};
