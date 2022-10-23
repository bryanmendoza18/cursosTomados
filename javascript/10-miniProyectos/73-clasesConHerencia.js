/*
- Crear una clase padre y dos clases hijas.
- Las clases hijas heredaran los atributos de clase padre.
- Se debe hacer uso de un atributo estático **contadorPersonas** para que cada objeto tenga un id
- Hacer uso del método **toString**
- usar **new Date()** para crear una fecha actual
*/


//CLASE PADRE
class Persona{

    static contadorPersonas = 0;

    constructor(nombre , apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
        
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
        this._apellido = this.apellido
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    
    //método toString
    toString(){
        return  'ID: ' + this.idPersona + ' Nombre: ' + ' ' +  this._nombre  + ' ' + this._apellido + ' Edad: ' + this._edad;
    }

}

//CLASE HIJA EMPLEADO
class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString( )  + ', '  + 'Sueldo: ' + this._sueldo;
    }
    
}


//CLASE HIJA CLIENTE
class Cliente extends Persona{
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._fechaRegistro = fechaRegistro;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString( )  + ',  ' +'Fecha registro: ' +  this._fechaRegistro;
    }
    
}


//creando objetos
let persona1 = new Persona('Bryan', 'Mendoza', 22, 33);
let empleado1 = new Empleado('Hilda', 'Guaman', 41, 5000);
let cliente1 = new Cliente('Tomas', 'Mendoza', 43, new Date());



console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());

console.log('Existen ' + Persona.contadorPersonas + ' objetos');
