/*4. Escriba un programa que solicite al usuario ingresar un número del 1 al 7
representando un día de la semana. Guardar el programa en un archivo
diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
- Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
- Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
- Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
- Y así sucesivamente ...
- Para cualquier otro número, muestra por consola el mensaje: "Número
inválido".
NOTA: utilizar la sentencia switch-case.*/

const readlineSync = require('readline-sync');
const mensaje = readlineSync.question('Ingrese un numero del 1 al 7:\n');

let diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

switch (mensaje) {
    case "1":
        console.log("Hoy es %s", diasDeLaSemana[0]);
        break;
    case "2":
        console.log("Hoy es %s", diasDeLaSemana[1]);
        break;
    case "3":
        console.log("Hoy es %s", diasDeLaSemana[2]);
        break;
    case "4":
        console.log("Hoy es %s", diasDeLaSemana[3]);
        break;
    case "5":
        console.log("Hoy es %s", diasDeLaSemana[4]);
        break;
    case "6":
        console.log("Hoy es %s", diasDeLaSemana[5]);
        break;
    case "7":
        console.log("Hoy es %s", diasDeLaSemana[6]);
        break;
    default:
        console.log("El numero ingresado es incorrecto");
}
