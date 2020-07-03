console.time("todo");

let suma = 0;
console.time("bucle 1");
for (let i = 0; i < 1000000000; i++) {
    suma += 1;
}
console.timeEnd("bucle 1");

console.time("asincrono");
asincrona()
    .then(() => {
        console.timeEnd("asincrono")
    });

let suma2 = 0;
console.time("bucle 2");
for (let j = 0; j < 10000000; j++) {
    suma2 += 1;
}
console.timeEnd("bucle 2");

console.timeEnd("todo");

function asincrona() {
    console.log("Inicia el proceso asincrono.");
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log("Termina el proceso asincrono.");
            resolve;
        });
    })
}