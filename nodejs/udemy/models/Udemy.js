const mongoose = require('mongoose');//importacion de mongoose
const schema = mongoose.Schema;

//creacion del esquema para guardar en la base de datos
const udemySchema = schema({
    name:String,
    year:Number,
    hobbis:String,
    image:String
})

module.exports = mongoose.model('udemy',udemySchema);