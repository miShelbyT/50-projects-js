const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'August',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

toggleEl.addEventListener('click', (e) => {
  const body = document.querySelector('body')
  body.classList.toggle('dark')
  body.classList.contains('dark')
    ? (e.target.innerHTML = 'Light Mode')
    : (e.target.innerHTML = 'Dark Mode')
})

function setTime() {
  const today = new Date()
  const month = today.getMonth()
  const day = today.getDay()
  const date = today.getDate()
  const hours = today.getHours()
  const hoursForClock = hours % 12
  const minutes = today.getMinutes()
  const seconds = today.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes} ${ampm}`

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

setTime()

setInterval(setTime, 1000)
