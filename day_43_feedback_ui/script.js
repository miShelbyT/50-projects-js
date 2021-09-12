const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  // img doesn't contain rating but the parent div does. 
  // the user would expect to click on the faces not the surrounding divs
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank you for your feedback</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support.</p>
  `
})

function removeActive(){
  ratings.forEach(rating => rating.classList.remove('active'))
}