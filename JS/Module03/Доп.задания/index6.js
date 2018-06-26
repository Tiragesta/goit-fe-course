'use strict';


/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

const numbers = [1, 2, 3];

const findLargestNumber = function (arr) {
     
    let largestNumber = arr[0];

    for(let i = 1; i < arr.length; i += 1){
        const numLargest = arr[i];
        if (numLargest > largestNumber) {
            largestNumber = numLargest;   
        }
    }
    return largestNumber;
}
const num = findLargestNumber(numbers);



// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
  ); // вернет 3
  
  console.log(
    findLargestNumber([27, 12, 18, 5])
  ); // вернет 27
  
  console.log(
    findLargestNumber([31, 128, 14, 74])
  ); // вернет 128
  
 