//Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».


function numeroMayor(n1, n2, n3){
    if ( n1 > n2 && n1 > n3 ){
        return n1;
    }
    else if ( n2 > n1 && n2 > n3 ){
        return n2;

    }
    else if (n3 > n1 && n3 > n2){
        return n3;

    }
   
    else{
        return 'son iguales'
    }

}

console.log(numeroMayor(7, 7, 7));