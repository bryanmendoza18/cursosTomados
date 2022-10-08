let personajes = ['Homero', 'Bart', 'Lisa'];

personajes[1] = 'Marge'; 
personajes.push('Maggie'); 

personajes[personajes.length] = "Apu";

personajes[6] = "Krusty";



//formas para saber si es un arreglo o no
console.log( Array.isArray(personajes)); 

console.log( personajes instanceof Array);
