//tema : Método call
//Permite llamar un metodo que está definido en un objeto desde otro objeto

let persona1 = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Tomas',
    apellido: 'Mendoza'
}

console.log(persona1.nombreCompleto.call(persona2));