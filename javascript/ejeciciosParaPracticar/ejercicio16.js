/*
Escriba un programa que pueda calcular el área 3 figuras geométricas, triángulo, rectángulo y círculo. 
*/

// 1 triangulo, 2 rectangulo, 3 circulo
let figura = 3;
let altura = 8;
let base = 5;
let radio = 4;
const pi = 3.1416;


switch(figura){
    case 1:
        console.log(`El area del triángulo es ${(base*altura)/2} `);
        break;

    case 2:
        console.log(`El area del rectángulo es ${(base*altura)} `);
        break;

    case 3:
        console.log(`El area del triángulo es ${pi * radio **2} `);
        break;

}







