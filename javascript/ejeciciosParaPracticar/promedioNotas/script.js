const titulo = document.querySelector('#tituloPrincipal');
const nombre = document.querySelector('#nombre')
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const btnCalcular = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')




titulo.innerHTML = 'Sistema de calificaciones';
nombre.placeholder = 'Ingresa tu nombre'
nota1.placeholder = 'Ingrese nota 1'
nota2.placeholder = 'Ingrese nota 2'
nota3.placeholder = 'Ingrese nota 3'



function btnOnclick(){
    let valorMinimo = 0;
    let valorMaximo = 10;
    let  promedio = ((parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) / 3).toFixed(1)

    if( (nota1.value >= valorMinimo  && nota2.value >= valorMinimo && nota3.value >= valorMinimo)  &&  (nota1.value <= valorMaximo && nota2.value <= valorMaximo  && nota3.value <= valorMaximo)   ){

        if(promedio >= 7){
            resultado.innerHTML = `Felcidades ${nombre.value} aprobaste 🎊 tu promedio fue de: ${promedio}`
        }
        else{
            resultado.innerHTML = `Lo sentimos ${nombre.value}, reprobaste 😢 tu promedio fue de: ${promedio}`
    
        }

    }
    else{
        resultado.innerHTML = 'Ingrese correctamente los valores'
    }


    
        

    


    
}




