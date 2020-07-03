function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincronaV1() {
    setTimeout(function () {
        return 3 + z;
    });
}

function seRompeAsincronaV2(callback) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch (error) {
            console.error("Error en la función asíncrona.");
            callback(error);
        }
    });
}

//seRompe();

try {
    //seRompe();
    //otraFuncion();
    //seRompeAsincronaV1();
    seRompeAsincronaV2(function(infoRecibida) {
        console.log("Callback a ejecutarse si ocurre un error.");
        console.log(infoRecibida);
    });
} catch (error) {
    console.error("Vaya, algo se ha roto...");
    console.error(error);
}

//console.log("La ejecución continúa aunque haya ocurrido un error");

