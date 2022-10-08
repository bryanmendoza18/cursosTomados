/*
Marge desea ir de compras al KWIK-E-MART a comprar los siguientes productos con sus respectivas cantidades:

- Homero necesita 12 donas, 10 pretzels, 1 jamón rancio y 20 cervezas Duff
- Lissa necesita 3 cereales Krusty.
- Maggie necesita un chupón nuevo.
*/

let miListaDeCompras;
let personajeUno = 'Homero', personajeDos = 'Lissa', personajeTres = 'Maggie';


miListaDeCompras = [ ['Donas', 12], ['Cereales Krusty', 3], ['Pretzels', 10], ['Ceveza Duff', 20], ['Jamón rancio', 1],['chupon', 1] ];

console.log('Marge compró ' + miListaDeCompras[0][1] + ' ' + miListaDeCompras[0][0] + ',' + miListaDeCompras[2][1] + ' ' + miListaDeCompras[2][0] + ',' + miListaDeCompras[4][1] + ' ' + miListaDeCompras[4][0] + ' y ' + miListaDeCompras[3][1] + ' ' + miListaDeCompras[3][0] + ' para' + ' ' + personajeUno);

console.log('Marge compró ' + miListaDeCompras[1][1] + ' ' + miListaDeCompras[1][0] + ' para ' + personajeDos)

console.log('Marge compró ' + miListaDeCompras[5][1] + ' ' + miListaDeCompras[5][0] + ' para ' + personajeTres);




 