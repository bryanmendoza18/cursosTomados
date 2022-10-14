//distintas formas de imprimir un objecto



let persona = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    email: 'bryanmen1811@gmail.com',
    edad: 22
}
//concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for ( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]) //recorriendo valores de todas las propiedades
}


//regresa objeto como un arreglo --acedemos a todos los valores de las propiedades
let personaArray  = Object.values( persona );
console.log(personaArray);


// stinggify = convierte cada uno de los valores de las propiedad a una cadena
let personaSting = JSON.stringify(persona);
console.log(personaSting)

