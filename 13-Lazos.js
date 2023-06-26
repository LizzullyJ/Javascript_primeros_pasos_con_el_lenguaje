
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
const precioCiudad =[ 500, 400, 380, 200];
let presupuestoDisp = 390;

let i =0;
while (precioCiudad[i]> presupuestoDisp){
    i++;
}

console.log(' Puedes comprar pasaje para :' + ciudadesDisponibles[i]);
