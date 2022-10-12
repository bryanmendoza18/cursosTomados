
 let sumar = function(a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];

 } 

 resultado = sumar(3, 6, 7);
 console.log(resultado);
