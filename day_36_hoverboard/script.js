const container = document.getElementById('container')
const colors = ['#e55361', '#53e58e', '#53aae5', '#e58e53', '#d6b5c0', '#ff84a3', '#8e53e5', 'white']
const SQUARES = 1200
const button = document.querySelector('button')

for(let i = 0; i < SQUARES; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  // square.addEventListener('mouseout', () => removeColor(square))
  container.appendChild(square)
}

button.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => removeColor(square))
  })

function setColor(el){
  let color = colors[Math.floor(Math.random() * colors.length)]
  el.style.background = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el){
  el.style.background = '#1d1d1d'
  el.style.boxShadow = '0 0 2px #000'
}

// Element.append() vs Node.appendChild()
// https://developer.mozilla.org/en-US/docs/Web/API/Element/append 