// const fs = require("fs");
// const fileName = "movies.json";

// const updateMovies = (movies) => {
// 	const callback = () => {
// 		console.log("Fichero actualizado");
// 	};
// 	fs.writeFile(fileName, JSON.stringify(movies), callback);
// };

// const readMovies = (callbackReadMovies) => {
// 	console.log("readMovies ha sido invocada");

// 	const callbackReadFile = (error, data) => {
// 		console.log("readFile ha terminado de leer el fichero");

// 		if (error) {
// 			console.log(error);
// 			console.log(data);
// 		} else {
// 			callbackReadMovies(JSON.parse(data.toString()));
// 		}
// 	};

// 	fs.readFile(fileName, callbackReadFile);
// };

// module.exports = {
// 	updateMovies,
// 	readMovies,
// 	fileName,
// };

const datos = { nombre: "Alejandro", edad: 27 };
module.exports = datos;
