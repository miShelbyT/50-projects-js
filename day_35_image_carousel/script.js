const imgs = document.getElementById('imgs')
const imageList = document.querySelectorAll("#imgs img")
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  if(idx > imageList.length - 1) idx = 0
  else if(idx < 0) idx = imageList.length - 1
  imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  resetInterval()
  idx++
  changeImage()
})

leftBtn.addEventListener('click', () => {
  resetInterval()
  idx--
  changeImage()
})
