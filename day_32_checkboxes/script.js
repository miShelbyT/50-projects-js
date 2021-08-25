const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')


toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(el){
  if(good.checked && cheap.checked && fast.checked){
    if(good === el) {
      fast.checked = false
    }
    if(cheap === el){
      good.checked = false
    }
    if(fast === el) {
      cheap.checked = false
    }
  }
}