const password = document.getElementById('password')
const background = document.getElementById('background')


password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
  
  if(regex.test(input) == true){
    const blurVal = 20 - length * 2
    background.style.filter = `blur(${blurVal}px)`
  }
  
})