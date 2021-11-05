//para meter express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const moviesRoutes = require("./routes/movies");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/movies", moviesRoutes);
//escuha en el puerto 3000
app.listen(3000);
