
//ESTO NO ES POSIBLE: crear objetos antes de declarar la clase.
//No se aplica el concepto de hoisting
let persona2 = new Persona('Daniela', 'Lara')

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre;
    }
    //modificar valores
    set nombre(nombre){
        this._nombre = nombre;
    }
}

//creando objeto
let persona1 = new Persona('Bryan', 'Mendoza');

//llamando método set
persona1.nombre = 'Juan' //set nombre('Juan')


console.log(persona1.nombre) //get nombre
