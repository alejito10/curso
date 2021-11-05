console.log("hola mundo");
const fs = require("fs");
fs.writeFile("fichero.txt", "hola mundo", () => {
	console.log("terminado");
});
const fun2 = () => {
	console.log("terminado fun2");
};

//crea un fichero json con esos parametros

const createMovies = () => {
	const movies = [
		{
			name: "cadena perpetua",
			year: "1998",
		},
	];
	const callback = () => {
		console.log("terminado callback");
	};
	fs.writeFile("movies.json", JSON.stringify(movies), callback);
};
createMovies();
//para leer el fichero json
const readMovies = () => {
	const callback = (err, data) => {
		if (err) {
			console.log(err);
		} else {
			movies = JSON.parse(data.toString());
			console.log(movies);
		}
	};
	fs.readFile("movies.json", callback);
};
readMovies();
//escribir una pelicula
const movie = {
	name: "El señor de los anillos",
	year: "2002",
};
const addMovie = (movie) => {};
module.exports{
	readMovies,
	createMovies
}