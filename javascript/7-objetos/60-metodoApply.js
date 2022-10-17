//tema : Método apply

let persona1 = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + '  ' + telefono;
    }

}

let persona2 = {
    nombre: 'Tomas',
    apellido: 'Mendoza'
}

//Uso de apply para usar
//el método persona1.nombreCompleto con los datos de persona2

console.log(persona1.nombreCompleto('Lic', '0987168312'));


let arreglo = ['Ing', '902934859']
console.log(persona1.nombreCompleto.apply(persona2, arreglo))


