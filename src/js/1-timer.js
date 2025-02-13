import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// !============================================
// iziToast.success({
//     title: "Готово!",
//     message: "Библиотека iziToast подключена!",
//     position: "topRight",
// });


const input = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let countdownInterval;
let userSelectedDate = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];

        if (userSelectedDate <= new Date()) {
            // alert("Please choose a date in the future");
            startButton.disabled = true;
            iziToast.warning({
                title: 'Caution',
                message: 'Please choose a date in the future',
            });
        } else {
            startButton.disabled = false;
        }
    },
};


flatpickr(input, options);


function startTimer() {
    startButton.disabled = true;
    input.disabled = true;

    countdownInterval = setInterval(() => {
        const currentTime = new Date();
        
        const timeDiff = userSelectedDate - currentTime;

        if (timeDiff <= 0) {
            clearInterval(countdownInterval);
            updateTimer(0, 0, 0, 0);
            // alert("Час вийшов!");
            iziToast.info({
                title: 'Hello',
                message: 'Час вийшов!',
            });
            input.disabled = false;
            return;
        }

        const { days, hours, minutes, seconds } = convertMs(timeDiff);
        updateTimer(days, hours, minutes, seconds);
    }, 1000);
}


function updateTimer(days, hours, minutes, seconds) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    return {
        days: Math.floor(ms / day),
        hours: Math.floor((ms % day) / hour),
        minutes: Math.floor((ms % hour) / minute),
        seconds: Math.floor((ms % minute) / second),
    };
}


function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

startButton.addEventListener("click", startTimer);

