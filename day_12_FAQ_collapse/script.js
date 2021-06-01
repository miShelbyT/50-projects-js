// my pseudo code: add event listener on button, adding active class will show answer and change properties. my solution below works in two ways.

// const container = document.querySelector('.faq-container')
// const faqDivs = document.querySelectorAll('.faq')

// container.addEventListener('click', (e) => {
//   faqDivs.forEach((faq) => faq.classList.remove('active'))
//   // console.log(e.target)
//   if (e.target.matches('i')) {
//     const faqDiv = e.target.closest('.faq')
//     faqDiv.classList.add('active')
//     // or i can use .toggle() instead of .add() here. if I do i should comment out line 7
//   }
// })

// instructor psuedo code: bring in toggle buttons using querySelectorAll, then loop thru using forEach, then add click event, then toggle active class on parent node, can use classList.toggle()

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
     toggle.parentNode.classList.toggle('active')
  })
})
