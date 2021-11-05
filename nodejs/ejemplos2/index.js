const express = require("express"); //npm i express
const app = express(); //nos da un esqueleto de cosas especificas de nuestra aplicacion web

app.get("/",(req,res)=>{
    res.send('hola mundo');
});

app.listen(3000, () => {
	console.log("server on");
});
