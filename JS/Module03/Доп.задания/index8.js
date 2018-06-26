'use strict';

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/
 
const removeFromArray = function(arr, ...args) {
    //const newArray = arr.slice();
   console.log(arr);
   console.log(args);

    for(const arg of args) {
      const hasElem = arr.includes(arg);
      
      if(hasElem) {
        arr.splice(arg);
      }
     
     } 
  }
  
  
  // Вызовы функции для проверки
  console.log(
    removeFromArray([1, 2, 3, 4, 5], 2, 4)
  ); // [1, 3, 5]
  
  console.log(
    removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
  ); // [12, 8, 17]*/