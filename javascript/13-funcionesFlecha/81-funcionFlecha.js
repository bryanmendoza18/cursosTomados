//con el uso de función flecha "No hace uso del hoisting"


//let miFuncionFleca = () => console.log('Hola mundo')
//let resultado = miFuncionFleca();

const saludar2 = () => {
     return 'Saludos desde función flecha'
    }

const saludar = () => console.log('Saludos desde función flecha');

//regresando un objeto
const regresaObjeto = () => ({nombre: 'Bryan', apellido: 'Mendoza'})
console.log(regresaObjeto())


//función flecha con parámetros
const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros('saludos con parámetros');


const funcionx = mensaje => console.log(mensaje);
funcionConParametros('saludos')

//función con varios parámetros

//const funcionConParametros = (a, b) => a + b;

const funcionConVariosParametros = (a, b) =>{
    let resultado = a + b;
    return resultado;
};

console.log(funcionConVariosParametros(3,5) )

