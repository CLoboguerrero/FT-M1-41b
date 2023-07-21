'use strict';

function BinarioADecimal(num) {
   let contador = 0;
   let binNum = num.split('').reverse();

   for (let i = 0; i < binNum.length; i++){
      let potencia = Math.pow(2, i) * binNum[i];
      contador = contador + potencia;
   }
   return contador;
   // return parseInt(num, 2) <------ Solución con método.
}

function DecimalABinario(num) {
   let arr = [];

   while (num >= 1){
      arr.push(Math.floor(num % 2));
      num = num / 2;
   }
   return arr.reverse().join('');
   // return num.tostring(2) <------ Solución con método.
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
