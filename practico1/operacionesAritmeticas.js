//PARTE 2: COMANDOS BÁSICOS - 3. Operadores aritméticos:

//3.a. Crea cuatro variables que contengan valores numéricos.
let num1 = 1;
let num2 = 3;
let num3 = 4;
let num4 = 15;


//3.b. Suma las dos primeras variables y guarda el resultado en otra variable.
let resultadoSuma = num1 + num2;


//3.c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let resultadoResta = num4 - num3;


/*3.d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el 
resultado en una variable llamada resultadoFinal. El producto debe ser
44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.*/
let resultadoFinal = resultadoSuma * resultadoResta;


/*3.e. Escribe un cálculo que verifique si resultadoFinal es un número par.
Almacene el resultado en una variable llamada esPar.*/
let esPar = resultadoFinal % 2 === 0;


/*3.f. Imprima por consola un mensaje con el siguiente formato:
“Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La
respuesta a verificar si el resultado final es par es: [esPar]”*/
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s",num1,num2,num3,num4,esPar);

