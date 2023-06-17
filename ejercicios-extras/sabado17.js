//for
/*
let array = [20, 1, 30, 4, 23, 54, 11, 19, 30, 1];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//console.log(array[array.length-1])

//while cuando no sabemos cuando vamos parar pero si tenemos una condicion de parada. Por esto trabaja con booleanos. Para cuando es true y si es false continua el ciclo.

let num = 15;

while (num > 0) {
    console.log(num);
    num = num - 1;
}
console.log("Listo");

// OJo donde se pone el console.log dentro del while, si lo pongo antes de la resta primero imprime el nro 15 y despues resta. Si lo hago despues, imprime primero 14.
*/
// Dado un arreglo con los numeros del 1 al 10 desordenados
// escribir un programa que encuentre la posicion en la que se encuentra el nro 1

let array = [10, 5, 6, 2, 9, 1, 3, 4, 8, 7];
let indice = 0;
let elemento = array[0];

while (elemento !== 1){
    
    indice++
    elemento = array[indice]

}
console.log("El indice es: %i", indice);

console.log("El elemento del arreglo es: %i", array[indice]);