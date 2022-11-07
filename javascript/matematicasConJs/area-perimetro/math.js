//calcular el perímetro del cuadrado

document.getElementById('cuadrado').style.width = '150px';
document.getElementById('cuadrado').style.height = '150px';
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

//TRIANGULO
function btnCalcularTriangulo(){
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let ladoBase = document.getElementById('ladoBase').value;
    let altura = document.getElementById('altura').value;
    let perimetroTriangulo = parseInt(lado1) + parseInt(lado2) + parseInt(ladoBase)
    let areaTriangulo =  (ladoBase * altura) / 2;

    document.getElementById('perimetroTriangulo').innerText = `El perímetro es: ${perimetroTriangulo}`;
    document.getElementById('areaTriangulo').innerText = `El área es: ${areaTriangulo} cm`
}

