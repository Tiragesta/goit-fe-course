'use strict'; 

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

const userLogin = prompt ('Введите Ваш логин!');
const userPassword = prompt ('Введите Ваш пароль!');
let isTrue = 'Добро пожаловать!'; 
let isFalse = 'Доступ запрещен';
const isButton = 'Отменено пользователем';

if (userLogin === null){
    alert(isButton)
} else if (userLogin === ADMIN_LOGIN){
    console.log(userPassword)
} else {
    alert(isFalse);
}

if (userLogin === ADMIN_LOGIN && userPassword === ADMIN_PASSWORD) {
    alert(isTrue)
} else {
    alert(isFalse)
}