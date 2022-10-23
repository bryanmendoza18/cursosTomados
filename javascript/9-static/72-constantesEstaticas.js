//declarar una variable tipo estatica solo de lectura, que no sea modificable


class Persona{
    
    static contadorPersonas = 0; //atributo estatico de nuestra clase.

    static get MAX_OBJ(){
        return 5;
    }
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido  = apellido;
        if(  Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el máximo de objeto permitidos')
        }

        
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
let empleado1 = new Empleado('Juan', 'Ortíz', 'Sistemas');
let persona2 = new Persona('Daniela', 'Lara');
let persona3 = new Persona('Juan', 'Cuadrado');
let persona4 = new Persona('Maria', 'Ibarra');
let persona5 = new Persona('Daniela', 'Muñoz')


//aqui en persona5 ya no se le asigna el id ya que supero los objetos permitidos
//console.log(persona5.toString()) // undefined Daniela Muñoz


console.log(Persona.MAX_OBJ); // 5 porque solo podemos crear 5 objetos de clase Persona, ya sea de la clase padre o hija
