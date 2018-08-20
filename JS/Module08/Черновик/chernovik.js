'use strict';
const galleryItems = [
    { 
      previews: 'img/preview-1.jpg', 
      fullviews: 'img/fullview-1.jpg', 
      alts: "alt text 1" 
    },
    { 
      previews: 'img/preview-2.jpg', 
      fullviews: 'img/fullview-2.jpg', 
      alts: "alt text 2" 
    },
    {
      previews: 'img/preview-3.jpg', 
      fullviews: 'img/fullview-3.jpg', 
      alts: "alt text 3" 
    },
    { 
      previews: 'img/preview-4.jpg', 
      fullviews: 'img/fullview-4.jpg', 
      alts: "alt text 4" 
    }, 
   { 
      previews: 'img/preview-5.jpg', 
      fullviews: 'img/fullview-5.jpg', 
      alts: "alt text 5" 
    },
    { 
      previews: 'img/preview-6.jpg', 
      fullviews: 'img/fullview-6.jpg', 
      alts: "alt text 6" 
    }
];
/*<div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>*/

const createFullview = ({fullviews, alts, previews}) => {
    const fullview = document.createElement('div');
    fullview.classList.add('fullview');

    const img = document.createElement('img');
    img.setAttribute('src', fullviews);
    img.setAttribute('alt', alts);
    img.setAttribute('width', 1280);

    fullview.appendChild(img);

    return fullview;
}

const createPreview = (previews, alts, fullviews) => {
    const preview = document.createElement('ul');
    preview.classList.add('preview');

    const li = createPreviewPoint(previews, alts, fullviews);

    preview.append(li);

    return preview;
}

const createPreviewPoint = (previews, alts, fullviews) => {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.setAttribute('src', previews);
    image.setAttribute('alt', alts);
    image.setAttribute('data-fullview', fullviews);
    image.setAttribute('width', 312);

    li.append(image);

    return li;
}

const createPreviewImages = items => {
    const elements = items.map(item => createPreviewPoint(item));

    return elements;
}

const imageGallery = document.querySelector('.js-image-gallery');

const galleryFullview = createFullview(galleryItems[0]);
const galleryPreview = createPreview(galleryItems);

imageGallery.appendChild(galleryFullview);
imageGallery.appendChild(galleryPreview);

const smallGallery = document.querySelector('.preview');

const images = createPreviewImages(galleryItems);

smallGallery.appendChild(...images);

