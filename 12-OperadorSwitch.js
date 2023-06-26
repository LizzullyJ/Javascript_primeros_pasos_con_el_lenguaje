let ciudadDestino = 'Lima';
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
let valorPasaje = 0;


console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    switch (ciudadDestino) {
        case "Bogotá":
            valorPasaje = 500;
            break;

        case "Lima":
            valorPasaje = 400;
            break;

        case "Santiago":
            valorPasaje = 300;
            break;

        case "Montevideo":
            valorPasaje = 200;
            break;
        
        default: 
        valorPasaje = 0;
        console.log('No hay pasajes para ciduad indicada');
        break;
    }


if( valorPasaje > 0)
    console.log(`el valor del pasaje ${valorPasaje}`);

} 