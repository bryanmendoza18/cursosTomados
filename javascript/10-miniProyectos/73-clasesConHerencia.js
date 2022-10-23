/*
MINIPROYECTO
- Crear una clase padre y dos clases hijas.
- Las clases hijas heredaran los atributos de clase padre.
- Se debe hacer uso de un atributo estático **contadorPersonas** para que cada objeto tenga un id
- Hacer uso del método **toString**
- usar **new Date()** para crear una fecha actual
*/

//CLASE PADRE: PERSONA
class Persona{
    static contadorPersonas = 0;

    constructor( nombre, apellido, edad ){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return ` ID: ${this._idPersona}, Nombre: ${this._nombre} ${this._apellido}, Edad: ${this._edad}, `
    }

}

//CLASE HIJA : Empleado
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido,edad)
        
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}  Sueldo:  ${this._sueldo} IdEmpleado: ${this._idEmpleado} ;`
       
    }

}


//CLASE HIJA: CLIENTE
class Cliente extends Persona{
    static contadorClientes = 0;
    
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;

    }
    get idCliente(){
        return this.idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + 'Fecha-Registro: ' + this._fechaRegistro + ' idCliente: ' + this._idCliente;
    }
}

//creando objetos
let persona1 = new Persona('Bryan', 'Mendoza', 22);
let persona2 = new Persona('Juan', 'Correa', 41)

let empleado1 = new Empleado('Carolina', 'Guzmán', 29, 500)
let empleado2 = new Empleado('Efrain', 'Lópex', 43, 800)

let cliente1 = new Cliente('Carmen', 'Lara', 43, new Date())
let cliente2 = new Cliente('Juan', 'Cuadrado', 20, new Date())
let cliente3 = new Cliente('Cristian', 'Cepeda', 23, new Date())

console.log(persona1.toString());
console.log(persona2.toString());

console.log(empleado1.toString());
console.log(empleado2.toString());

console.log(cliente1.toString());
console.log(cliente2.toString());
console.log(cliente3.toString());