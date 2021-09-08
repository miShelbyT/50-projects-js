const addBtn = document.querySelector('.add')

const notes = JSON.parse(localStorage.getItem('notes'))

// on refresh we check to see if there are notes. if so we run line 7 which invokes addNewNote, which updates local storage on line 51
if(notes){
  notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())




function addNewNote(text = ''){
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>
  
  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `

  const editBtn =  note.querySelector('.edit')
  const deleteBtn =  note.querySelector('.delete')
  const main =  note.querySelector('.main')
  const textArea =  note.querySelector('textarea')

textArea.value = text
main.innerHTML = marked(text)

deleteBtn.addEventListener('click', () => {
  note.remove()
  updateLS()
})

editBtn.addEventListener('click', () => {
  main.classList.toggle('hidden')
  textArea.classList.toggle('hidden')
})

textArea.addEventListener('input', (e)=> {
  // we've destructured e.target to pull value and place in curly braces. e.target, i.e., the textarea is an object!
const { value } = e.target
main.innerHTML = marked(value)

updateLS()
})

document.body.append(note)
}



function updateLS() {
const notesText = document.querySelectorAll('textarea')

const notes = []

notesText.forEach(note => notes.push(note.value))

localStorage.setItem('notes', JSON.stringify(notes))
}

//sessionStorage works the same as local storage but if you close the browser and reopen your session is over and your data is gone

// localStorage.clear(); for clear all button

//we can only store strings in local storage -- use JSON.stringify() then use JSON.parse()
// localStorage.setItem('name', 'Tiger Rose')
// localStorage.setItem('name2', 'Tiger Rose')
// localStorage.getItem('name')
// localStorage.removeItem('name2')