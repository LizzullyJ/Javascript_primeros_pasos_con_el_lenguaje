const ciudadesDisponibles = new Array('Bogota', 'Lima',  'Santiago', 'Montevideo');
console.log(ciudadesDisponibles);

const paisesDisppnibles =[ 'Colombia', 'Perú', 'Chile', 'Brasil', 'Argentina', 'Uruguay', 'Venezuela'];
console.log(paisesDisppnibles);

let cantidadCiudaes = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos: ${cantidadCiudaes} elementos`);
console.log(`En la lista de paises tenemos: ${paisesDisppnibles.length} elementos`);
//remover el primer elemento
ciudadesDisponibles.shift();
//remover el ultimo elemento
ciudadesDisponibles.pop();

console.log(ciudadesDisponibles);
cantidadCiudaes = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos: ${cantidadCiudaes} elementos`);

//filtrar elementos
const paisesFiltrados = paisesDisppnibles.filter((e)=> e == 'Brasil');
console.log(paisesFiltrados);

const paisesFiltrados2 = paisesDisppnibles.filter((e)=> e.length > 6);
console.log(paisesFiltrados2);

//unificar los elementos en una cadena de caracteres
console.log(paisesDisppnibles.join('-'));

//ordenar la lista

console.log(paisesDisppnibles.sort());

// conociendo la posicion de un elemento de la lista
console.log(`Perú está en la posición: ${paisesDisppnibles.indexOf('Perú')}`);

//unificar dos listas

const paisesCiudadesb = paisesDisppnibles.concat(ciudadesDisponibles);
console.log(paisesCiudadesb);



