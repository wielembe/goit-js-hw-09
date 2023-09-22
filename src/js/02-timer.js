import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
let insertedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chosenDate = selectedDates[0];
    if (chosenDate < new Date()) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      insertedDate = chosenDate;
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => value.toString().padStart(2, '0');

let timerId = 0;

const startTimer = event => {
  timerId = setInterval(() => {
    const difference = insertedDate - new Date();
    if (difference <= 0) {
      clearInterval(timerId);
      return;
    }
    daysTimer.textContent = addLeadingZero(convertMs(difference).days);
    hoursTimer.textContent = addLeadingZero(convertMs(difference).hours);
    minutesTimer.textContent = addLeadingZero(convertMs(difference).minutes);
    secondsTimer.textContent = addLeadingZero(convertMs(difference).seconds);
  }, 1000);
};

startBtn.addEventListener('click', startTimer);
