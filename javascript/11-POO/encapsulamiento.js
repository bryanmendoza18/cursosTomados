//encapsulación
//concentrar datos y funcionalidad ocultando datos internos.


function Empresa(nombre){
    let empleados = []
    this.nombre = nombre;

    this.obtenerEmpleados = function(){
        return empleados
    }

    this.anadirEmpleados = function(empleado){
        empleados.push(empleado)
    }
}


const empresa1 = new Empresa('Coca Cola');
const empresa2 = new Empresa('Pepsi');


empresa1.anadirEmpleados({nombre: "Dana"});
empresa2.anadirEmpleados({nombre: 'Juan'});

console.log(empresa1.obtenerEmpleados());
console.log(empresa2.obtenerEmpleados())

