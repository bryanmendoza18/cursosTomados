//titulo : Agregar métodos a un método constructor de objetos

function Persona(nombre, apellido, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Objeto estudiante
let estudiante = new Persona('Bryan', 'Mendoza', '0987168312');

//Objeto profesor
let profesor = new Persona('Pablo', 'Perez', '0912345678');

console.log(estudiante.nombreCompleto());
console.log(profesor.nombreCompleto());

