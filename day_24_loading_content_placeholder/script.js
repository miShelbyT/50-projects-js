const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const author_name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

// setTimeout(() => {
//   getData()
// }, 2000);

// or 
setTimeout(getData, 2000)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" alt="Harry Potter and the Order of the Phoenix, book by JK Rowling"/>'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, minus'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt=""></img>'
  author_name.innerHTML = 'JK Rowling'
  date.innerHTML = 'July 15, 2000'

  animated_bgs.forEach(bgEl => bgEl.classList.remove('animated-bg'))
  animated_bg_texts.forEach(bgTextEl => bgTextEl.classList.remove('animated-bg-text'))
}
