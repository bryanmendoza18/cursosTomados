let resultado = '';

try{

    if(isNaN(resultado)) throw 'No es un número ';
    else if(  resultado === ' ') throw 'Es una cadena vacía' 
}
catch(error){
    console.log(error);
}

