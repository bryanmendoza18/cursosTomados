//tema: Paso de argumentos a Call
//no se usa this...ya que son parametros de nuestro metodo no se usa this...ya que no son propiedades de nuestro objeto.

let persona1 = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + '  ' + this.apellido + '  ' + telefono;
    }
}

let persona2 = {
    nombre: 'Tomas',
    apellido: 'Mendoza'
}

console.log(persona1.nombreCompleto('Ing. ', '0987168312'));

console.log(persona1.nombreCompleto.call(persona2, 'Lic.', '0980234903284'));

