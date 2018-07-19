'use strict';

const leftSlide1 = document.querySelector('#flex-img-left1');
const rightSlide1 = document.querySelector('#flex-img-right1');
const elemText1 = document.querySelector('#slider-text');
let slideIndex1 = 1;

function change (item){
    if(item===1){
        elemText1.textContent = 'Необходимы минимальные навыки владения компьютером - как работать в браузере, в офисных приложениях. Также нужно быть готовым учиться и регулярно уделять время развитию сайта. Конечный результат напрямую зависит от вас, и приложенных вами усилий.';
    } else if (item===2){
        elemText1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt quae nostrum officia. Eos quis commodi adipisci corrupti facilis dolores minima. Dolore quas tempora necessitatibus ab voluptatem aliquid harum aperiam, consequuntur.';
    }

}

function pick () {
    if(slideIndex1 === 1){
        slideIndex1 = 2;
    } else {
        slideIndex1 = 1;
    }
    change(slideIndex1);
}

leftSlide1.addEventListener('click', pick);
rightSlide1.addEventListener('click', pick);