const canvas = document.getElementById('canvas')
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearBtn = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
let color
let x
let y

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = null //does this work or does it have to be undefined?
  y = null
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    x2 = e.offsetX
    y2 = e.offsetY

    drawCircle(x2,y2)
    drawLine(x,y,x2,y2)
    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

colorEl.addEventListener('change', (e) => color = e.target.value)


function updateSizeOnScreen() {
  sizeEl.innerText = size
}

decreaseBtn.addEventListener('click', () => {
  if(size > 5) {
    size -= 5
    updateSizeOnScreen()
  }
})

increaseBtn.addEventListener('click', () => {
  if(size < 50) {
    size += 5
    updateSizeOnScreen()
  }
})

clearBtn.addEventListener('click', () => ctx.clearRect(0,0,canvas.width, canvas.height))