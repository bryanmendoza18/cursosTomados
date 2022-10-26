//dentro de una función se manda a llamar otra función

//function tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`)

}

sumar(5, 3, imprimir);
