function cambiarTexto(titulo){
    titulo.innerHTML = 'cambiamos el título';

}

document.getElementById('titulo').onclick = cambiarTexto2; 

function cambiarTexto2(){
    document.getElementById('parrafo').innerHTML = 'Nuevo párrafo'
}