const hourEl = document.getElementById('hour')
const MinEl = document.getElementById('minutes')
const SecEl = document.getElementById('seconds')
const timeOfDay = document.getElementById('ampm')

function updateClock() {
  let hours = new Date().getHours()
  let minute = new Date().getMinutes()
  let sec = new Date().getSeconds()
  let ampm = 'AM'
    if(hours > 12) {
      hours = hours - 12;
      ampm = 'PM';
    }

    hours = hours<10 ? "0" + hours : hours;
    minute = minute<10 ? "0" + minute : minute;
    sec = sec<10 ? "0" + sec : sec;

    hourEl.innerText = hours;
    MinEl.innerText = minute;
    SecEl.innerText = sec;
    timeOfDay.innerText = ampm;
    setTimeout(() => {
      updateClock()
    }, 1000)
}

updateClock();


const soundOn = document.querySelector('.audio')
const buttonOn = document.querySelector('.music')

function playStop() {
  if (soundOn.paused) {
    soundOn.play();

    buttonOn.className = "music",
    buttonOn.classList.add('sound-active');
  } else {
    soundOn.pause()
    buttonOn.className = "music",
    buttonOn.classList.remove('sound-active');
  }
}

buttonOn.addEventListener('click', playStop);

soundOn.addEventListener('ended', function() {
  buttonOn.className = "music",
  buttonOn.classList.toggle('sound-active')
})