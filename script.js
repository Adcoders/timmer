const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");

// Set the target time (7 days from now)
const targetTime = new Date();
targetTime.setDate(targetTime.getDate() + 7);

function updateTimer() {
  const currentTime = new Date();
  const remainingTime = targetTime - currentTime;

  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    daysElem.textContent = "00";
    hoursElem.textContent = "00";
    minutesElem.textContent = "00";
    secondsElem.textContent = "00";
    alert("Time's up!");
    return;
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  daysElem.textContent = String(days).padStart(2, "0");
  hoursElem.textContent = String(hours).padStart(2, "0");
  minutesElem.textContent = String(minutes).padStart(2, "0");
  secondsElem.textContent = String(seconds).padStart(2, "0");
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
