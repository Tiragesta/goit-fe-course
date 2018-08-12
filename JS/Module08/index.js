'use strict';

const galleryItems = [
    { 
      preview: 'img/preview-1.jpeg', 
      fullview: 'img/fullview-1.jpeg', 
      alts: "alt text 1" 
    },
    { 
      preview: 'img/preview-2.jpeg', 
      fullview: 'img/fullview-2.jpeg', 
      alts: "alt text 2" 
    },
    {
      preview: 'img/preview-3.jpeg', 
      fullview: 'img/fullview-3.jpeg', 
      alts: "alt text 3" 
    },
     /*{ 
      preview: 'img/preview-4.jpeg', 
      fullview: 'img/fullview-4.jpeg', 
      alts: "alt text 4" 
    },
   { 
      preview: 'img/preview-5.jpeg', 
      fullview: 'img/fullview-5.jpeg', 
      alts: "alt text 5" 
    },
    { 
      preview: 'img/preview-6.jpeg', 
      fullview: 'img/fullview-6.jpeg', 
      alts: "alt text 6" 
    }*/
];

/*<div class="fullview">
           Если выбран первый элемент из preview 
          <img class="full_img" src="img/fullview-1.jpeg" alt="alt text 1" width="1280" height="853">
        </div>
           li будет столько, сколько объектов в массиве картинок. Эти 3 для примера 
        <ul class="preview">
          <li><img class="pre_img" src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
          <li><img class="pre_img" src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
          <li><img class="pre_img" src="img/preview-4.jpeg" data-fullview="img/fullview-4.jpeg" alt="alt text 4"></li>
          <li><img class="pre_img" src="img/preview-5.jpeg" data-fullview="img/fullview-5.jpeg" alt="alt text 5"></li>
        </ul> */

const createFullView = (fullview, alts) => {
    const fullviews = document.createElement('div');
    fullviews.classList.add('fullview');

    const img = document.createElement('img');
    img.setAttribute('src', fullview);
    img.setAttribute('alt', alts);

    fullviews.append(img);

    return fullviews;
};

const createPreview = ( ) => {
    const ul = document.createElement('ul');
    ul.classList.add('preview');

    return ul;
};

const createPreviewImage = ( preview, fullview, alts) => {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.classList.add('pre_img');
    image.setAttribute('src', preview);
    image.setAttribute('data-fullview', "img/fullview-4.jpeg");
    image.setAttribute('alt', alts);

    li.append(image);

    return li;
}

const createGallery = ({preview, fullview, alts}) => {
    const maingallery = document.createElement('div');
    maingallery.classList.add('maingallery');

    const fullviews = createFullView(fullview, alts);

    const ul = createPreview();

    const li = createPreviewImage(preview, fullview, alts);
    
    ul.append(li);
    
    maingallery.append(fullviews, ul);

    return maingallery;
}

const createPreviews = (galleryItems) => {
    const elements = galleryItems.map(galleryItem => createPreviewImage(galleryItem));

    return elements;
};
const imageGallery = document.querySelector('.js-image-gallery');
const gallery = createGallery(galleryItems[0]);

imageGallery.appendChild(gallery);
const smallGallery = document.querySelector('.preview')
const smallGalleryItem = createPreviews(galleryItems)

smallGallery.append(...smallGalleryItem);


  
   
 
const largeImg = document.querySelector('.fullview');
const smallImg = document.querySelector('.pre_img');

smallImg.addEventListener('click', handleNewImg);

function handleNewImg(event){

    const target = event.target;

    const nodeName = target.nodeName;
       if(nodeName === "IMG"){
        largeImg.setAttribute("src", target.dataset.fullview);
       } 
       return;
}




