/*
var persona = { nombre: "Juan", edad: 30, ciudad: "Sevilla" };

var { nombre: name, edad: age } = persona;

console.log(name, age);

var nuevaPersona = { nombre: "Maria", ciudad: "Madrid", edad: 25 };

const { nombre = "Juan", edad = 25 } = persona;

console.log(nombre, edad);

function nombrePersona({ nombre }) {
    console.log(nombre);
}


nombrePersona(persona);
nombrePersona(nuevaPersona);

const personas = [persona, nuevaPersona];

for (let p of personas) {
    console.log(p.nombre, p.ciudad, p.edad);
}

for (const { nombre, ciudad, edad } of personas) {
    console.log(nombre, ciudad, edad);
}

for (let propiedad in personas) {
    console.log(propiedad, personas[propiedad]);
}

for (let propiedad in persona) {
    console.log(propiedad, persona[propiedad]);
}



function suma(x) {
    return x + x;
}

let _suma = x => x + x;

console.log(suma(5), _suma(5));

const numeros = [1, 2, 3, 4, 5];


const numerosPor2 = numeros.map(function (elemento) {
     return 2 * elemento;
 });
*/

// const numerosPor2 = numeros.map((elemento) => {
//     return 2 * elemento;
// });
/*
const numerosPor2 = numeros.map((elemento) => 2 * elemento);

console.log(numerosPor2);

const numerosPares = numeros.filter(elemento => elemento % 2 == 0);
console.log(numerosPares);

const sumaNumeros = numeros.reduce((t, v) => t + v, 0);
console.log(sumaNumeros);
*/
/*
let usuario = {
    nombre: "Juan"
};

function verNombre(contexto) {
    console.log(contexto.nombre);
}

function _verNombre(saludo) {
    console.log(saludo, this.nombre);
}

let __verNombre = _verNombre.bind(usuario);

verNombre(usuario);
__verNombre("hola");
*/

//=======================
// TRATAMIENTO ASINCRONO
//=======================
/*
var alarma = 10;
var timeout = setTimeout(() => {
    alert('HOLA JM HAN PASADO YA LOS 5 SEGUNDOS!');
}, alarma * 1000);

var tiempo = 1;
var intervalo = setInterval(() => {
    let hora = document.getElementById("hora");
    if (hora) {
        let date = new Date();
        hora.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
}, tiempo * 1000);

function pararReloj() {
    clearInterval(intervalo);
}

function quitarAlarma() {
    clearTimeout(timeout);
}

var promesa = new Promise((resolver, rechazar) => {

    setTimeout(() => {
        let datos = [1, 2, 3, 4, 5, 6, 7, -88];
        let suma = datos.reduce((t, v) => t + v);
        if (suma > 0) {
            resolver(suma);
        }
        else {
            rechazar(suma);
        }
    }, 20000);


});

function lanzarPromesa() {
    var spinner = document.getElementById("spinner");
    spinner.style.display = "inline";
    promesa
        .then(suma => {
            console.log('Todo genial con una suma de ', suma);
        })
        .catch(suma => {
            console.log('Fatal hemos perdido con', suma)
        }).finally(() => {
            console.log('promesa finalizada!');
            spinner.style.display = "none";
        });
}

var spinner = document.getElementById("spinner");
spinner.style.display = "inline";
fetch('https://ipapi.co/json')
    .then(response => response.json())
    .then(datos => {
        let { country, country_capital } = datos;
        console.log(`El pais es ${country} y su capital es ${country_capital}`);
    })
    .finally(() => { spinner.style.display = "none"; })
    .catch(error => console.log('ERROR :: ', error));

var spinner = document.getElementById("spinner");
spinner.style.display = "inline";

fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
    })
    .finally(() => { spinner.style.display = "none"; })
    .catch(error => console.log('ERROR :: ', error));

fetch('http://swapi.dev/api/films/1/')
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
    })
    .finally(() => { spinner.style.display = "none"; })
    .catch(error => console.log('ERROR :: ', error));


*/

function cargarImagen() {
    var spinner = document.getElementById("spinner");
    var imagen = document.getElementById("perro");
    spinner.style.display = "inline";

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(datos => {
            imagen.src = datos.message;
        })
        .finally(() => { spinner.style.display = "none"; })
        .catch(error => console.log('ERROR :: ', error));

}







































