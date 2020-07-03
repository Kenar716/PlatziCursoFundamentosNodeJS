async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + nombre)
            resolve(nombre);
            //reject("Error injectado.");
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla...");
            resolve(nombre); //esto indica que se resulve y regresa el valor de nombre
            //resolve(); //aqui solo indica que termino/resolvio correctamente
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}

async function main() {
    let nombreObtenido = await hola("Carlos");
    let nombreDeHablar = "";
    nombreDeHablar = await hablar();
    console.log("Nombre de hablar: " + nombreDeHablar); //aqui se obtiene un undefined por que no se envia ningun valor de nombre y por lo tanato el resolve no regresa un valor
    hablar();
    hablar();
    nombreDeHablar = await hablar("testing");
    console.log("Nombre de hablar: " + nombreDeHablar); //aqui se obtiene el mismo valor enviado ya que el resolve lo regresa y si se encuentra definido por lo mismo de que si se envio al inicio
    await adios(nombreObtenido);
    console.log("Proceso terminado.")
}

console.log("Proceso iniciado.");
main();
console.log("Segunda instrucción a ejecutarse.")
