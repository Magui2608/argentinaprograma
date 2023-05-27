//let jugador1 = ['Juan','arquero',22];
//let jugador2 = ['Pedro','defensor',25];
//console.log(jugador1[0]);

//let jugador1 = {nombre:'Juan', posicion:'arquero', edad:22};
//console.log(jugador1.nombre);
//console.log(jugador1.posicion);

//let jugador2 = {nombre:'Pedro', posicion:'defensor', edad:25};
//console.log(jugador2.nombre);
//console.log(jugador2.posicion);

//let equipo = [jugador1, jugador2];
//console.log(equipo);
//console.log(equipo[0]);
//console.log(equipo[1].edad);
//console.log(equipo[1].posicion);
//console.log('Posicion del jugador 2:',equipo[1].posicion);

/*EJERCICIO: Queremos representar un equipo de futbol 5. Para ello necesitamos tener el nombre de cada jugador, 
su posicion y su edad A.¿Cómo representamos cada jugador? B.¿Cómo representamos un equipo? */
// 5 jugadores: 1 arquero, 1 defensor, 2 mediocampistas y 1 delantero

//A.Representar cada jugador
let jugador1 = {nombre:'Juan', posicion:'arquero', edad:22};
let jugador2 = {nombre:'Pedro', posicion:'defensor', edad:25};
let jugador3 = {nombre:'Luis', posicion:'mediocampista', edad:24};
let jugador4 = {nombre:'Jose', posicion:'mediocampista', edad:21};
let jugador5 = {nombre:'Andres', posicion:'delantero', edad:23};
console.log(jugador1);
console.log(jugador2);
console.log(jugador3);
console.log(jugador4);
console.log(jugador5);

//B.Representar el equipo
let equipo = [jugador1, jugador2, jugador3, jugador4, jugador5];
console.log(equipo);

//Representar por nombre de cada jugador
console.log('Nombre del jugador 1:',jugador1.nombre);
console.log('Nombre del jugador 2:',jugador2.nombre);
console.log('Nombre del jugador 3:',jugador3.nombre);
console.log('Nombre del jugador 4:',jugador4.nombre);
console.log('Nombre del jugador 5:',jugador5.nombre);

// Representar por posicion de cada jugador en el equipo
console.log('Posicion del jugador 1:',equipo[0].posicion);
console.log('Posicion del jugador 2:',equipo[1].posicion);
console.log('Posicion del jugador 3:',equipo[2].posicion);
console.log('Posicion del jugador 4:',equipo[3].posicion);
console.log('Posicion del jugador 5:',equipo[4].posicion);

console.log('Posicion de ',equipo[0].nombre, 'es ',equipo[0].posicion);

console.log('Posicion de ' + equipo[1].nombre + ' es ' + equipo[1].posicion);




