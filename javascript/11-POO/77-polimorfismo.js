
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


function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}



let empleado1 = new  Empleado('Juan', 400)
let gerente1 = new Gerente('Bryan', 2500, 'Sistemas');

imprimir(empleado1);
imprimir(gerente1);

