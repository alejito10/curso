//clases en TS

class NumCuenta {
	iban: string;
	nombre: string;
	codeSeguridad: any;
	//tipo any es cualquier dato
	//no se deberia utilizar nunca o cuando no que mas remedio

	//contructor
	constructor(iban: string, nombre: string, codeSeguridad: any) {
		this.iban = iban;
		this.nombre = nombre;
		this.codeSeguridad = codeSeguridad;
	}

	//metodos
	mostrar() {
		console.log(`Nombre: ${this.nombre} IBAN: ${this.iban}`);
	}
}
let miCuenta: NumCuenta;
miCuenta = new NumCuenta("ES35-45-52-23", "Antonio", "32"); //al ahcer el constructor hay que meter los datos por aqui.
//miCuenta.cualquierProp = "ajsajsja";
//console.log("no deja de ser js " + miCuenta["cualquierProp"]);

//uso del metodo mostrar
miCuenta.mostrar();

let otraCuenta: NumCuenta = new NumCuenta("ES35-45-52-23", "Antonio", "32");
otraCuenta.mostrar();

//hacer una nueva clase que se llame maquina de cafe con nivel modelo y estado
// Ejercicio: Crear una clase llamada MaqCafe,
// 3 variables miembro nivel -> núm, modelo -> string, activo -> booleano
// Métodos: Constructor: activo por defecto es falso,
// Mostrar: Muestre toda la info, todo el estado
// Máquina Cafetera Plus, Nivel 10, ACTIVA / DESACTIVA

// ponerCafe(4): cuya salida es:
// Cafetera Plus, nivel 4, poniendo café
// Café 25 %... Café 50 %... Café 75 %...Café 100 % Listo
// Crearos 2 instancias diferentes con ejemplos de llamadas tanto a mostrar() como a ponerCafe(N)

//esto es para implementar esta interface en la clase maquinaCafe.
interface Mostrable {
	//en las interfaces no se debe poner propiedades
	mostrar(): void;
}
class maquinaCafe implements Mostrable {
	nivel: number;
	modelo: string;
	activo: boolean;

	constructor(nivel: number, modelo: string, activo: boolean = false) {
		this.nivel = nivel;
		this.modelo = modelo;
		this.activo = activo;
	}

	//metodos
	mostrar(): void {
		let strActivo: string = "DESACTIVADO";
		if (this.activo) {
			strActivo = "ACTIVADO";
		}
		console.log(
			`El nivel es ${this.nivel} del modelo ${this.modelo} esta ${strActivo}`
		);
	}

	ponerCafe(n) {}
}

let cafetera1: maquinaCafe = new maquinaCafe(1, "nespresso", true);
cafetera1.mostrar();
cafetera1.ponerCafe(4);
