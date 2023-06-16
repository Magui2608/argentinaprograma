//Ejercicio 1
//a) Crear una variable y guarde su nombre en ella.
let nombre = "Magda";

//b) Utilizar la función adecuada para crear una variable que guarde el string del inciso anterior todo en minúscula. 
let nombreMinuscula = nombre.toLowerCase();
//console.log("El string en minuscula es: ",nombreMinuscula)

//c) ¿Son iguales las expresiones anteriores? Escribir un código que lo verifique.
console.log("¿Son iguales las expresiones anteriores?", nombre === nombreMinuscula);

//Ejercicio 2
//a) Crear una variable tipo number que contenga su DNI.
let dniNumber = 29577285;

//b) Crear otra variable tipo string que contenga su DNI.
let dniString = '29577285';

//c) ¿Son iguales las expresiones anteriores? Escriba un código que lo verifique.
console.log("¿Son iguales las expresiones anteriores?", dniNumber === dniString);

//Ejercicio 3
//a) Crear un arreglo que contenga 4 números distintos.
let array = [12,6,75,1];

//b) Imprimir el arreglo por pantalla.
console.log("El arreglo es: ",array);

//c) Imprimir por pantalla si el primer elemento es múltiplo de 3.
console.log("El primer elemento es multiplo de 3?", array[0] % 3 === 0);

//d) Imprimir por pantalla si el segundo elemento es un número negativo.
console.log("El segundo elemento es negativo?",array[1] < 0 );

//e) Imprimir por pantalla si el tercer elemento está entre 10 y 100. 
console.log("El tercer elemento está entre 10 y 100?", array[2] >= 10 && array[2] <= 100);

//f1) Imprimir por pantalla si el primer elemento es más grande que el segundo.
console.log("El primer elemento es más grande que el segundo?", array[0] > array[1]);

//f2) Imprimir por pantalla si alguno de los cuatro números es par.
console.log("Alguno de los cuatro números es par?", (array[0] % 2) === 0 || (array[1] % 2) === 0 || (array[2] % 2) === 0 || (array[3] % 2) === 0);

//Ejercicio 4
//a) Cree una variable que se llame num.
let num;

//b) Asignarle a la variable anterior un número aleatorio con la función adecuada vista en el teórico.
num = Math.random();

//c) ¿Qué valor me devuelve Math.floor(num)? ¿Siempre devuelve esto? ¿Por qué?
console.log(Math.floor(num));
//Siempre devuelve el numero entero hacia abajo porque esa es su funcion.

//d) ¿Qué valor me devuelve Math.ceil(num)? ¿Siempre devuelve esto? ¿Por qué?
console.log(Math.ceil(num));
//Siempre devuelve el numero entero hacia arriba porque esa es su funcion.

//e) ¿Qué valor me devuelve Math.round(num)? ¿Siempre devuelve esto? ¿Por qué?
console.log(Math.round(num));
/*Siempre devuelve el numero entero redondeado. Puede ser hacia abajo, si el numero pasado es un valor 
cuyo decimal sea hasta 4 y a partir del decimal 5 redondea hacia arriba porque esa es su funcion.*/