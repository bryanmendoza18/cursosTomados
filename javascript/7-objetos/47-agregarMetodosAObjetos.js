//agregar un metodo
//concatenar el valor de nombre y apellido

const persona = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    email: 'bryanmen1811@gmail.com',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
    
}

console.log(persona.nombreCompleto())



