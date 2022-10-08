// ver como verificar el valor de una variable sea de tipo numero.
//Not a Number = no es un número

let miNumero = "17x";
let edad = Number(miNumero);

console.log(edad); //NaN

if ( isNaN(edad) ){
    console.log("No es un número");
}
else{
    let z = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
}