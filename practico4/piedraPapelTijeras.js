/*PIEDRA-PAPEL-TIJERAS
El objetivo de este práctico es desarrollar un programa sencillo en JavaScript que permite jugar
al famoso juego de "Piedra, Papel o Tijeras" contra la computadora.
Descripción:
El juego de "Piedra, Papel o Tijeras" es un juego de manos en el que dos jugadores eligen entre
tres opciones: piedra, papel o tijeras. Las reglas son las siguientes:
- La piedra vence a las tijeras.
- Las tijeras vencen al papel.
- El papel vence a la piedra.
El programa que desarrollarás permitirá al usuario jugar contra la computadora. La computadora
elegirá una opción de forma aleatoria, y el usuario podrá ingresar su elección a través de la
consola. El programa determinará el ganador y mostrará el resultado por pantalla.
Pasos a seguir:
1. Crea un nuevo archivo JavaScript con nombre piedraPapelTijeras.js.
2. Crea una función llamada obtenerJugadaComputadora que generará un número
aleatorio entre 0 y 2 para representar las opciones:
- 0 para "piedra",
- 1 para "papel" y
- 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.
Ayuda1: Utilizar alguna estructura de datos para almacenar la relación entre los valores
numércios y los strings “piedra”, “papel” y “tijeras.
Ayuda2: revisar en el teórico cuál es la función de la librería Math que genera un número
random.
3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su
elección a través de la consola. Los valores posibles son: piedra, papel o tijeras.
Ayuda: revisa en el práctico de condicionales, como solicitar al usuario que ingrese un
valor por consola.
4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una
variable.
b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
c) Invoca la función determinarGanador pasando como argumentos las jugadas de
la computadora y del usuario. Almacena el resultado en una variable.
6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
resultado:
La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario].
El resultado fue: [Empate | Gana la computadora | Gana el usuario].
NOTA: no es necesario imprimir todo el mensaje en una sola línea, se puede imprimir en
tres párrafos.
EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el
código para su correcta utilización.
EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el
juego, es decir:
● Una jugada: gana el ganador de esa única jugada.
● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que
el usuario gane una jugada y la computadora la otra.
● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.
*/

/*Obtiene la jugada de la computadora a traves de un numero aleatorio entre 0 y 2 que se corresponda con piedra, 
papel o tijera. Siendo 0 para "piedra", 1 para "papel" y 2 para "tijeras"*/
function obtenerJugadaComputadora() {
    let computadora = Math.floor(Math.random() * 3);
    if (computadora === 0) {
        computadora = "piedra";
    } else if (computadora === 1) {
        computadora = "papel";
    } else {
        computadora = "tijeras";
    }
    return computadora;
}

// Obtiene la jugada del usuario a traves de la eleccion de piedra, papel o tijeras como opciones posibles.
const readlineSync = require('readline-sync');
function obtenerJugadaUsuario() {
    let usuario = readlineSync.question('Escribe la opcion elegida entre piedra, papel o tijeras: ');
    while(usuario !== "piedra" && usuario !== "papel" && usuario !== "tijeras"){
        usuario = readlineSync.question('Escribe la opcion elegida entre piedra, papel o tijeras: ');
    }
    return usuario.toLowerCase();
}

/*Determina al ganador de la jugada de acuerdo a las reglas, tomando como parámetros las jugadas de la computadora 
y del usuario. Luego retorna el resutado. Las reglas son:
- La piedra vence a las tijeras.
- Las tijeras vencen al papel.
- El papel vence a la piedra..*/
function determinarGanador(jugadaComputadora, jugadaUsuario) {
   let resultado;
    if ((jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") || (jugadaComputadora === "papel" && jugadaUsuario === "piedra") || (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")) {
        resultado = "Gana la computadora";
    } else if ((jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") || (jugadaUsuario === "papel" && jugadaComputadora === "piedra") || (jugadaUsuario === "tijeras" && jugadaComputadora === "papel") ) {
        resultado = "Gana el usuario";
    } else {
        resultado = "Empate";
    }
    return resultado;
}

//Llama a las funciones en el orden adecuado para ejecutar el juego e imprime por pantalla el resultado del juego.
function jugarPiedraPapelTijeras(){
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const ganador = determinarGanador(jugadaComputadora, jugadaUsuario);
    console.log(`La computadora eligio: ${jugadaComputadora}. El usuario eligio: ${jugadaUsuario}. El resultado fue: ${ganador}.`);
}
jugarPiedraPapelTijeras();

