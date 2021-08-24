const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let text = ''
let idx = 1
let speed = 300 / speedEl.value

let formGenerator = document.querySelector('.text-generator')
let input = document.getElementById('text-generator')

formGenerator.addEventListener('submit', (e) => {
  e.preventDefault()
  text = input.value
  writeText()
  formGenerator.reset()
})



function writeText() {
  textEl.innerText = text.slice(0,idx)
  idx++
  if(idx > text.length) idx = 1

  setTimeout(writeText, speed);
}

speedEl.addEventListener('click', (e) => speed = 300 / e.target.value)
