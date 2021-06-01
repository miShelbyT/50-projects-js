const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  function updateCounter() {
    // using + instead of parseInt() - also works!!!!!
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    // how fast do we want the number to increment.
    const increment = target / 100

    if(c < target) {
      // this will tell the compiler how much to increment. we will increment multiple times until c >= target. then we exit this conditional
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
})
