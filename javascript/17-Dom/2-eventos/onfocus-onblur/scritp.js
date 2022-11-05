function cambiar(elementoInput){
    elementoInput.style.backgroundColor = 'orange'
    
    
}

function regresar(elementoInput){
    elementoInput.style.backgroundColor = 'lime'
    elementoInput.style.border = '3px solid orange'
    
}


//------------

function vaciar(control)
{
  control.value='';
  
}
function verificarEntrada(control)

{
  if (control.value=='')
    alert('Debe ingresar datos');
}

