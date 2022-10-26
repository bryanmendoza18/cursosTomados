
class Person{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
}

const john = new Person('john', 'ray');
const maria = new Person('maria', 'perez');

//relación
maria.parent = john // maria tiene como padre a john

console.log(maria);
