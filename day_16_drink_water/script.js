const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

// we want to call this function on render, and also whenever we click on a small cup to update the big cup fill height
updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

// idx represents the cup that we click on. idx2 represents the ones that come before idx so we can add or remove the class of full
function highlightCups(idx) {
  // this allows us to target/toggle on and off on the last full cup (increment or decrement the amount of cups via clicking on a small cup)
  if (smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')) idx--
  
    smallCups.forEach((cup, idx2) => {
    idx2 <= idx ? cup.classList.add('full') : cup.classList.remove('full')
  updateBigCup()
})
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups == 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)} L`
    console.log(liters)
  }
}
// he set remained.style.visibility = 'hidden'
// remained.style.height = 0 so it looked 100% full
// to toggle back to less water drank he added an else remained.style.visibility = 'visible'
