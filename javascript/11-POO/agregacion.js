//Objeto empleado
const empresa = {
    nombre : 'mendoza corporation',
    empleados: []
}


//CLASE PERSONA
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
}


const persona1 = new Persona('Bryan', 'Mendoza');
const persona2 = new Persona('Juan', 'Lara');

//asociar a las dos personas para que este esten dentro del objeto empresa y como empleados
empresa.empleados.push(persona1)
empresa.empleados.push(persona2)

console.log(empresa)
