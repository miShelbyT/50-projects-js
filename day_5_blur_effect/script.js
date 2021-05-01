const background = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
  load++
  if(load > 49) {
    clearInterval(int)
  }
  loadText.innerHTML = `${load}%`
  loadText.style.opacity = scale(load, 0, 50, 1, 0)
  background.style.filter = `blur(${scale(load, 0, 50, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// we want to map a range of numbers (load) to another range of numbers (opacity)

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers