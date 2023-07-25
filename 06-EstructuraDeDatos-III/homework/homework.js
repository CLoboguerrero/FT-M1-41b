'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por prámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.a
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(value){
   if (value < this.value){
      if(this.left){
         this.left.insert(value);
      }
      else{
         this.left = new BinarySearchTree(value);
         return value;
      }  
   }
   else {
      if (this.right){
         this.right.insert(value);
      }
      else{
         this.right = new BinarySearchTree(value);
         return value;
      }
   }
}

BinarySearchTree.prototype.size = function(){
   let counter = 1;
   if (this.left){
      this.left.size();
      counter ++;
   }

   if (this.right){
      this.right.size();
      counter ++;
   }
   return counter;
}

BinarySearchTree.prototype.contains = function(value){
   if (value === this.value){
      return true;
   }
   
   if (value < this.value){
      if (this.left){
         return this.left.contains(value);
      }
      else {
         return false;
      }
   }
   else if (value > this.value){
      if(this.right){
         return this.right.contains(value);
      }
      else {
         return false;
      }
   }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, pedido){

   if(pedido === 'in-order' || pedido === undefined){// Left - Root - Right
      if (this.left && this.left.depthFirstForEach(cb, pedido));
      cb(this.value);
      if (this.right && this.right.depthFirstForEach(cb, pedido));
   }

   if(pedido === 'pre-order'){//Root - Left - Right
      cb(this.value);
      if (this.left && this.left.depthFirstForEach(cb, pedido));
      if (this.right && this.right.depthFirstForEach(cb, pedido));
   }

   if(pedido === 'post-order'){// Left - Right -Root
      if (this.left && this.left.depthFirstForEach(cb, pedido));
      if (this.right && this.right.depthFirstForEach(cb, pedido));
      cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, value = []){
   if (this.left !== null){
      value.push(this.left);
   }
   if (this.right !== null){
      value.push(this.right);
   }
   cb(this.value);
   if(value.length > 0){
      value.shift().breadthFirstForEach(cb, value);
   }
}


// let nuevoArbol = new BinarySearchTree(8);
// nuevoArbol.insert(5);
// nuevoArbol.insert(7);
// nuevoArbol.insert(3);
// nuevoArbol.insert(1);
// console.log(nuevoArbol)
//console.log(nuevoArbol.depthFirstForEach('in-order'));


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
