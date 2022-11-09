//llamar la función resolver en caso de que sea exitoso
//llamar la función rechazar en caso q presente un fallo
let miPromesa = new Promise( (resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
} );


//definiendo promesa
let promesa = new Promise( (resolver) => {
    setTimeout( () => resolver('saludos con promesa y timeout'), 3000 );
} );

promesa.then(valor => console.log(valor));