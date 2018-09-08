'use strict';

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

const form = document.querySelector('.js-form');
const btnReset = document.querySelector('.js-btn-reset');
const card = document.querySelector('#laptop_card');


form.addEventListener('submit', handleBtnClick);
btnReset.addEventListener('click', handleBtnReset);

const filter = {
  size: [],
  color: [],
  release_date: []
}

function handleBtnClick(event){
  event.preventDefault();

  const checkboxes = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));
  const filter = checkboxes.reduce((acc, checkbox) => {
    acc[checkbox.name].push(checkbox.value);
    return acc;
  }, {
    size: [],
    color: [],
    release_date: []
})

checkedLaptops(filter);


console.log(filter);

form.reset();
}

function checkedLaptops(filter){
  const size = filter.size;
  const color = filter.color;
  const release_date = filter.release_date;

  const findLaptops = laptops.filter(laptop => {
    if(
      (laptop.size == size && laptop.color == color && laptop.release_date == release_date) ||
      (laptop.size == size && laptop.color == color) ||
      (laptop.size == size && laptop.release_date == release_date) ||
      (laptop.color == color && laptop.release_date == release_date) ||
      (laptop.size == size) ||
      (laptop.color == color) ||
      (laptop.release_date == release_date) 
    ) {
      return laptop;
    }
  });

console.log(findLaptops)

const source = document.querySelector('#laptop-template').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template({findLaptops});

card.innerHTML = markup;

}

function handleBtnReset(e){ 
  
  card.remove();

}









