/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// Вызовы функции для проверки


const formatString = function(str, maxlength) {
    
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 3) + '...';
      // итоговая длина равна maxlength
    }
  
    return str;
  }

console.log(
    formatString("Curabitur ligula sapien, tincidunt non.", 40)
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 40)
  ); // вернется форматированная строка
  
  console.log(
    formatString("Curabitur ligula sapien.", 40)
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.", 40)
  ); // вернется форматированная строка
  