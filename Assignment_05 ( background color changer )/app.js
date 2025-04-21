button = document.getElementById('btn');

function randomColor() {
    return Math.floor((Math.random() * 255));
};

button.addEventListener('click' , () => {
    document.body.style.backgroundColor = `rgb(${randomColor()} , ${randomColor()} , ${randomColor()})`
});