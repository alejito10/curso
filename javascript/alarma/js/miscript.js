// EJERCICIO ALARMA
//
// Complete el ejercicio para que 
// utilizando la variable temporizador 
// y la función sonarAlarma() la página
// arranque una alarma en lo segundos que
// le digamos o la cancele en cualquier momento
//
// Opcionalmente puede cambiar:
// 1. El máximo de segundos de la alarma en HTML
// 2. El sonido de la alarma a elegir en la carpeta assets/audio 


// Temporizador a utilizar
var temporizador = null;

// El audio
var audio = new Audio();

// Los segundos
var segundos = document.getElementById("segundos");

// Los botones
var arrancar = document.getElementById("arrancar-alarma");
var parar = document.getElementById("parar-alarma");

function sonarAlarma() {
    audio.onloadeddata = () => {
        audio.loop = true;
        audio.play();
    };
    audio.src = "/assets/audio/analog-watch.mp3";
}

function arrancarAlarma() {
    var seg = Math.abs(parseInt(segundos.value));
    if (seg) {
        // Añadir código aquí

        //---------------------------- 
        arrancar.disabled = true;
        parar.disabled = false;
    }
    else {
        alert("Introduzca el tiempo de espera en segundos")
    }
}

function pararAlarma() {
    // Añadir código aquí

    //---------------------------- 

    audio.pause();
    arrancar.disabled = false;
    parar.disabled = true;
}