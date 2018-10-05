'use strict';

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
    
    let slides = document.querySelectorAll('.slider_fade');
    let dots = document.querySelector('.dot');

    if(n > slides.length){
        slideIndex = 1
    }
       if(n < 1){
           slideIndex = slides.length
       }

    for(let i = 0; i < slides.length; i += 1){
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i += 1){
        dots[i].classList = dots[i].classList.contains('active', '');
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].classList += ' active';
}

