// EJERCICIO RELOJ
// Complete el ejercicio para que 
// utilizando la variable temporizador 
// y la función mostrarReloj() la página
// enseñe un reloj digital que podamos
// arrancar o parar en cualquier momento

// Temporizador a utilizar
var temporizador = null;

// Para mostrar la hora
var tiempo = document.getElementById("tiempo");

// Los botones
var arrancar = document.getElementById("arrancar-reloj");
var parar = document.getElementById("parar-reloj");

function mostrarReloj() {
    let hora = new Date();
    tiempo.innerHTML = hora.toLocaleTimeString();
}

function arrancarReloj() {
    // Añadir código aquí

    //---------------------- 
    arrancar.disabled = true;
    parar.disabled = false;
}

function pararReloj() {
    // Añadir código aquí

    //---------------------- 
    arrancar.disabled = false;
    parar.disabled = true;
}