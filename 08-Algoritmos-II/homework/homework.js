'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  
  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < array.length; i++){
    if (array[i] < pivot){
      left.push(array[i]);    
    }
    else if (array[i] > pivot){
      right.push(array[i]);
    }
    else {
      equal.push(array[i])
    }
  }

  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);

  return sortedLeft.concat(equal, sortedRight);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2){
    return array;
  }

  let midArray = Math.floor(array.length / 2);
  let left = array.slice(0, midArray);
  let right = array.slice(midArray);
  let arrayAux =[];

  let leftArray = mergeSort(left);
  let rightArray = mergeSort(right);

  while(leftArray.length && rightArray.length){

    if (leftArray[0] > rightArray[0]){
      arrayAux.push(rightArray.shift());
    }
    else{
      arrayAux.push(leftArray.shift());
    }
  }
  arrayAux = arrayAux.concat(leftArray,rightArray);
  return arrayAux;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
