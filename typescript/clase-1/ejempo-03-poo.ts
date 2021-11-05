//programacion orientada a objetos

//clases-> objetos  (js no tiene clases, tiene prototipos)
//1ª: encampsulacion: metodos privados no accesibles fuera de la clase
//                    metodos publicos, accesibles fuera de la clase
//                    metodos protegidos que pueden ser usados por sus hijos
//2ª: herencia: una clase puede heredar de otra todos sus metodos y sus propiedades.
//no tiene herencia multiple es decir que una clase solo puede heredar de otra.
//javaScript no tiene encapsulacion de manera nativa, se puede hacer pero es complicado
//3ª el polimorfismo es que un objeto de una clase puede tener la forma de sus clases padres, nunca de una clase hija
//JS no tiene polimorfismo, es dinamico, por lo tanto una variable puede cambiar de tipo pero no tiene polimorfismo
//typeScript si intenta ser orientada a objetos.
//simpre propiedades privadas.

interface Reproducible {
	play(): void;
	stop(): void;
	pause(): void;
}
interface Grabable {
	grabar(): void;
}
class ReproductorGenerico implements Reproducible {
	constructor(private modelo: string) {}
	public play(): void {
		console.log(`${this.modelo} Play`);
	}
	public stop(): void {
		console.log(`${this.modelo} Stop`);
	}
	public pause(): void {
		console.log(`${this.modelo} Pause`);
	}
}

class ReproductorMusica extends ReproductorGenerico {
	constructor(modelo: string, private cancion: string) {
		super(modelo);
	}
	getModelo(): string {}
}
class Radio extends ReproductorMusica {
	constructor(_modelo: string, cancion: string, private canal: string) {
		super(_modelo, cancion);
	}
}

class ReproductorVideo extends ReproductorGenerico {
	constructor(modelo: string, private video: string) {
		super(modelo);
	}
	public mostrarVideo() {
		console.log(`Reproduciendo ${this.video}`);
	}
}

let repMusic = new ReproductorMusica("Reproductor.MP3", "wlcome to the jungle");
repMusic.play();

let video = new ReproductorVideo("vlc", "historias raras");
video.mostrarVideo();
