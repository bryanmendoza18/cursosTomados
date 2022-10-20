//CLASE PADRE
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
}

//CLASE HIJA
//para heredar de una clase padre usamos **extends** seguido del nombre de la clase que queremos heredar.
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}




//creando Objeto
let persona1 = new Persona('Bryan', 'Mendoza');


//crendo objeto clase hija
let empleado1 = new Empleado('Juan', 'Ortíz', 'Sistemas');



console.log(empleado1)
