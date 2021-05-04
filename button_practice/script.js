const button = document.querySelector('.normal-styles')
console.log(button)

button.addEventListener('click', (event) => {
  if(event.target.matches('button')){
    event.target.classList.toggle('sorta-hide')
  }
})