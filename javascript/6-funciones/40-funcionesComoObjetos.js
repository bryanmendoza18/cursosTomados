
function miFuncion(a, b){
    //queresmos saber cuantos argumentos se ha definido en la función
    console.log(arguments.length) //para saber cuantos arg tiene nuestra función y esta solo se podrá usar dentro de la función. no se podra usar fuera del bloque de la funcion

    return a + b;
}

miFuncion(10, 3)
