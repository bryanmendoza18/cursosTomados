
document.getElementById('nombre').addEventListener('focus', cambiar);
document.getElementById('nombre').addEventListener('blur', regresar);

function cambiar(evento){
    let componente = evento.target //recuperando componente
    componente.style.backgroundColor = 'yellow'
    
}

function regresar(evento){
    evento.target.style.backgroundColor = 'red';
}