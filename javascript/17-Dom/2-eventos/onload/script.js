function entrar(){
    alert('Entrando a la página web');
    let texto = '';
    if(navigator.cookieEnabled){
        texto = 'Las cookies están habilitadas'
    }
    else{
        texto = 'Las cookies están inhabilitadas'
    }
    document.getElementById('mostrar').innerHTML = texto;
}

