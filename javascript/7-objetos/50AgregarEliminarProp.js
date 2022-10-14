//Agregar y eliminar propiedades a nuestro objeto

let persona = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    email: 'bryanmen1811@gmail.com',
    edad: 22
}


persona.telefono = '123456'; //agregar propiedad
persona.telefono = '0987168312'; //modificando propiedad 
console.log(persona)

//eliminando propiedadad
delete persona.telefono;  //borra propiedad junto a su valor

console.log(persona)