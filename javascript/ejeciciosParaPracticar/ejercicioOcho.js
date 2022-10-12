//Crear un número aleatorio entre el 1 y 20, si es par mostrar "Es un número par"seguido el número si es impar mostrar  "Es un número impar" seguido del número, utilizar el operador ternario.

let min = 1;
let max =  20;
let numRamdom = Math.floor(Math.random()*(max - min) + min);

let resultado = (numRamdom % 2 === 0) ? 'Es un número par': 'Es un número impar';

console.log(` ${numRamdom} : ${resultado}`);


