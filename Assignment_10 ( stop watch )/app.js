const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const restartButton = document.getElementById('reset');
const display = document.getElementById('display');

let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;


const startTimer = () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
            displayUpdate();
        }, 1000)
    };
};

const displayUpdate = () => {
    hours = hours + '';
    minutes = minutes + '';
    seconds = seconds + '';
    display.textContent = `${hours.padStart(2, 0)} : ${minutes.padStart(2, 0)} : ${seconds.padStart(2, 0)}`;
};

const stopTimer = () => {
    isRunning = false;
    clearInterval(timer);
};

const resetTimer = () => {
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(timer);
    displayUpdate();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
restartButton.addEventListener('click', resetTimer);