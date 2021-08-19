const button = document.querySelector('button')
const toasts = document.getElementById('toasts')

const messages = [
  "Sucking at something is the first step towards being good at something",
  "You'll find a way",
  "Failure is just another way to learn how to do something right",
  "You can do it",
  "Your mind is full of brilliant ideas",
  "All you need is the plan, the roadmap, and the courage to press on to your destination",
  "Mistakes don't make you less capable"
]

const types = [
  'info', 'success', 'error'
]

button.addEventListener('click', () => createNotification())

// could do something like this:
// function createNotification(message = null){
function createNotification(type){
  let randomIdx = Math.round(Math.random() * (messages.length - 1));
  const notification = document.createElement('div')
  notification.classList.add('toast')
  notification.classList.add(selectTypeAtRandom())
  // notification.innerText = message ? message : messages[randomIdx]
  notification.innerText = messages[randomIdx]
  toasts.append(notification)

  // messages disappear after 3 seconds
  setTimeout(()=> {
    notification.remove()
  }, 3000)
}

function selectTypeAtRandom(){
  return types[Math.floor(Math.random() * types.length)]
}