'use strict';

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      image: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      image: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      image: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

const createPostCard = ( { image, title, text, link } ) => {
    const post = document.createElement('div');
    post.classList.add('post');

    const img = document.createElement('img');
    img.classList.add('post__image');
    img.setAttribute('src', image);
    img.setAttribute('alt', 'post image');
    
    const postTitle = document.createElement('h2');
    postTitle.classList.add('post__title');
    postTitle.textContent = title;

    const postText = document.createElement('p');
    postText.classList.add('post__text');
    postText.textContent = text;

    const button = document.createElement('a');
    button.classList.add('button');
    button.setAttribute('href', link);
    button.textContent = 'Read more';

    post.append(img, postTitle,postText, button);

    return post;
  
};

const createPostCards = (posts) => {
    const elements = posts.map(post => createPostCard(post))

    return elements;
};

const mainPost = document.querySelector('.main-post');
const cards = createPostCards(posts);

mainPost.append(...cards);