
//conexion con la bse de datos
const mongose = require('mongoose')
//creacion servidor
const app = require('./app');
const port = 3000;
mongose.promise=global.promise;
mongose.connect('mongodb://127.0.0.1:27017/udemy')
        .then(()=>{
            console.log('conectado');
            app.listen(port,()=>{
                console.log('servidor corriendo en el puerto 3000');
            })
        })
        .catch(err=> console.log('err'));
