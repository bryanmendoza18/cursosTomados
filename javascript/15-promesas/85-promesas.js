//llamar la función resolver en caso de que sea exitoso
//llamar la función rechazar en caso q presente un fallo
let miPromesa = new Promise( (resolver, rechazar) => {
    let expresion = false;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
} );

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );

//usando catch ---otra sintaxis
miPromesa.
then( valor => console.log(valor) )
.catch( error => console.log(error));