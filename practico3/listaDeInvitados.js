/* LISTA DE INVITADOS: 
En este ejercicio, que guardaremos en un archivo listaDeInvitados.js, queremos que
tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de
invitados. Pero no es tan fácil: no queremos dejar entrar a Jose y Sofia porque son
codiciosos y groseros, ¡y siempre se comen toda la comida! Tenemos dos listas, una para
admitir invitados y otra para rechazar invitados.
La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y
Emilia.
Específicamente, queremos que:
● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida
necesita?
● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es
igual a "Jose" o "Sofia" usando una declaración condicional:
- Si es así, concatene el elemento al arreglo de rechazados.
- Si no es así, concatene el elemento al arreglo de admitidos.
*/

let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let invitadosAdmitidos = [];
let invitadosRechazados = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] === "Jose" || personas[i] === "Sofia") {
        invitadosRechazados.push(personas[i]);
    } else {
        invitadosAdmitidos.push(personas[i]);
    }
}

/* Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de
invitados admitidos y otra para imprimir la lista de invitados rechazados:
a. Para la lista de invitados admitidos deberás imprimir por consola un
mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por
tantos párrafos como tenga el arreglo admitidos conteniendo los
respectivos nombres de los invitados.
*/

console.log("La lista de invitados admitidos es: ");
for (let i = 0; i < invitadosAdmitidos.length; i++) {
    console.log(invitadosAdmitidos[i])
}

/* VARIANTE
let frase1 = "La lista de invitados admitidos es: ";
for (let i = 0; i < invitadosAdmitidos.length; i++) {
    if (i < invitadosAdmitidos.length - 2) {
           frase1 += invitadosAdmitidos[i] + ", ";
    }
}
frase1 += invitadosAdmitidos[invitadosAdmitidos.length - 2] + " ";
frase1 += "y " + invitadosAdmitidos[invitadosAdmitidos.length - 1] + ".";
console.log(frase1);
*/

/*b. Para la lista de invitados rechazados deberás imprimir por consola un
mensaje inicial que dirá: "La lista de invitados rechazados es:”, seguido por
tantos párrafos como tenga el arreglo rechazados conteniendo los
respectivos nombres de los invitados.
*/

console.log("La lista de invitados rechazados es: ");
for (let i = 0; i < invitadosRechazados.length; i++) {
    console.log(invitadosRechazados[i]);
}

/* VARIANTE
let frase2 = "La lista de invitados rechazados es: ";
for (let i = 0; i < invitadosRechazados.length; i++) {
    if (i < invitadosRechazados.length - 2) {
        frase2 += invitadosRechazados[i] + ", ";
    }
}
frase2 += invitadosRechazados[invitadosRechazados.length - 2] + " ";
frase2 += "y " + invitadosRechazados[invitadosRechazados.length - 1] + ".";
console.log(frase2);
*/

/*EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos
listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los
nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
“ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos
deberás imprimir: “La lista ordenada de invitados admitidos es:”.
*/
console.log("La lista ordenada de invitados rechazados es: %s", invitadosRechazados.sort());
console.log("La lista ordenada de invitados admitidos es: %s", invitadosAdmitidos.sort());

