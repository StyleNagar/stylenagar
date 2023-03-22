const countdown = document.getElementById('countdown');

const launchDate = new Date('October 1, 2023 00:00:00').getTime();

const interval = setInterval(() => {
  const currentDate = new Date().getTime();

  const distance = launchDate - currentDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = '<h3>Style Nagar is Now Open!</h3>';
  }
}, 1000);
