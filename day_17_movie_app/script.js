import API_KEY from './apikey.js'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let page = '1'
let numPage = Number(page)

// pagination works! still need to finesse how to disable prev button when i get to page 1 and grey it out, and then reverse the process when page is > 1.

let API_URL =
`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=`


const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API =
  `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`



async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `<img src="${IMG_PATH}${poster_path}" alt="${title}">
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    ${overview}
  </div>`
  main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if(vote >= 8 ) return 'green'
  if(vote >= 5) return 'orange'
  else return 'red'
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value
  if (searchTerm && searchTerm !== '') {
    getMovies(`${SEARCH_API}${searchTerm}`)
    search.value = ''
  } else window.location.reload()
})

prev.addEventListener('click', () => {
  if(numPage > 1) numPage -= 1
  page = numPage.toString()
  getMovies(`${API_URL}${page}`)
})

next.addEventListener('click', () => {
  numPage += 1
  page = numPage.toString()
  getMovies(`${API_URL}${page}`)
})

getMovies(API_URL)
