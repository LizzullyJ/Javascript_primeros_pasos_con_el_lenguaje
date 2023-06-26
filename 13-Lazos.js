
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
const precioCiudad = [500, 400, 380, 200];
let presupuestoDisp = 210;


//while cero o mas veces
//do while una o mas veces


let i = 0;
while (precioCiudad[i] > presupuestoDisp && i < ciudadesDisponibles.length) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log('No tenemos pasajes disponibles')
} else {
    console.log(' Puedes comprar pasaje para :' + ciudadesDisponibles[i]);
}
