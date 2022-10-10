//Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente. Además que sólo se pueden ingresar número dentro del rango de 0-10.


let nota = 7;
let notaMinima = 0;
let notaMaxima = 10;
let resultado;

if( nota >= notaMinima &&  nota <= notaMaxima){
    if( nota > 8){
        resultado = "Excelente";
   }
   else if(nota > 7 ){
        resultado = "Muy Bien";
   
   }
   else if(nota == 7){
        resultado = "Suficiente";
   
   }
   else if( nota < 7){
        resultado = "Insuficiente";
   
   }
  }
else{
     resultado = "Solo se permite ingresar números de 0 - 10";
  }

  console.log(resultado)

