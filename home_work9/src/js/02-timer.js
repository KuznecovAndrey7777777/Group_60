import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        handleDateSelection(selectedDates[0]);
    },
};

const datePicker = flatpickr("#datetime-picker", options);
const startButton = document.querySelector('[data-start]');
const timerFields = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let countdownInterval;

function handleDateSelection(selectedDate) {
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
        window.alert("Please choose a date in the future");
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
}

function startCountdown(selectedDate) {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        const timeRemaining = selectedDate - new Date();
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            updateTimerFields({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            startButton.disabled = true;
            return;
        }
        const { days, hours, minutes, seconds } = convertMs(timeRemaining);
        updateTimerFields({ days, hours, minutes, seconds });
    }, 1000);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimerFields({ days, hours, minutes, seconds }) {
    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => {
    const selectedDate = new Date(datePicker.selectedDates[0]);
    startCountdown(selectedDate);
});

function handleDateSelection(selectedDate) {
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
        // Використовуйте повідомлення Notiflix замість window.alert()
        Notiflix.Notify.failure('Будь ласка, виберіть дату у майбутньому');
        startButton.disabled = true;
    } else {
        startButton.disabled = false;
    }
}