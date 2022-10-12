/*
Pedir tres números enteros con un valor del 1 al 10, sacar el promedio de los tres números y mostrar true si el promedio es mayor a 5 caso contrario mostrar false, utilizar el operador ternario
*/

let n1 = 8, n2 = 10, n3 = 5;
let promedio = (n1 + n2 + n3) / 3;


let resultado = ( promedio > 5) ? true: false;

console.log(resultado);