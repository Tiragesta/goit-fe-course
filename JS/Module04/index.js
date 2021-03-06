'use strict';

/* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */ 
const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  
  function Cashier (name, productsDatabase, totalPrice = 0, customerMoney = 0, changeAmount = 0){
    this.name = name;
    this.productsDatabase = productsDatabase;
    this.totalPrice = totalPrice;
    this.customerMoney = customerMoney;
    this.changeAmount = changeAmount;
    this.greet = function (){
<<<<<<< HEAD
        return alert(`Здравствуйте, вас обслуживает ${name}`)
    };
    this.onSuccess = function (){
        if(this.changeAmount > 0){
           return alert (`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
        } else return alert (`Спасибо за покупку`);
=======
        return alert(`Здравствуйте, вас обслуживает ${this.name}`)
    };
    this.onSuccess = function (){
        if(this.changeAmount > 0){
        return alert (`Спасибо за покупку, ваша сдача ${this.changeAmount}`)
        } return alert (`Спасибо за покупку`);
>>>>>>> d870c0e01fd27f4dab74f5a1f834ae0ddb44fb74
    };
    this.onError = function(){
        
            return alert ('Очень жаль, вам не хватает денег на покупки');
       
    };
    
    this.countTotalPrice = function(order){
        for (let item in order) {
            
           this.totalPrice += order[item] * this.productsDatabase[item];
           
        } return this.totalPrice;  
  
    }
    this.getCustomerMoney = function(value){
        
        this.customerMoney = value;
        console.log(this.customerMoney);
    }
    this.countChange = function(){
        if(this.customerMoney > this.totalPrice){
<<<<<<< HEAD
            return this.changeAmount = this.customerMoney - this.totalPrice;
=======
           return this.changeAmount =  this.customerMoney - this.totalPrice;
>>>>>>> d870c0e01fd27f4dab74f5a1f834ae0ddb44fb74
        } return null ;
    }
    this.reset = function(){
        this.totalPrice = 0;
        this.customerMoney = 0;
        this.changeAmount = 0;
    }
    };

const mango = new Cashier('Mango', products);

// Проверяем исходные значения полей

console.log(mango.name); // Mango
console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0
//console.log(mango.onError());

// Вызываем метод greet
mango.greet(); // Здравствуйте, вас обслуживает Mango

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
mango.countTotalPrice(order);

// Проверям что посчитали
console.log('Общая сумма: ', mango.totalPrice); // 110

// Вызываем getCustomerMoney для запроса денег покупателя
<<<<<<< HEAD
mango.getCustomerMoney(111);
=======
mango.getCustomerMoney(300);
>>>>>>> d870c0e01fd27f4dab74f5a1f834ae0ddb44fb74

// Проверяем что в поле с деньгами пользователя
mango.customerMoney; // 300


// Вызываем countChange для подсчета сдачи
const result = mango.countChange()
    //console.log(result); // 190

// Проверяем что нам вернул countChange
console.log(result); // 190

// Проверяем результат подсчета денег
if(result !== null) {
   // При успешном обслуживании вызываем метод onSuccess
mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else{
  // При неудачном обслуживании вызываем метод onError   
 mango.onError()}; // Очень жаль, вам не хватает денег на покупки


// Вызываем reset при любом исходе обслуживания
mango.reset();

// Проверяем значения полей после reset
console.log(mango.totalPrice); // 0
console.log(mango.customerMoney); // 0
console.log(mango.changeAmount); // 0

<<<<<<< HEAD
=======

>>>>>>> d870c0e01fd27f4dab74f5a1f834ae0ddb44fb74



 




