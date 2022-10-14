let persona = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    email: 'bryanmen1811@gmail.com',
    edad: 22
}

console.log(persona['nombre']);

//for in

for ( nombrePropiedad in persona){
    console.log( nombrePropiedad )
    console.log(persona[nombrePropiedad])
}


