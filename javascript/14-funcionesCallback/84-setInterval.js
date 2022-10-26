let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

//manda a llamar de manera asíncrona el método reloj
setInterval(reloj, 1000)//1 seg