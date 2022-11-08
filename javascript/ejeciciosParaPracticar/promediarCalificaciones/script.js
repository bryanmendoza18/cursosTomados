
//TITULO
document.getElementById('titulo').style.textAlign = 'center'


function cambiarColorTitulo(cambiar){
    cambiar.style.color = 'orange'
}

function dejarCambiar(cambiar){
    cambiar.style.color = ''
}

//BOTÓN VER ENUNCIADO
document.getElementById('btn').style.width = '150px'
document.getElementById('btn').style.height = '50px'
document.getElementById('btn').style.fontSize = '15px'


function btnEnunciado(enunciado){
    
    document.getElementById('parrafo').innerHTML = 'Se debe realizar un programa que pida al usuario 3 notas y mostrar por pantalla su resultado, tomando en cuenta que solo debe digitar valores dentro del rango y no dejar ningun campo vació de lo contrario mostrará un mensaje de error'
    document.getElementById('parrafo').style.fontSize = '20px'

}

function lime(evento){
    evento.style.backgroundColor = 'lime'
    evento.style.border = '2px solid green'
}

function blanco(evento){
    evento.style.backgroundColor = 'white'
    evento.style.border = '2px solid purple'
    
}

//CONTENEDOR
document.getElementById('contenedor').style.margin = '0 auto'
document.getElementById('contenedor').style.width = '50vw'
document.getElementById('contenedor').style.height = '50vh'
document.getElementById('contenedor').style.marginTop = '70px'
document.getElementById('contenedor').style.textAlign = 'center'



//creando imagen1
const img1 = document.createElement('img');
img1.setAttribute('src', 'https://w7.pngwing.com/pngs/327/313/png-transparent-emoji-party-hat-confetti-celebration-icon-thumbnail.png');

resultados.innerHTML = "";

//creando imagen2
const img2 = document.createElement('img');
img2.setAttribute('src', 'https://png.pngtree.com/png-clipart/20210710/ourlarge/pngtree-3d-sad-emoji-png-png-image_3578959.jpg')
resultados.innerHTML = "";



//boton calcular
function btnCalcular(){
    let valorMaximo = 10
    let valorMinimo = 1
    let nota1 = document.getElementById('operandoUno')
    let nota2 = document.getElementById('operandoDos')
    let nota3 = document.getElementById('operandoTres')
    
    

    let resultado = ((  parseInt(nota1.value)  + parseInt(nota2.value) + parseInt(nota3.value)  ) / 3).toFixed(1)
    
    //
    if( nota1.value == '' || nota2.value == '' || nota3.value == '' ){
        document.getElementById('resultados').innerText = 'Necesitas digitar todos los campos' 
        
     }
     else{

        if(  (nota1.value >= valorMinimo  && nota2.value >= valorMinimo && nota3.value >= valorMinimo)  &&  (nota1.value <= valorMaximo && nota2.value <= valorMaximo  && nota3.value <= valorMaximo) ){

            if( resultado >= 7  ){
                document.getElementById('resultados').innerText = 'Felicidades pasaste, tu promedio fue de :' + ' ' + resultado; 

                resultados.appendChild(img1)
                

            }
            else{
                document.getElementById('resultados').innerText = 'Lo sentimos reprobaste, tu promedio fue de:' + ' ' + resultado;

                resultados.appendChild(img2)
            }
    
        }
        else{
            document.getElementById('resultados').innerText = 'Solo puedes ingresar valores en rango de 1-10' 
        }
        
     }
     //
    
    

}

//parrafo resultados
 document.getElementById('resultados').style.fontSize = '20px'
 document.getElementById('resultados').style.color = 'red'



function amarillo(evento){
    evento.style.backgroundColor = 'yellow'
}






