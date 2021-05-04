const tagsEl = document.getElementById('tag')
const textArea = document.getElementById('textarea')

// not sure if this is necessary
// textArea.focus()

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  if(e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
      // clears the text area
    }, 10);

    randomSelect()
  }
})

function createTags(input) {
  // take input and create array that we will iterate thru, also trim out whitespace
const tags = input.split(',').filter(tag => tag.trim() !== '')
.map(tag => tag.trim())
// clear innerHTML this somehow keeps each word in one button
tagsEl.innerHTML = ''

tags.forEach(tag => {
  const tagEl = document.createElement('span')
  tagEl.classList.add('tag')
  tagEl.innerText = tag
  tagsEl.appendChild(tagEl)
  // looks like .append() would have worked the same way
})
}

function randomSelect(){
  const times = 30
  // makes tags flash intermittently, using highlight and unhighlight functions
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100);
  }, 100);

  // clears interval from line 38 so it doesn't run forever
  setTimeout(() => {
    clearInterval(interval)
// then picks one tag to end on after a brief delay
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
const tags = document.querySelectorAll('.tag')
return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}