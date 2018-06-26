'use strict';

/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

const min = 1;
const max = 100;

for(let i = 1; i < max; i += 1) {
    console.log(`${max} % ${i} =`, max % i);
    if ( i % 5 === 0){
        console.log(i, " = Buzz" )}
        else {
            if ( i%3 === 0 ){
                console.log(i, " = Fizz" );
                } else {
                    console.log(i );
                };
}};
