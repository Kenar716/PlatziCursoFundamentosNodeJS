//Declararlo de esta manera es más practico si deseamos acceder a más propiedades de child_process
const { exec, spawn } = require("child_process");
//La línea siguiente tambien es equivalente
//const exec = requiere("child_process").exec;

// var comandoLinux = "ls -la";
// var comandoWindowsCmd = "dir /q";
// var comandoInstruccion = "node consola.js";
// exec(comandoInstruccion, (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });

//Para uso en Linux
//let proceso = spawn("ls", ["-la"]);

//Para uso en Windows
let proceso = spawn('dir', ["/q"], { shell: true });

//console.log(proceso);
console.log(proceso.pid); //Este PID lo podemos buscar/cerrar en el Task Manager y veremos como termina la ejecución
console.log(proceso.connected);

proceso.stdout.on("data", function(dato) {
    let valorCadenaDatos = dato.toString();
    // console.log(dato);
    console.log("IsKilled? " + proceso.killed);
    console.log(valorCadenaDatos);
});

proceso.on("exit", function() {
    console.log("IsKilled? " + proceso.killed);
    console.log("Proceso terminado.");
    console.log("IsKilled? " + proceso.killed);
});
