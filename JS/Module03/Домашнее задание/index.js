'use strict';

/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину, от 4 до 16-ти символов включительно
    - быть уникален, тоесть еще не используется в массиве logins
 
  🔔 Разбейте задачу на подзадачи, что удобно решить используя функции.
  
  Для начала напишите функцию checkLoginValidity(login) которая получает логин как 
  аргумент, проверяет количество символов логина и возвращает true если логин подходит 
  под условие длины от 4-х до 16-ти символов включительно, и false если не подходит. 
  Убедитесь что функция работает верно.*/
 
let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];  

let login = prompt ('Введите Ваш логин');

const checkLoginValidity = function(login) {
  //let arr = login.split(' ');
    console.log(login);
    
  const minLength = 4;
  const maxLength = 16;
  
  for (let i = 0; i < login.length; i +=1 )  {
    console.log(login.length) ;

  if ( login.length >= minLength && login.length <= maxLength )
    return true;
    } return  false;
  //console.log(login.length);
  };  

console.log(checkLoginValidity(login)) ;

/*Далее создайте функцию checkIfLoginExists(logins, login), которая получает логин и список 
  всех логинов как аргументы, проверяет наличие логина в массиве logins, возвращая false 
  если такого логина в массиве еще нет, и true если есть. Убедитесь что функция работает верно.*/

const checkIfLoginExists = function( logins, ...login ) {

  console.log(logins);
  console.log(login);

  for ( const log of login) {
           
    const hasElem = logins.includes(login);
    
         if (!hasElem) {
           return false;
         } return true;
       }
       console.log(logins);
}
console.log(checkIfLoginExists(["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123ftgh"], login ));
  /*Далее напишите функцию addLogin(logins, login) которая:
    - Получает новый логин и массив всех логинов как аргументы
    
    - Проверяет валидность логина используя вспомогательную функцию checkLoginValidity
      
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
      
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции checkIfLoginExists
       
    - Если checkIfLoginExists вернет false, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
       
    - Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции:
      - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false. 
        Больше ничего не делает.
      
      - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false. 
        Больше ничего не делает.
      
      - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет, 
        возвращая указанные строки. Больше ничего не делает.
*/
//

const addLogin = function ( logins, login ) {

  checkLoginValidity(login)
  function checkLoginValidity(login) {
  if (login === 0) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  } checkIfLoginExists(logins, ...login);
  
  }
  /*checkIfLoginExists(logins, ...login)
  function checkIfLoginExists(logins, ...login) {
    if (!hasElem) {
      logins.push(login);
      alert('Логин успешно добавлен!');
    } else {
      alert('Такой логин уже используется!');
    }
  }*/

} 
addLogin(login)
  
  


