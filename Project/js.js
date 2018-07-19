const leftSlide = document.querySelector('#flex-img-left');
const rightSlide = document.querySelector('#flex-img-right');
const elemText = document.querySelector('#slider-txt');
let slideIndex = 1;


function change (item){
    if(item===1){
        elemText.textContent = 'Создал 3 прибыльных сайта. Разработал сесрвис для вебмастеров TextMania.ru';
    } else if (item===2){
        elemText.textContent = 'ghbsadifj';
    }

}

function pick () {
    if(slideIndex === 1){
        slideIndex = 2;
    } else {
        slideIndex = 1;
    }
    change(slideIndex);
}

leftSlide.addEventListener('click', pick);
rightSlide.addEventListener('click', pick);