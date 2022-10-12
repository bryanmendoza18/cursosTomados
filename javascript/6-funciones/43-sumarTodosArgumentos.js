//Sumar todo los argumenos
//en js siempre y cuando no usemos la funcion de flecha podemos aplicar  el concepto de hosting es decir que podemos usar nuestra funcion en una parte del archivo  antes de haberle declarado...
//asi q primero vamos a mandar a llamar la función y luego definirla

let resultado = sumarTodo(5, 4, 13, 10, 9);//podemos pasar muchos argumentos
console.log(resultado)


function sumarTodo(){
    let suma = 0;
    for (i = 0; i < arguments.length; i++){
        suma += arguments[i];  //suma = suma + arguments[i]
    } 
    return suma;
}



