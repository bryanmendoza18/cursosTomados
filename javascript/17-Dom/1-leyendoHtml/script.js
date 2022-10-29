const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
h1.innerHTML = 'Título cambiado2';

h1.getAttribute('pantalla');
console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));

h1.setAttribute('class', 'rojo');//modificando valor de clase

h1.classList.add('azul'); //añadir nueva clase
h1.classList.remove('azul')//eliminando clase

input.value = '12345'
input.placeholder = 'He cambiado esto' //cambiando texto placeholder


//crear elemento img
const img = document.createElement('img');
img.setAttribute('src', 'https://www.muypymes.com/wp-content/uploads/2014/03/Homer-Simpson.jpg')
console.log(img);


pid.innerHTML = ""; 
pid.appendChild(img)








