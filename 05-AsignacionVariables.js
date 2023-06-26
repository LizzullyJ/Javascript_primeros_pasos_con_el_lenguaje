//palabra const que luefo de asignar su valor no cambia en el tiempo
const valorPasaje =1650;
console.log(valorPasaje);

const nombrePasajero = 'Lizzully';
const apellidoPasajero = 'Jacquez';

console.log(nombrePasajero);
console.log(apellidoPasajero);



//palabra var espacio de memoria que puede cambiar durante la ejecucion del programa
//el alcance

var nombreCompletoPasajero = nombrePasajero + ' ' + apellidoPasajero;

//bloque
{
   //palabra let espacio de memoria que puede cambiar durante la ejecucion del programa
let nombreCompleto = nombrePasajero + ' ' + apellidoPasajero;
console.log(nombreCompleto);
}

