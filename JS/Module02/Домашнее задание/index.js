'use strict';
const numbers = [];

do {
   let userInput = prompt('Enter number');

   if(userInput === null) {
       break;
   }
   numbers.push(Number(userInput));
} while (true);

console.log(numbers);

let total = 0;

for (let i=0; i < numbers.length; i++) {
    total = total + numbers[i];}

alert('Total sum of numbers:' +total);

console.log ('Total sum of numbers:', total);