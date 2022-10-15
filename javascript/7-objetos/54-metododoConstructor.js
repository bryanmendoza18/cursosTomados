//es mejor ponerle en mayucula  a los metodos q seran constructores
//new -se crea un nuevo objeto en memoria

//Función constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

}

//objeto padre
let padre = new Persona('Thomas', 'Mendoza', 'tomasmendoza1@gmail.com');
padre.nombre = 'Tomas'; //modificación 

//objeto madre
let madre = new Persona('Hilda', 'Guaman', 'hildaguaman2@gmail.com');

console.log(padre);
console.log(madre);


