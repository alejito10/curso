const MongoClient = require("mongodb").MongoClient;
const dbConnectionURI = "mongodb://127.0.0.1:27017";
let client;

const dbConnect = (req, res, next) => {
	MongoClient.connect(dbConnectionURI, function (err, clientLocal) {
		if (err) throw err;
		console.log("Connected successfully to server");
		client = clientLocal;
		next();
	});
};

const getMovie = (req, res) => {
	const db = client.db("movies");
	const collection = db.collection("movies");

	if (req.params.id) {
		collection.findOne({ name: "Alien" }, function (findErr, result) {
			if (findErr) throw findErr;
			res.json(result);
			client.close();
		});
	} else {
		collection.find().toArray(function (findErr, result) {
			if (findErr) throw findErr;
			res.json(result);
			client.close();
		});
	}
};

const postMovie = (req, res) => {
	console.log(req.body.name);

	//TODO: añadir a base de datos

	res.json({ nombre: "Cadena perpetua" });
};

const putMovie = (req, res) => {
	console.log(req.params.id);

	//TODO: modificar en base de datos

	res.json({ nombre: "Cadena perpetua" });
};

const deleteMovie = (req, res) => {
	//TODO: borrar de base de datos

	res.json({ nombre: "Cadena perpetua" });
};

module.exports = {
	dbConnect,
	getMovie,
	postMovie,
	putMovie,
	deleteMovie,
};
