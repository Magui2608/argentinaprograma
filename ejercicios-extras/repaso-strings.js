let string = "Hola Mundo";
console.log(string.length);
string = string.toLowerCase();

let string2 = string.toUpperCase();
console.log(string2);

console.log(string[0]);
console.log(string[1]);
console.log(string2[0]);

let array = string.split();
console.log(array);
console.log(array.length);
console.log(array[0]);

array = string.split(" ");
console.log(array);
console.log(array.length);
array = string.split("o");
console.log(array);

array = string.split("");
console.log(array);
console.log(array.length);

console.log(typeof(string));
console.log(typeof(string.length));
console.log(typeof(array));


/* 1) Dada la cadena " Bienvenidxs al Curso de Programación "
Escribir un código que:
a) muestre la longitud de la frase.
b) elimine de la frase los espacios al comienzo.
c) imprima el primer y último elemento de la cadena. 
d) cree una nueva variable para almacenar la frase anterior 
de modo que en la que sólo la primera letra esté con mayúscula 
y muestre la nueva frase por pantalla. 
e) escriba un nuevo string y arme otro que sea la unión del 
inicial más el que usted creó. */

let string3 = " Bienvenidxs al Curso de Programación ";

//punto a) muestre la longitud de la frase.
console.log(string3.length);

//punto b) elimine de la frase los espacios al comienzo.
console.log(string3.trim());

//punto c) imprima el primer y último elemento de la cadena. 


/*punto d) cree una nueva variable para almacenar la frase anterior 
de modo que en la que sólo la primera letra esté con mayúscula 
y muestre la nueva frase por pantalla. */


/*punto e) escriba un nuevo string y arme otro que sea la unión del 
inicial más el que usted creó. */



