document.getElementById('nombre').addEventListener('focus', (evento) => {
    evento.target.style.background = 'pink';
})

document.getElementById('nombre').addEventListener('blur', (evento) => {
    evento.target.style.background = 'orange'
})