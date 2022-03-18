"use strict";
console.log("curso de typescript modo watch");
let lista = ['claudia', 'diego', 'andres'];
for (const iterator of lista) {
    console.log("nombre", iterator);
}
let estadoCivil = false;
estadoCivil = true;
if (estadoCivil) {
    console.log("casado");
}
else {
    console.log("soltero");
}
let estadoCi;
estadoCi = false;
estadoCi = obtenerEstadoCivil();
console.log("funcion", estadoCi);
function obtenerEstadoCivil() {
    return true;
}
let edad = 16;
if (edad >= 18) {
    console.log("es mayor de edad");
}
else {
    console.log("es menor de edad");
}
console.log("archivo dos");
let nombre = "Diego";
let apellido = "Villamil";
let resultado = nombre + " " + apellido;
console.log(resultado);
let concatenar = `${nombre} ${apellido}`;
console.log(concatenar.toUpperCase());
console.log("archivo tres");
let numero = [2, 5, 6, ""];
numero.push("diego");
console.log(numero);
let personas = ["diego", "claudia", "carol"];
console.log(personas[1]);
//////tuplas
let datos;
datos = ["villamil", 30];
console.log("tupla", datos, " acceder a posición 1", datos[0]);
//////enumeración
var Estado;
(function (Estado) {
    Estado[Estado["activo"] = 30] = "activo";
    Estado[Estado["inactivo"] = 40] = "inactivo";
})(Estado || (Estado = {}));
console.log("enumeración", Estado.activo);
//////////////type assertions
let valor = "hola estoy aprendiendo typescript";
let caracteres = valor.length;
let caracteres2 = valor.length;
console.log("forma 1 ", caracteres, " forma 2 ", caracteres2);
