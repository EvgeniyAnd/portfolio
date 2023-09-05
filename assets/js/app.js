var hamb = document.querySelector('#hamb');
var popup = document.querySelector('#popup');
var menu = document.querySelector('#menu').cloneNode(1);
var body = document.body;

hamb.addEventListener('click',hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    hamb.classList.toggle('active');
    body.classList.toggle('noscroll');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

var links  = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener('click', closeOnClick);
})

function closeOnClick(){
    popup.classList.remove('open');
    hamb.classList.remove('active');
    body.classList.remove('noscroll');
}

// Слайдер на главной
let viewport = document.getElementById('slider_viewport').offsetWidth;

let btnNext = document.getElementById('slider_control-prev');

let btnPrev = document.getElementById('slider_control-next');

let slider = document.querySelector('div.slider');

let viewSliders = document.querySelectorAll('.viewSlide');

let viewSlide = 0;

viewSliders[0].style.backgroundColor="red";

btnNext.addEventListener('click',function() {
viewSliders[viewSlide].style.backgroundColor = 'orange';

if (viewSlide > 0) {
    viewSlide--
} else {
    viewSlide = 4;
}
viewSliders[viewSlide].style.backgroundColor = 'red';
slider.style.left = -viewSlide * viewport +'px';
 });

btnPrev.addEventListener('click',function() {
    viewSliders[viewSlide].style.backgroundColor = 'orange';

    if (viewSlide < 4) {
        viewSlide++;
    } else {
        viewSlide = 0; 
    }
    viewSliders[viewSlide].style.backgroundColor = 'red';
    slider.style.left = -viewSlide * viewport + 'px';
});