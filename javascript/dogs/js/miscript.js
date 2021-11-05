// EJERCICIO DOGS
//
// Complete el ejercicio para que
// se puedan recuperar imágenes de perros
// del api dog.ceo con AJAX, fetch y axios
// En la función obtenerFoto() llame a la
// función de recuperación de imágenes que
// quiera probar
//
// Opcionalmente implemente:
//
// 1. Fetch con async/await
// 2. Axios con async/await

const urlAPI = "https://dog.ceo/api/breeds/image/random";
var imagen = document.getElementById("imagen-perro");

// AJAX

function fotoConAJAX() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			let JSON = JSON.parse(this.responseText);
			let { url } = json[0];
			console.log(url);
		}
	};
}

// FETCH

function fotoConFetch() {
	// Inserte su código aquí
	//------------------------
}

async function fotoConFetchAA() {
	// Inserte su código aquí
	//------------------------
}

// AXIOS

function fotoConAxios() {
	// Inserte su código aquí
	//------------------------
}

async function fotoConAxiosAA() {
	// Inserte su código aquí
	//------------------------
}

function obtenerFoto() {}
