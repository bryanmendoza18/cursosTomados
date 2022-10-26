

function conuntItems(x){
    return x.toString().length
}

console.log(conuntItems(2345000))
console.log(conuntItems('Hola mundo'));


function sum(x = 0, y = 0, z = 0){
    return x + y + z
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));