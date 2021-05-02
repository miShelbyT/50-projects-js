 const labels = document.querySelectorAll('.form-control label')

 labels.forEach(label => {
   label.innerHTML = label.innerText
   .split('')
   .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
   .join('')
 })

//  this transition-delay style creates the wave/ripple effect on each letter bc each letter is delayed by an additional 50ms from the previous