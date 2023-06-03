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

let cadena1 = " Bienvenidxs al Curso de Programación ";
console.log(cadena1);

//punto a) muestre la longitud de la frase.
console.log("La longitud de la cadena es: "+cadena1.length);

//punto b) elimine de la frase los espacios al comienzo.
console.log("La frase sin los espacios al comienzo: ", cadena1.trim());

//punto c) imprima el primer y último elemento de la cadena. 
console.log("Primer elemento de la cadena: ", cadena1[0]);
console.log("Ultimo elemento de la cadena: ", cadena1[cadena1.length-1]);

//Otra opcion almacenando el resultado anterior en la cadena
let cadena2 = cadena1.trim();
console.log("Primer elemento de la cadena: ", cadena2[0]);
console.log("Ultimo elemento de la cadena: ", cadena2[cadena2.length-1]);

/*punto d) cree una nueva variable para almacenar la frase anterior 
de modo que en la que sólo la primera letra esté con mayúscula 
y muestre la nueva frase por pantalla. -->cadena2 */ 
let cadenaMinuscula = cadena2.toLowerCase();
let result = cadena2[0] + cadenaMinuscula.slice(1,36);
console.log("La frase con solo la primer letra en Mayuscula:", result);

/*punto e) escriba un nuevo string y arme otro que sea la unión del 
inicial más el que usted creó. */
let cadena3 = cadena1 + result;
console.log("Union de ambos strings:",cadena3);

