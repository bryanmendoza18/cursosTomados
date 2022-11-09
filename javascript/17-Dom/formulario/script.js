function mostrarValores(){
    let form = document.forms['formulario'];
    let texto = '';
    let nombre = form['nombre'];
    let apellido = form['apellido'];
    texto = nombre.value + ' ' + apellido.value;
    document.getElementById('valores').innerHTML = texto;

}


document.getElementById('titulo').innerHTML = 'Nuevo título';


//cambiar imagen

function cambiarImagen(){
    document.getElementById('imagen').src = 'https://upload.wikimedia.org/wikipedia/commons/8/80/AnantP%40css.png'

}


//modificando color de título

function cambiarEstilo(){
    document.getElementById('titulo1').style.color = 'red';
}


