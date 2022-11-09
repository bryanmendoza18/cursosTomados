//creando la clase 
class Persona{
    //agregando constructor
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido; 

    }

}

//creando objeto
let persona1 = new Persona('Bryan', 'Mendoza');
let persona2 = new Persona('Daniela', 'Lara');

console.log(persona1);
console.log(persona2);
