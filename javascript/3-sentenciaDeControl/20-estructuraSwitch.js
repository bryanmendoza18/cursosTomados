let numero = 3;
let numeroTexto = "valor desconocido";

switch( numero ){
    case 1:
        numeroTexto = "Número uno";
        break; // para q termine de ejecutarse, de lo contrario seguirá con el siguiente caso
    case 2:
        numeroTexto = "Número dos";
        break;

    case 3:
        numeroTexto = "Número tres";
        break
    case 4:
        numeroTexto = "Número cuatro";
        break

    default: //si no coincide ninguno de los caso anteriores se ejecuta default
        numeroTexto = "Caso no encontrado";
        
}

console.log(numeroTexto);