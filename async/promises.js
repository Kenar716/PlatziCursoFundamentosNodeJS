function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + nombre)
            resolve(nombre);
            //reject("Error injectado.");
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla...");
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}

console.log("Iniciando el proceso...");

hola("Carlos")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    // .then(nombre => {
    //     return adios(nombre);
    // })
    .then(adios)
    .then((nombre) => {
        console.log("Terminando el proceso...")
    })
    .catch(error => {
        console.error("Ha ocurrido un error:");
        console.error(error);
    })
    ;