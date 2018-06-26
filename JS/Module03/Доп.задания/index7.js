const uniqueNumbers  = [2, 1, 4, 9];

const addUniqueNumbers = function ( ...args) {
  //const newArray = uniqueNumbers.slice( );
  
  for(const arg of args) {
    const hasElem = uniqueNumbers.includes(arg);
    
    if(!hasElem) {
        uniqueNumbers.push(arg);
    }
   }console.log(uniqueNumbers);
   }
// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
    uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]