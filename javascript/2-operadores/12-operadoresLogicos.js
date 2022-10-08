//AND 

let a = 5;
let valorMinimo = 0;
let valorMaximo = 10;

if (a >= valorMinimo && a <= valorMaximo){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango")
}


// OR ||

//si un padre puede asistir a ver el juego del hijo solo puede asistir a ver el juego del hijo siempre y cuando tenga un día de descanso o tenga vacaciones, caso contrario no podrá asisitr al juego del hijo.


let vacaciones = false;
let diaDescano = false;

if ( vacaciones || diaDescano ) {
    console.log("Padre puede asistir");
} 
else{
    console.log("Padre está ocupado");
}