

//Llamadas asíncronas con uso de setTimeout
function miFuncionCallback(){
    console.log('Saludo asíncrono después de 3 segundos');
}

setTimeout(miFuncionCallback, 3000); //se ejecutará después de 3 seg

setTimeout(function() {console.log('saludo asíncrono 2')}, 4000);

setTimeout( () => console.log('saludo asíncrono 3'), 1000  );