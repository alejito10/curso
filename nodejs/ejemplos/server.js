const http = require("http");
const fs = require("fs");
const fileName = "movies.json";

const readMovies = (callbackReadMovies) => {
	const callbackReadFile = (error, data) => {
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

	readMovies((json) => {
		let status = 200;
		let result;

		if (
			request.method == "GET" &&
			request.url == "/const fileName = 'movies.json';/"
		) {
			result = JSON.stringify(json);
		} else if (request.method == "GET" && request.url == "/movies/1") {
			//TODO: una sola
		} else {
			status = 404;
		}

		response.writeHead(status);
		response.end(result);
	});
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
	console.log("Server running!");
});
