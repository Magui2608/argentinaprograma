/*1.a. Solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18,
muestra por consola el mensaje: "Eres mayor de edad". De lo contrario,
muestra por consola el mensaje: "Eres menor de edad". Guardar en un
archivo llamado mayorDeEdad.js*/

//FORMA 1 Usando operador ternario
const readlineSync = require('readline-sync');
const edad = readlineSync.question('Ingrese su edad:\n');
console.log((edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad');


// FORMA 2 usando if
/*
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}*/



