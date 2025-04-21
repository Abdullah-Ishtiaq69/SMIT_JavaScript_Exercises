button = document.getElementById('btn');
text = document.getElementById('text');

function randomColor() {
    return Math.floor((Math.random() * 255));
};

button.addEventListener('click' , () => {
    document.body.style.backgroundColor = `rgb(${randomColor()} , ${randomColor()} , ${randomColor()})`
    text.innerHTML = `Background Color rgb(${randomColor()} , ${randomColor()} , ${randomColor()})`
});