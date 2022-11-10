
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI
console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
})


//usando función
function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2) // radio ** 2

    return{
        circunferencia: diametro * Math.PI.toFixed(2),
        area: radioAlCuadrado * Math.PI.toFixed(2)
    }
}


console.log(calcularCirculo(3))