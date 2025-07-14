// Set target date
const launchDate = new Date("2025-12-31T00:00:00").getTime();
const timerDisplay = document.getElementById("countdown-timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    timerDisplay.textContent = "We have launched!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  timerDisplay.textContent = `${days} Days : ${hours} Hours : ${minutes} Minutes`;
}

updateCountdown();
setInterval(updateCountdown, 60000); // update every 1 minute
