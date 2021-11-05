const express = require('express');
const bodyParse = require('body-parser');

const app = express();

//cargar rutas
const udemyRoutes = require('./routes/udemyRoute')


//mideleware
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());
//CORPS


//rutas
app.use('/',udemyRoutes);




//RUTAS ANTIGUAS
//app.get('/',(req,res)=>{
//  res.status(200).send({
//mensaje:"holaaa"  //esto es lo que te devuelve al hacer una peticion GET
//})
//})
//app.post('/test',(req,res)=>{
//  res.status(200);
//console.log(req.param('nombre'));//con req.param recojo la el dato enviado por post.
//console.log((req.body.nombre))//es como el de arriba pero mejor, mas sencillo
// console.log(req.query)
// console.log(req.params)

//})
//exportaciones
module.exports = app;