// EJERCICIO CATS
//
// Complete el ejercicio para que
// se puedan recuperar imágenes de gatos
// del api thecatapi.com con AJAX, fetch y axios
// En la función obtenerFoto() llame a la
// función de recuperación de imágenes que
// quiera probar
//
// Elementos de UX/UI:
//
// 1. Antes de invocar cada método de recuperar datos remotos
//    llame a la función mostrarSpinner()
// 2. Antes de asignar la propiedad src de la imagen añada
//    el siguiente código:
//    imagen.onload = function () {
//       ocultarSpinner();
//    };
// Esto permite quitar el spinner justo cuando se termine de
// cargar la imagen
//
// Opcionalmente implemente:
//
// 1. Fetch con async/await
// 2. Axios con async/await

// API

const apiURL = "https://api.thecatapi.com/v1/images/search";

// IMAGEN
var imagen = document.getElementById("imagen-gato");
var spinner = document.getElementById("spinner");

function mostrarSpinner() {
	spinner.style.display = "inline";
}

function ocultarSpinner() {
	spinner.style.display = "none";
}

// AJAX

function fotoConAJAX() {
	mostrarSpinner();
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			let json = JSON.parse(this.responseText);
			let { url } = json[0];
            console.log(json[0]);
            imagen.onload= function
		}
	};
}

// FETCH

function fotoConFetch() {
	// Añadir código aquí
	//--------------------
}

async function fotoConFetchAA() {
	// Añadir código aquí
	//--------------------
}

// AXIOS

function fotoConAxios() {
	// Añadir código aquí
	//--------------------
}

async function fotoConAxiosAA() {
	// Añadir código aquí
	//--------------------
}

function obtenerFoto() {
	fotoConAJAX();
}
/*
// Crear el objeto
let xhttp = new XMLHttpRequest();
// Preparar el evento
xhttp.onreadystatechange = function () {
 if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
 
 // Obtener los datos
 const json = JSON.parse(this.responseText);
 // Seleccionar los datos
 const { ip, city, country_name, country_capital } = json;
 // Formatear los datos
 let msg = `Yo vivo en ${city} del pais ${country_name} cuya capital es ${country_capital}`;
 // Escribir los datos en la pagina
 document.getElementById("ip").innerHTML = msg;
 }
};
// Configurar el método, la URL y que sea asincrona la peticion (true)
xhttp.open("GET", "https://ipapi.co/json", true);
// Enviar la petición
xhttp.send();
*/
 /*
fetch("https://ipapi.co/json")
 .then(response => response.json())
 .then(json => {
 // Seleccionar los datos
 const { ip, city, country_name, country_capital } = json;
 // Formatear los datos
 let msg = `Yo vivo en ${city} del pais ${country_name} cuya capital es ${country_capital}`;
 // Escribir los datos en la pagina
 document.getElementById("ip").innerHTML = msg;
 })
 .catch(err => console.log(err))
 .finally(() => console.log("fetch terminado"));
 */