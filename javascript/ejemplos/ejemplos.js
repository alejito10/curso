/*
var x = 100;
function demo() {
 let y = 3;
 console.log(x + y);
}
 
var x = 1000;
 
console.log(this);
console.log(this.x);
console.log(window.x);
 
let y = 2000;
 
console.log(this.y);
console.log(window.y);
console.log(y);
 
var x = 10;
var x = 20;
console.log(x);
 
let xx;
xx = "Hola";
console.log(xx);
 
const c = { nombre: "Juan", edad: 30 };
 
c.nombre = "Maria";
 
console.log(c);
 
const ar = [1, 2, 3, 4, 5];
 
ar[0] = 100;
ar.push(200);
console.log(ar);
*/
// SPREAD SYNTAX
/*
function suma(a, b) {
 console.log(a);
 console.log(b);
 return a + b;
}
 
function verPar() {
 for (let argumento of arguments) {
 console.log(argumento);
 }
}
 
//console.log(suma(5, 5));
 
let ar = [5, 5, 5];
let ar1 = [1, 1, 1, 1, 1, 1, 1, 1, 1]
//verPar(...ar1, ...ar, 7, 8, 9, [100, 200]);
 
//verPar(...ar);
//verPar(5, 5, 5);
 
let o1 = { a: "Hola" };
let o2 = o1;
o2.a = "Mundo";
 
console.log(o1, o2);
 
let ar2 = ar;
//ar2[0] = 10;
//console.log(ar2);
//console.log(ar);
 
let ar3 = [];
for (var i = 0; i < ar.length; i++) {
 ar3[i] = ar[i];
}
console.log('ar3', ar3);
ar3[0] = 10;
console.log('ar3', ar3, 'ar', ar);
 
let ar4 = [];
for (var i = 0; i < ar.length; i++) {
 ar4.push(ar[i]);
}
console.log('ar4', ar4);
ar4[0] = 10;
console.log('ar4', ar4, 'ar', ar);
 
let ar5 = [...ar];
ar5[0] = 10;
console.log('ar5', ar5, 'ar', ar);
 
let ar6 = [...ar, ...ar1, ...ar5];
//let ar6 = ar.concat(ar1).concat(ar5);
console.log(ar6);
 
let h = "Hola";
let m = "Mundo";
 
let hm = `${h} ${m}`;
console.log(hm);
 
let obj1 = { a: "Maria", b: 30 };
let obj2 = { c: "Madrid", d: 190 };
 
let obj3 = { ...obj1 };
obj3.b = 40;
console.log(obj1, obj3);
 
let obj4 = { ...obj2, ...obj1 };
console.log(obj4);
*/

function verArreglo(...arg) {
	arg.forEach(function (valor) {
		console.log(valor);
	});
	return arg.reduce(function (t, v) {
		return t + v;
	}, 0);
}

console.log(verArreglo(1, 4, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 3));
