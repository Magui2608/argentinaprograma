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

    while (usuario !== "piedra" && usuario !== "papel" && usuario !== "tijeras") {

        usuario = readlineSync.question('Eleccion Incorrecta.Escribe la opcion elegida unicamente entre piedra, papel o tijeras: ');
    }
    return usuario.toLowerCase();
}

/* EXTRA 1. Determina quien es el ganador de la jugada definiendo constantes para cada jugada, 
adapantando el codigo para su correcta utilizacion.*/
const opcionPiedra = "piedra";
const opcionPapel = "papel";
const opcionTijeras = "tijeras";
const opcionesJugadas = [opcionPiedra, opcionPapel, opcionTijeras];

const ganadorComputadora = "Gana la computadora";
const ganadorUsuario = "Gana el usuario";
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    let resultado;
    for (i = 0; i < opcionesJugadas.length; i++) {

        if ((jugadaComputadora === opcionPiedra && jugadaUsuario === opcionTijeras) || (jugadaComputadora === opcionPapel && jugadaUsuario === opcionPiedra) || (jugadaComputadora === opcionTijeras && jugadaUsuario === opcionPapel)) {
            
            resultado = ganadorComputadora;

        } else if (jugadaUsuario === jugadaComputadora) {

            resultado = "Empate";

        } else {

            resultado = ganadorUsuario;
        }
    }
    return resultado;
}


//EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el juego

function jugarPiedraPapelTijeras() {

    let rondas = readlineSync.questionInt('Seleccione en cuantas jugadas quiere terminar el juego (1, 2 o 3): ');
    
    while (rondas !== 1 && rondas !== 2 && rondas !== 3) {
        console.clear();
        rondas = readlineSync.questionInt('Numero incorrecto. Seleccione en cuantas jugadas quiere terminar el juego (1, 2, o 3): ');
    }

    let jugadaComputadora;
    let jugadaUsuario;
    let ganador;

    let jugadasGanadasComputadora = 0;
    let jugadasGanadasUsuario = 0;
   
    for (let i = 1; i <= rondas; i++) {

        jugadaComputadora = obtenerJugadaComputadora();
        jugadaUsuario = obtenerJugadaUsuario();
        ganador = determinarGanador(jugadaComputadora, jugadaUsuario);

        console.log(`La computadora eligio: ${jugadaComputadora}. El usuario eligio: ${jugadaUsuario}. El resultado fue: ${ganador}.`);

        if (ganador === ganadorComputadora) {

            jugadasGanadasComputadora++;

        } else if (ganador === ganadorUsuario) {
            
            jugadasGanadasUsuario++;

        } else {
            
            jugadasGanadasComputadora += 0;
            jugadasGanadasUsuario += 0;
        }
    }

    let resultadoFinal; 

    if (jugadasGanadasComputadora > jugadasGanadasUsuario) {

        resultadoFinal = ganadorComputadora;

    } else if (jugadasGanadasComputadora === jugadasGanadasUsuario) {

        resultadoFinal = "Empate";

    } else {

        resultadoFinal = ganadorUsuario;
    }

    console.log(`El resultado final del juego fue: ${resultadoFinal}.`);
}

jugarPiedraPapelTijeras();
