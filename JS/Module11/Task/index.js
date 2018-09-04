'use strict';

//======== Task#1_Module#11 ==============================================

/*
  К pen уже подключен Handlebars.
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const listItems = [
    { name: 'item 1', count: 2 },
    { name: 'item 2', count: 4 },
    { name: 'item 3', count: 12 },
    { name: 'item 4', count: 29 },
  ];

const source = document.querySelector('#list-template').innerHTML.trim();

const template = Handlebars.compile(source);

const markup = template({listItems});

console.log(markup);

const container = document.querySelector('#menu-container');
container.innerHTML = markup;

//========== Task#2_Module#11 ==============================================

/*
  К pen уже подключен Handlebars.
  
  Создайте шаблон поста указаного во вкладке HTML.
  Отрендерите список постов в DOM по данным из массива posts.
  
  Если в объекте поле isFav=true, в посте должна быть 
  разметка иконки избранного поста, в противном случае
  разметки иконки быть не должно.
  
  Используйте эту иконку для фона:
  https://image.flaticon.com/icons/svg/290/290413.svg
*/

const posts = [
    { title: "post 1", text: "text 1", isFav: true },
    { title: "post 2", text: "text 2", isFav: false },
    { title: "post 3", text: "text 3", isFav: true },
    { title: "post 4", text: "text 4", isFav: false }
  ];

const start = document.querySelector('#post-template').innerHTML.trim();

const startTemplate = Handlebars.compile(start);

const startMarkup = startTemplate({posts});

console.log(startMarkup);

const post = document.querySelector('.post');
post.innerHTML = startMarkup;

