/* 2. Escribir un programa que convierta de grados celsius a grados farenheit. 
Pasar 10 ºC y 25ºC a grados ºF*/

let fahrenheit;
let celsius;

// Con 10 ºC
celsius = 10;
fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// Con 25 ºC
celsius = 25;
fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// Calcular el promedio general de la temperatura en grados celsuis

// 1. Pasar primero a grados celsius las temperaturas fahrenheit 
let temperaturasFahrenheit = [32,50,77,80,42,66,25,33,31,40,65,70];
let temperaturasCelsius = [];

temperaturasCelsius[0] = (temperaturasFahrenheit[0]-32) * 5/9;
temperaturasCelsius[1] = (temperaturasFahrenheit[1]-32) * 5/9;
temperaturasCelsius[2] = (temperaturasFahrenheit[2]-32) * 5/9;
temperaturasCelsius[3] = (temperaturasFahrenheit[3]-32) * 5/9;
temperaturasCelsius[4] = (temperaturasFahrenheit[4]-32) * 5/9;
temperaturasCelsius[5] = (temperaturasFahrenheit[5]-32) * 5/9;
temperaturasCelsius[6] = (temperaturasFahrenheit[6]-32) * 5/9;
temperaturasCelsius[7] = (temperaturasFahrenheit[7]-32) * 5/9; 
temperaturasCelsius[8] = (temperaturasFahrenheit[8]-32) * 5/9;
temperaturasCelsius[9] = (temperaturasFahrenheit[9]-32) * 5/9;
temperaturasCelsius[10] = (temperaturasFahrenheit[10]-32) * 5/9;
temperaturasCelsius[11] = (temperaturasFahrenheit[11]-32) * 5/9;
console.log(temperaturasCelsius);

// 2. Hacer el promedio de temperaturas en grados celsius
let promedioTemperaturasCelsius = (temperaturasCelsius[0]+temperaturasCelsius[1]+temperaturasCelsius[2]+temperaturasCelsius[3]+temperaturasCelsius[4]+temperaturasCelsius[5]+temperaturasCelsius[6]+temperaturasCelsius[7]+temperaturasCelsius[8]+temperaturasCelsius[9]+temperaturasCelsius[10]+temperaturasCelsius[11]) / temperaturasCelsius.length;
console.log(promedioTemperaturasCelsius);

//Otra forma de hacerlo en un paso
let promedioTemperaturasFahrenheit= (temperaturasFahrenheit[0]+temperaturasFahrenheit[1]+temperaturasFahrenheit[2]+temperaturasFahrenheit[3]+temperaturasFahrenheit[4]+temperaturasFahrenheit[5]+temperaturasFahrenheit[6]+temperaturasFahrenheit[7]+temperaturasFahrenheit[8]+temperaturasFahrenheit[9]+temperaturasFahrenheit[10]+temperaturasFahrenheit[11]) / temperaturasFahrenheit.length;
promedioTemperaturasCelsius = (promedioTemperaturasFahrenheit - 32) * 5 / 9;
console.log(promedioTemperaturasCelsius);



