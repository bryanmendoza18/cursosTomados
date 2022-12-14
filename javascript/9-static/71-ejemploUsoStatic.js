
class Persona{
    
    static contadorPersonas = 0; //atributo estatico de nuestra clase
    email = 'Valor default email'; //atributos no estatico de nuestros objetos
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido  = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return  this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //sobreescribiendo el método de la clase Padre (Object)
    //Se aplica polimorfismo
    toString(){
        return this.nombreCompleto()
    }

    //agregando método estático
    static saludar(){
        console.log('Saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}



class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre, apellido)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescribiendo 
    nombreCompleto(){
        return super.nombreCompleto( )+ ', ' + this._departamento;
    }
    
}

//creando objetos
let persona1 = new Persona('Bryan', 'Mendoza');
let empleado1 = new Empleado('Juan', 'Ortíz', 'Sistemas')
let persona2 = new Persona('Daniela', 'Lara')


console.log(persona1.toString()); //1 Bryan Mendoza
console.log(empleado1.toString()); //2 Juan Ortíz, Sistemas
console.log(persona2.toString()); //3 Daniela Lara

console.log(Persona.contadorPersonas); //3 porq son 3 objetos q se han creado

console.log(Empleado.contadorPersonas); //3






