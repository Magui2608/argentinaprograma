// EJERCICIO 2 "Bienvenidxs al curso de programación 2023"
// a) ¿Cómo puedo hacer para saber en qué posición empieza la palabra "curso"?¿y la palabra "programa"?
let cadena = "Bienvenidxs al curso de programación 2023";
console.log("La palabra 'curso' se encuentra en el indice:",cadena.indexOf('curso'))
console.log("La palabra 'programa' se encuentra en el indice:",cadena.indexOf('programa')) // aca solo consulta si programa aparece mas alla de programacion
console.log("La palabra especifica 'programa' se encuentra en el indice?:",cadena.indexOf('programa ')) // el espacio es para especificar esa palabra

//b) imprima en pantalla la palabra curso usando la función adecuada para los strings.
console.log("Imprimiendo solo la palabra curso:", cadena.slice(15,20));

//c) Cree un arreglo cuyos elementos sean las palabras de la frase e imprimalo en pantalla.
let array1 = cadena.split(" ");
console.log("Separando la frase en palabras:\n",array1); // \n esto genera un salto de linea
console.log("La longitud del array1 es:",array1.length);

//d)  Cree otro arreglo cuyos elementos sean las letras de la frase. Muestre la longitud 
let array2 = cadena.split("");
console.log("Creando arreglo con las letras de la frase:\n",array2);
console.log("La longitud de la cadena es:",array2.length);

/*e) ¿Cómo podemos saber si el string inicial del ejercicio tiene números? 
¿Como podemos hacer para saber si todos los caracteres son números?*/
//Para poder tomar los numeros y no los espacios debemos usar replace para reemplazar los espacios por guion bajo
//array2 = array2.replace(' ', '-'); no me sale

let sonDigitos = array2.map(e => isNaN(Number(e)));
console.log("Valores NaN al aplicar Number:\n",sonDigitos); // los que son numeros salen como false

sonDigitos2 = array2.map(e => !isNaN(Number(e)));
console.log("Valores no NaN al aplicar Number:\n",sonDigitos2); // aca los que son numeros salen como true
