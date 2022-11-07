//calcular el perímetro del cuadrado

document.getElementById('cuadrado').style.width = '200px';
document.getElementById('cuadrado').style.height = '200px';
document.getElementById('cuadrado').style.backgroundColor = 'orange';

document.getElementById('medidas').style.width = '50px'
document.getElementById('boton').style.width = '100px'




function btnCalcularCuadrado(){
    let ladoCuadrado = document.getElementById('medidas').value;
    let perimetroCuadrado = ladoCuadrado* 4
    let areaCuadrado = ladoCuadrado ** 2;

    document.getElementById('perimetro').innerText= 'El perímetro es: ' + ' ' + perimetroCuadrado

    document.getElementById('area').innerText= 'El area es: ' + ' ' + areaCuadrado + ' cm2'
    
}



// let lado1 = 6;
// let lado2 = 6;
// let base = 4;
// let altura = 5.5;

// let perimetro = lado1 + lado2 + base;
// let area = (base * altura) / 2;

// console.log(`El perimetro del triángulo es: ${perimetro}, y su altura de: ${altura}`)


