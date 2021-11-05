//typescript es javascript
var unaVariable = "un texto";
console.log("la varibel contiene" + unaVariable);
//se usa con el comando tsc: type script compiler, que en realidad.
//no es un compilador, es mas un transpilador
var numero = 100;
var numero1 = 100; //con esto defines que tipo de dato quieres que entre en esa varieble.
var esVerdad = true;
console.log(numero);
if ("22") {
    console.log("hola pues 22 es cierto");
}
var miObjeto;
miObjeto = new Object();
var array; //los arrays obligan a que todos los elementos sean del mismo tipo
array = new Array(); //tenemos que inicializar la varible para que no de errores.
var arrayJs = [2, "texto", false]; //en js puedes meterle cualquier cosa
array[0] = 10;
array[1] = 25;
console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log("el numero " + i + " vale " + array[i]);
}
function concatenar(a, b) {
    return a + b;
}
function comparar(a, b) {
    return a == b;
}
console.log(concatenar("hola ", "mundo"));
console.log(comparar(true, false));
