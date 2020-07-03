// const p = require("process");

process.on("beforeExit", () => {
    console.log("El proceso va a terminar.");
});

process.on("exit", () => {
    //Cuando ocurre esto el proceso ya se salio del EventLoop
    console.log("Vale, el proceso finalizó.");
    setTimeout(() => {
        console.log("Esto nunca se mostrará por que ya nos hemos desconectado.");
    }, 0);
});

setTimeout(() => {
    console.log("Esto se va a mostrar.");
}, 0);

process.on("uncaughtException", (err, origen) => {
    console.log("Vaya, error no manejado.");
    //console.error(err);
    setTimeout(() => {
        console.log("Esto viene desde el uncaughtException.");
    }, 0);
});
// process.on("uncaughtRejection"); //Para promesas rechazadas que nadie ha atradp???

functionQueNoExiste();

console.log("Esta linea no ocurrirá por que el código truena en la línea anterior.");