'use strict';

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const string = "May the force be with you";
let word = 0;
let longestWord = null;

const stringSplit = string.split(' ');
console.log(stringSplit);

for(let i = 0; i < stringSplit.length; i++){
    if(stringSplit[i].length > word){ 
    word = stringSplit[i].length;
    longestWord = stringSplit[i]; 
    } }
console.log(longestWord); // 'force'
