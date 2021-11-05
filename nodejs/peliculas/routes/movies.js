const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router
	.route("/:id(*)")
	.all(moviesController.dbConnect)
	.get(moviesController.getMovie)
	.post(moviesController.postMovie)
	.put(moviesController.putMovie)
	.delete(moviesController.deleteMovie);

module.exports = router;
