'use strict';

/* Есть массив имен пользователей */

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
console.log(users.pop()); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя

users.unshift("Chelsey");
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.push("Mango","Alex");
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]