const jokeEl = document.getElementById('joke')
const jokeBtn = document.querySelector('.btn')

jokeBtn.addEventListener('click', generateJoke)


async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  let response = await fetch('https://icanhazdadjoke.com/', config)
  let data =  await response.json()
  jokeEl.innerHTML = data.joke
}