/*
Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

const concatenarSting = (cadena) =>
	(!cadena)
	? console.log('No has ingresado ningun texto')
	: console.log(` La cadena ${cadena} tiene ${cadena.length} caracteres  `)

concatenarSting('hola mundo');
