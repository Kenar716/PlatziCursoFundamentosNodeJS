let nombre = process.env.NOMBRE || 'Desconocido';
let web = process.env.SITIO_WEB || "_____________";

console.log("Hola " + nombre);
console.log("Mi sitio web es " + web);

/*
WINDOWS CMD Set Variables
SET VARIABLE_NAME=variable_value
node app_file.js

SET NOMBRE=myName && node entorno.js

WINDOWS Powershell Variables
$env:VARIABLE_NAME="variable_value"
node app_file.js

$env:VARIABLE_NAME="variable_value" ; node app_file.js
*/
