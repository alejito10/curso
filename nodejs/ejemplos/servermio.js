const http = require("http");
const readMovies = (callbackReadMovies) => {
	console.log("readMovies ha sido invocada");

	const callbackReadFile = (error, data) => {
		console.log("readFile ha terminado de leer el fichero");

		if (error) {
			console.log(error);
		} else {
			callbackReadMovies(JSON.parse(data.toString()));
		}
	};

	fs.readFile(fileName, callbackReadFile);
};

const requestHandler = (request, response) => {
	console.log(request.url);
	console.log(request.method);

	response.writeHead(200);
	response.end("datos!");
};
const server = http.createServer(requestHandler);

server.listen(3000, () => {
	console.log("server running!");
});
