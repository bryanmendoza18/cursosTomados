//paso por referencia
// cuando se crea un objeto una buena practica sería definirla como tipo constante
//CREAR UN OBJETO PERSONA


const persona = {
    nombre: 'Bryan',
    apellido: 'Mendoza'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Juan';
    p1.apellido = 'Perez'
}


//PASO POR REFERENCIA
cambiarValorObjeto(persona);
console.log(persona);





