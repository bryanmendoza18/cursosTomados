//tipos primitivos
let x = 10; 

function cambiarValor(a){
    a = 20;
}

//paso por valor
//variable x no se modifico sino q paso una copia
cambiarValor(x);
console.log(x);
console.log(a);
