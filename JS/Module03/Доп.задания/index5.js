 'use strict';
/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/
let str = "The quick brown fox jumped over the lazy dog";


const findLongestWord = function( str ) {

  let word = 0;
  let longestWord = null;
  
const stringSplit = str.split(' ');
console.log(stringSplit);

for(let i = 0; i < stringSplit.length; i += 1){
    if(stringSplit[i].length > word){ 
    word = stringSplit[i].length;
    longestWord = stringSplit[i]; 
    } }
console.log(longestWord); 

}
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
);


// Вызовы функции для проверки
 // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'




/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.


const string = "May the force be with you";
let word = 0;
let longestWord = null;

const stringSplit = string.split(' ');
console.log(stringSplit);

for(let i = 0; i < stringSplit.length; i += 1){
    if(stringSplit[i].length > word){ 
    word = stringSplit[i].length;
    longestWord = stringSplit[i]; 
    } }
console.log(longestWord); // 'force'*/