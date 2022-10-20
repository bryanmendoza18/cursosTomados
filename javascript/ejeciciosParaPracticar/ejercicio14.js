/*
Programar una función que te devuelva el texto recortado según el número de caracteres indicados, pe.miFunción('Hola Mundo', 4) devolverá 'Hola'
*/

const recortarTexto = (cadena = '', longitud = undefined) =>
    (!cadena)
        ? console.log('no ingresaste el texto')
        : (longitud === undefined)
            ? console.log('No ingresaste la longitud para recortar el texto')
            : console.log(cadena.slice(0,longitud))


recortarTexto('Hola Mundo', 4) //Hola
recortarTexto() //no ingresaste el texto
recortarTexto('hola mundo') //No ingresaste la longitud para recortar el texto'
recortarTexto('', 5)//No ingresaste el texto


