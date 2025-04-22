var randomNum = Math.floor((Math.random() * 100));
var input = document.getElementById('input');

var okButton = document.getElementById('first');
var resetButton = document.getElementById('second');

var result = document.getElementById('result');

okButton.addEventListener('click', () => {
    if (input.value === randomNum + '') {
        result.innerHTML = `Congratulations Number Matched ❤️`
    } else if (input.value === '') {
        alert('Please Enter a Number Between 1 to 100')
    } else if (input.value > randomNum) {
        result.innerHTML = `Sorry You Entered Bigger Number 😑`
    } else (input.value < randomNum) {
        result.innerHTML = `Sorry You Entered Smaller Number 😑`
    }
});

resetButton.addEventListener('click', () => {
    input.value = ''
});

console.log(randomNum);