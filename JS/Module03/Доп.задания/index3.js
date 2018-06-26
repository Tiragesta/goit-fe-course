   /*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
const checkForSpam = function (str) {
      
    let arrStr = str.split(' ');
        console.log(arrStr);
      
    for (let i = 0; i < arrStr.length; i += 1) {
       console.log(arrStr[i].toLowerCase());
   
       if (arrStr[i].toLowerCase() === 'spam' || 
       arrStr[i].toLowerCase() === 'sale')  
       return true;
    } return false;
   
       console.log(arrStr);
   };

console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

