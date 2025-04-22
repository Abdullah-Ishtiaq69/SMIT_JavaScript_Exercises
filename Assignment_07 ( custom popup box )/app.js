var button = document.getElementById('btn');
var box = document.getElementById('popup');
var closeButton = document.getElementById('close');
var overflow = document.getElementById('overflow');

box.style.display = 'none';

button.addEventListener('click' , () => {
    box.setAttribute('class' , 'main-box');
});

closeButton.addEventListener('click' , () => {
    box.removeAttribute('class' , 'main-box')
});

overflow.addEventListener('click' , () => {
    box.removeAttribute('class' , 'main-box')
    box.style.display = 'none'
});