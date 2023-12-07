function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
    if (intervalId) {
        return;
    }

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
}

function onStopButtonClick() {
    clearInterval(intervalId);
    intervalId = null;

    startButton.disabled = false;
    stopButton.disabled = true;
}


// Функція getRandomHexColor генерує випадковий колір у форматі hex.
// Створено посилання на кнопки "Start" і "Stop".
// Встановлено обробники подій для обох кнопок.
// При натисканні на кнопку "Start" запускається інтервал, який змінює колір фону кожну секунду.
// При натисканні на кнопку "Stop" інтервал зупиняється, і кнопка "Start" робиться активною,
//     а кнопка "Stop" - неактивною.