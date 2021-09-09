const codeNums = document.querySelectorAll('.code')

codeNums[0].focus()

codeNums.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9) {
      codeNums[idx].value = ''
      setTimeout(() => codeNums[idx + 1].focus(), 10)
    }
    else if(e.key === 'Backspace') setTimeout(() => codeNums[idx - 1].focus(), 10)
  })
});