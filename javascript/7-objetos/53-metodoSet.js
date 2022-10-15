//método set

let persona = {
    nombre: 'Bryan',
    apellido: 'Mendoza',
    email: 'bryanmen1811@gmail.com',
    edad: 22,
    idioma: 'es',
    //vamos a convertir el 'es' a 'ES'
    get lang(){
        return this.idioma.toUpperCase()
    },
    //vamos  a modificar el valor
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

//mandar a llamar método set y le ponemos el argumento 'es'
persona.lang = 'en';

console.log(persona.lang);

console.log(persona.idioma);
