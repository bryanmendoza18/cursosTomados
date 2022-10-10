/*
Pedir un número y decir si es un número negativo, si es positivo o cero.

nota: Solo se debe permitir ingresar números caso contrario debe mostrar un mensaje “No es un número”
*/

let numero1 = 100;
let resultado;

if (isNaN(numero1)){
    resultado = "No es un número";
}
else{

    if (numero1 > 0 ){
        resultado = numero1 + " Es un número positivo";
    }
    else if (numero1 < 0){
        resultado = numero1 + " Es negativo"; 
    }
    else if( numero1 == 0){
        resultado = numero1 + " Es cero";
    
    }
}

console.log(resultado);
      
       
       