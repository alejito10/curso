const mongoose = require("mongoose");
const dbConnectionURI = require("../config.json").uriMongoose;

module.exports = (req, res, next) => {
	mongoose.connect(
		dbConnectionURI,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		function (err) {
			if (err) throw err;
			console.log("connected succesfully to serve");
			next();
		}
	);
};
// var mongoose = require("mongoose");
// mongoose.connect('local')
