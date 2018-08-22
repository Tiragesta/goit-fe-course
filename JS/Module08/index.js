'use strict';

const galleryItems = [
    { 
      preview: 'img/preview-1.jpg', 
      fullview: 'img/fullview-1.jpg', 
      alts: "alt text 1" 
    },
    { 
      preview: 'img/preview-2.jpg', 
      fullview: 'img/fullview-2.jpg', 
      alts: "alt text 2" 
    },
    {
      preview: 'img/preview-3.jpg', 
      fullview: 'img/fullview-3.jpg', 
      alts: "alt text 3" 
    },
     { 
      preview: 'img/preview-4.jpg', 
      fullview: 'img/fullview-4.jpg', 
      alts: "alt text 4" 
     },
   { 
      preview: 'img/preview-5.jpg', 
      fullview: 'img/fullview-5.jpg', 
      alts: "alt text 5" 
    },
    { 
      preview: 'img/preview-6.jpg', 
      fullview: 'img/fullview-6.jpg', 
      alts: "alt text 6" 
    }
];

/*<div class="fullview">
           Если выбран первый элемент из preview 
          <img class="full_img" src="img/fullview-1.jpeg" alt="alt text 1" width="1280" height="853">
        </div>
           li будет столько, сколько объектов в массиве картинок. Эти 3 для примера 
        <ul class="preview">
          <li><img class="pre_img" src="img/preview-2.jpg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
          <li><img class="pre_img" src="img/preview-3.jpg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
          <li><img class="pre_img" src="img/preview-4.jpg" data-fullview="img/fullview-4.jpeg" alt="alt text 4"></li>
          <li><img class="pre_img" src="img/preview-5.jpg" data-fullview="img/fullview-5.jpeg" alt="alt text 5"></li>
        </ul> */

const createFullView = (fullview, alts) => {
    const fullviews = document.createElement('div');
    fullviews.classList.add('fullview');

    const img = document.createElement('img');
    img.setAttribute('src', fullview);
    img.setAttribute('alt', alts);
    img.setAttribute('width', 1280);

    fullviews.append(img);

    return fullviews;
};

const createPreview = ( ) => {
    const ul = document.createElement('ul');
    ul.classList.add('preview');

    return ul;
};

const createPreviewImage = ( {preview, fullview, alts}) => {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.classList.add('pre_img');
    image.setAttribute('src', preview);
    image.setAttribute('data-fullview', fullview);
    image.setAttribute('alt', alts);
    image.setAttribute('width', 320);

    li.append(image);

    return li;
}

const createGallery = ({preview, fullview, alts}) => {
    const maingallery = document.createElement('div');
    maingallery.classList.add('maingallery');
    const imageGallery = document.querySelector('.js-image-gallery');

    const fullviews = createFullView(fullview, alts);

    const ul = createPreview();

    const li = createPreviewImage({preview, fullview, alts});
    
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
   
 

const smallImgs = imageGallery.querySelectorAll('li.pre_img');
const smallActiveImg = smallImgs[0].classList.add('pre-active-img');

smallImgs.addEventListener('click', handleNewImg);

function handleNewImg({target}){

  const hasClass = target.classList.contains('pre-img');

  if (!hasClass) return;

  const activeLargeImg = imageGallery.querySelector('.fullview img');

  activeLargeImg.setAttribute('src', target.dataset.fullview);

  setActiveSmallImg(smallImgs, target);
}

function setActiveSmallImg(smallImgs, target){
  smallImgs.forEach(smallImg => {
    if(smallImg !== target) {
      smallImg.classList.remove('pre-active-img');
    } else {
      smallImg.classList.add('pre-active-img');
    }
  });
}

