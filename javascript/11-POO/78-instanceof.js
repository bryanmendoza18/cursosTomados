
class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;

    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, Sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo)
        this._departamento = departamento;
    }
    //sobreescribiendo
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, Departamento: ${this._departamento}`
    }
   
}


function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo gerente'); 
    }
    else if(tipo instanceof Empleado){
        console.log('Es un tipo Empleado')
    }
    else if(tipo instanceof Object){
        console.log('Es un tipo Object')
    }
}

let empleado1 = new  Empleado('Juan', 400)
let gerente1 = new Gerente('Bryan', 2500, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);

