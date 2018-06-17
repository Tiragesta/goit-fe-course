/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
'use strict';
const numbers = [];

do {
   let userInput = prompt('Введите число');

   if(userInput === null || isNaN(userInput)){
       break;
   }

   numbers.push(Number(userInput));
} while (true);

console.log(numbers);

let total = 0;

for (let i=0; i < numbers.length; i++) {
    total = total + numbers[i];}

alert('Сумма:' +total);

console.log ('Сумма:', total);

 