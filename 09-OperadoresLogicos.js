//operadores de comparacion
const valorPasaje = 1000;
const ciudadDestino ='Bogotá';
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');

//if evalua una condicion
if(ciudadesDisponibles.indexOf(ciudadDestino)>= 0){
    console.log('Pasaje disponible');

} else {
    console.log('Ciudad no disponible para viajar');
}



if (valorPasaje == 1000){
    console.log('el pasaje igual a mil');
}

//operadores logicos 
//Y AND - O OR - NO NOT
// AND && se deben cumplir las dos condiciones
//// OR || una condicion se cumple
// NOT ! no se cumple la condicion :)
const edadPasajero= 19;
const estaAcompanado = false;
if((ciudadesDisponibles.indexOf(ciudadDestino)>= 0) && edadPasajero >=18){
    console.log('Pasaje disponible para venta');

} else {
    console.log('Ciudad no disponible para viajar');
}



    if((ciudadesDisponibles.indexOf(ciudadDestino)>= 0) && (edadPasajero >= 17 || estaAcompanado) ){
        console.log('Pasaje disponible');
    
    } else {
        console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
    }


    //aplicando logica negativa
    if(!(ciudadesDisponibles.indexOf(ciudadDestino)>= 0) && (edadPasajero >= 17 || estaAcompanado) ){
        console.log('Pasaje disponible');
    
    } else {
        console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
    }

