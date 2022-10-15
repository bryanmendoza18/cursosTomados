//tema : Uso de prototype

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido,
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    
}

//agregar propiedad telefono para todos los objetos de tipo Persona
Persona.prototype.telefono = '1234567890'

//Objeto hijo
let hijo = new Persona('Bryan', 'Mendoza', 'bryanmen1811@gmail.com');
hijo.telefono = '0987168312'; //modificando valor solo para hijo

//Objeto padre
let padre = new Persona('Tomas', 'Mendoza', 'tomasmendoza1@gmail.com');

console.log(padre.telefono);
console.log(hijo.telefono);


