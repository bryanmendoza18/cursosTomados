function mostrarValores(){
    let form = document.forms['formulario'];
    let texto = '';
    for(let elemento of form){
        texto += elemento.value + '</br>';
    }
    document.getElementById('valores').innerHTML = texto;
}