const boxes = document.querySelectorAll('.box')


function checkBoxes(){
  const triggerBottom = window.innerHeight * .8
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show')
  })
}

checkBoxes()

window.addEventListener('scroll', checkBoxes)

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect