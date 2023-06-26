//Tipos de Datos
//Alfanumericos

let nombrePasajero = 'Pedro Silva';
console.log(nombrePasajero);
nombrePasajero='RamonSilva';
console.log(nombrePasajero);


// Numerico
let valorBoleto =1000;
const tasaEmbarque = 60/100;
var gestionAgencia = 100;
var impuestoAeropuerto = 200;


//Logicos (true or false)

let boletoActivo = true;
console.log(boletoActivo);

//Operaciones aritmeticas
let  totalBoletos =valorBoleto+tasaEmbarque+gestionAgencia;
console.log(totalBoletos);

//orden de precedencia
//()
// * y /
// + y -

let  totalBoletos2 = valorBoleto+ valorBoleto * tasaEmbarque+gestionAgencia;
console.log(totalBoletos2);

//concatenacion de texto

let nombre2Pasajero = 'Liz';
let apellidPasajero = 'Jacquez';

let nombreCompleto = nombre2Pasajero + apellidPasajero;
console.log(nombreCompleto);

let pasaporte = '52' + '53';

let multiplicacion = parseInt('1000') * parseInt('10');
console.log(multiplicacion);


//NaN Not a Number
let noEsNumero = parseInt('fghgfhf');
console.log(noEsNumero);

