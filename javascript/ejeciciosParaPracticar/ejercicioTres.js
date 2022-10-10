/*
Calcular el promedio de 3 calificaciones y mostrar por consola si pasó o no junto a su promedio. Además que solo pueda ingresar calificaciones dentro del rango de 0 - 10, caso contrario mostrar un mensaje “Ingrese correctamente los valores”. También su promedio debe mostrarse con un solo decimal.
*/

let estudiante = "Bryan Mendoza"
let n1 = 10;
let n2 = 9;
let n3 = 7;
let valorMinimo = 0;
let valorMaximo = 10;
let resultado = ((n1 + n2 + n3) / 3).toFixed(1)

if( (n1 >= valorMinimo  && n2 >= valorMinimo && n3 >= valorMinimo)  &&  (n1 <= valorMaximo && n2 <= valorMaximo  && n3 <= valorMaximo)   ){
    if ( resultado >= 7){
        console.log(`Felecidades 🎉 ${estudiante} pasaste tu promedio fue de: ${resultado}`);
    
    }
    else{
        console.log(`Lo siento 😢 ${estudiante} te quedaste tu promedio fue de: ${resultado} `);
    }
    
    
}
else{
    console.log('Ingrese correctamente los valores');
}     
