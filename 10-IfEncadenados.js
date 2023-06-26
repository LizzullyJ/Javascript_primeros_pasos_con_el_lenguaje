let ciudadDestino ='Lima';
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
let edadPasajero= 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if(edadPasajero >= 18 || estaAcompanado){


    if((ciudadesDisponibles.indexOf(ciudadDestino)>= 0)  ){
        console.log('Pasaje disponible');
        
    } else {
        console.log('Ciudad no disponible para viajar.');
    } 

    }else{
        if((edadPasajero >= 16 || estaAcompanado) && (ciudadDestino == 'Lima')){
            console.log('Pasaje disponible Lima');
        }else{

            console.log('Pasajero no cumple las reglas')
        }
    }

