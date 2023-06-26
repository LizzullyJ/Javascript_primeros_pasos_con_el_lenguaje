  //definicion de una lista con tipo alfanumercio
  const ciudadesDisponibles = new Array('Lima', 'Perú', 'México');
  console.log(ciudadesDisponibles);

  const paisesDisppnibles =[ 'Colombia', 'Perú', 'Chile', 'Brasil', 'Argentina'];
  console.log(paisesDisppnibles);

  {
    paisesDisppnibles.push('Uruguay');
    ciudadesDisponibles.push ('Montevideo');
    console.log(paisesDisppnibles);
    console.log(ciudadesDisponibles);

    paisesDisppnibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');
    console.log(paisesDisppnibles);
    console.log(ciudadesDisponibles);
  }
 //mostrar elemento de lista
  console.log(paisesDisppnibles[0]);
  console.log(ciudadesDisponibles[0]);

  //funcion splice permite borrar elemnetos

  paisesDisppnibles.splice(1,2, 'Venezuela', 'Paraguay');

  console.log(paisesDisppnibles);
    console.log(ciudadesDisponibles);