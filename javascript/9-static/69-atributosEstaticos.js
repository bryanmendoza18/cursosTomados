
class Persona{
    
    static contadorObjetosPersona = 0; //definiendo atributos estáticos
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




console.log(persona1.contadorObjetosPersona); // undefined porque solo se puede acceder de la clase
console.log(Persona.contadorObjetosPersona); //2
console.log(Empleado.contadorObjetosPersona); //2





