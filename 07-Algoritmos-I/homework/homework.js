'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1];
  let divisor = 2;

  while(num > 1){
    if(num % divisor === 0){
      factores.push(divisor);
      num /= divisor;
    }
    else{
      divisor ++;
    }
  }
  return factores;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Doble for el primero recorre el array desde 0; el segundo recorre el array desde 1 (compara los pares) -> recorre el array una posición delante de i >> j=i+1
  //[3, 1, 9, 8, 5]
  // aux = [3]
  // 0  1  <--- índices
  // i  j
  //Si posición i es mayor a j, cambia las posiciones
  //Cuando todo está ordenado, corta la iteración y se retorna el array ordenado.
 
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        let aux = array[i];//3
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //Recorrer el array desde el índice 1 con un for:
  //[9, 3, 2, 8, 1]
  //    i
  // j
  for (let i = 1; i < array.length; i++){
    let j = i - 1;
    let aux = array[i];

    while (j >= 0 && aux < array[j]){
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //[9, 3, 2, 8, 1]
  //    i
  //             j

  for (let i = 0; i < array.length; i++){
    let min = i;
    for (let j = i + 1 ; j < array.length; j++){
      if (array[j] < array[min]){
        min = j;
      }
    }
    if(i !== min){
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
