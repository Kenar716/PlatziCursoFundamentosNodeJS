function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

try {
    asincrona(function(err, data) {
        if (err) {
            // console.error("Tenemos un error:");
            // console.error(err);
            // return false;
    
            throw err;
        }
        
        console.log("Todo ejecutado correctamente, mi data es: " + data);
    });
} catch (error) {
    //como manejamos son funciones asincronas, este catch no lo atrapa
    //asi que lo correcto seria detectarlo dentro del callback de la funcion asincrona
    console.error("Error atrapado.");
    console.error(error);
}
