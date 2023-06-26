let ciudadDestino = 'Lima';
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
let edadPasajero = 18;
let estaAcompanado = true;
let tienePasaporte = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && edadPasajero >= 18 && tienePasaporte) {
    console.log('Pasaje disponible');

} else {
    console.log('Ciudad no disponible para viajar.');
    console.log('Pasajero no cumple las reglas');

} 

      

    


