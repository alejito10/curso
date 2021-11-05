const datos = [1, 2, 3, 4, 5, 600];

/*
let promise = new Promise((resolve, reject) => {
    const suma = datos.reduce((t, v) => t + v);
    if (suma > 0) {
        resolve(suma);
    }
    else {
        reject('Suma negativa o cero');
    }
});


promise.then(suma => console.log(suma))
    .catch(error => console.log(error))
    .finally(() => console.log('Promise ended')); // opcional
*/

async function procesarPromesa() {
    try {
        const suma = await promise;
        console.log(suma);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('Promise ended');
    }
}




//procesarPromesa();


const promesas = [
    new Promise(resolve => setTimeout(() => resolve('Ayuntamiento'), 2000)),
    new Promise(resolve => setTimeout(() => resolve('Registro Civil'), 2000)),
    new Promise(resolve => setTimeout(() => resolve('DGT'), 4000))
];

/*

console.time("drivers");
Promise.all(promesas)
    .then(() => {
        console.timeEnd("drivers");
        promesas.forEach(p => {
            p.then(sitio => console.log(sitio));
        })
    });

Promise.all(promesas)
    .then(() => {
        promesas.forEach(p => {
            p.then(sitio => console.log(sitio));
        })
    });
*/
/*
async function procesarConductores() {
    try {
        for await (const sitio of promesas) {
            console.log(sitio);
        }
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('Promise ended');
    }
}

procesarConductores();
*/
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


function personajeAleatorio() {
    let personaje = Math.floor(1 + Math.random() * 81);
    const url = `https://swapi.dev/api/people/${personaje}`;

    axios.get(url)
        .then(response => {
            console.log(response);
            const { name, height, mass } = response.data;
            document.getElementById("personaje").innerHTML =
                `${name} mide ${height} cm y pesa ${mass}`;
        })
        .catch(err => console.log(personaje, err));
}

/*
let personajes = [];
for (let i = 1; i <= 82; i++) {
    personajes.push(fetch(`https://swapi.dev/api/people/${i}`))
}

let _personajes = document.getElementById("personajes");

Promise.all(personajes)
    .then(() => {
        let pers = "";
        for (let p of personajes) {
            p.then(response => response.json())
                .then(json => {
                    console.log(json);
                    const { name, height, mass } = json;
                    if (name && height && mass) {
                        let p1 = `<li>${name} mide ${height} cm y pesa ${mass} kg</li>`;
                        pers += p1;
                        _personajes.innerHTML = pers;
                    }
                });
        }
    });
*/

let personajes = [];
for (let i = 1; i <= 82; i++) {
    if (i !== 17)
        personajes.push(axios.get(`https://swapi.dev/api/people/${i}`))
}

let _personajes = document.getElementById("personajes");

Promise.all(personajes)
    .then(() => {
        let pers = "";
        for (let p of personajes) {
            p.then(response => {
                console.log(response.data);
                const { name, height, mass } = response.data;
                let p1 = `<li>${name} mide ${height} cm y pesa ${mass} kg</li>`;
                pers += p1;
                _personajes.innerHTML = pers;
            });
        }
    });



