//clases en TS
var NumCuenta = /** @class */ (function () {
    //tipo any es cualquier dato
    //no se deberia utilizar nunca o cuando no que mas remedio
    //contructor
    function NumCuenta(iban, nombre, codeSeguridad) {
        this.iban = iban;
        this.nombre = nombre;
        this.codeSeguridad = codeSeguridad;
    }
    //metodos
    NumCuenta.prototype.mostrar = function () {
        console.log("Nombre: " + this.nombre + " IBAN: " + this.iban);
    };
    return NumCuenta;
}());
var miCuenta;
miCuenta = new NumCuenta("ES35-45-52-23", "Antonio", "32"); //al ahcer el constructor hay que meter los datos por aqui.
//miCuenta.cualquierProp = "ajsajsja";
//console.log("no deja de ser js " + miCuenta["cualquierProp"]);
//uso del metodo mostrar
miCuenta.mostrar();
var otraCuenta = new NumCuenta("ES35-45-52-23", "Antonio", "32");
otraCuenta.mostrar();
//hacer una nueva clase que se llame maquina de cafe con nivel modelo y estado
var maquinaCafe = /** @class */ (function () {
    function maquinaCafe(nivel, modelo, activo) {
        if (activo === void 0) { activo = false; }
        this.nivel = nivel;
        this.modelo = modelo;
        this.activo = activo;
    }
    //metodos
    maquinaCafe.prototype.mostrar = function () {
        var activo = "DESACTIVADO";
        if (this.activo == true) {
            activo = "ACTIVADO";
        }
        console.log("El nivel es " + this.nivel + " del modelo " + this.modelo + " esta " + activo);
    };
    maquinaCafe.prototype.ponerCafe = function (n) {
        if (this.activo == true) {
            this.mostrar() + ("" + 100 / n);
        }
    };
    return maquinaCafe;
}());
var cafetera1 = new maquinaCafe(1, "nespresso", true);
cafetera1.mostrar();
cafetera1.ponerCafe(4);
