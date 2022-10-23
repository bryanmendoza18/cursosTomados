
class Persona{
    
    static contadorObjetosPersona = 0; //atributo estatico de nuestra clase
    email = 'Valor default email'; //atributos no estatico de nuestros objetos
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido  = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona )
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
        return this._nombre + ' ' + this._apellido;
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


let persona1 = new Persona('Bryan', 'Mendoza');

let empleado1 = new Empleado('Juan', 'Ortíz', 'Sistemas')



console.log(persona1.email);
console.log(empleado1.email);

//Salen undefined ya que no se asocian con las clases sino con los objeto
console.log(Persona.email);
console.log(Empleado.email)





