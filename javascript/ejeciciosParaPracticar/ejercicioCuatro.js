/*
Juan tiene N dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen Juan y David juntos. Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo
*/

let juan = 10;
let david = juan / 2;
let jose = (juan + david) / 2;

let promedio = Math.round( (juan + david + jose) / 3);

console.log(`El promedio es de ${promedio} dólares `);






