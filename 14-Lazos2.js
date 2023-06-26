
//const datos = new Array('Bogotá', 'Lima', 'Santiago', 'Montevideo');
const precioCiudad = [500, 400, 380, 200];
let presupuestoDisp = 210;
const datos = [
    {
        'ciudad': 'Bogotá',
        'precio': 500
    },
    {
        'ciudad': 'Lima',
        'precio': 400
    },
    {
        'ciudad': 'Santiago',
        'precio': 380
    },
    {
        'ciudad': 'Montevideo',
        'precio': 200
    },
];


//while cero o mas veces
//do while una o mas veces


let i = 0;
while (i < datos.length  && datos[i].precio > presupuestoDisp) {
    i++;
}
if (i == datos.length) {
    console.log('No tenemos pasajes disponibles')
} else {
    console.log(' Puedes comprar pasaje para :' + datos[i].ciudad);
}
