const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value
  if (user) {
    getUser(user)
    getRepos(user)
    form.reset()
  }
})

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    // don't need to parse the JSON with axios
    if (data.name == null)
      renderErrorCard(
        'ooops. no profile with this user name. please try again.'
      )
    else renderUserCard(data)
  } catch (error) {
    if (error.response.request.status == 404)
      renderErrorCard(
        'ooops. no profile with this user name. please try again.'
      )
  }
}

function renderUserCard(user) {
  const cardHTML = `<div class="card">
  <div>
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.name}</h2>
    <p>
    ${user.bio}
    </p>
    <ul>
      <li>${user.followers}<strong>Followers</strong></li>
      <li>${user.following}<strong>Following</strong></li>
      <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
  </div>
</div>`

  main.innerHTML = cardHTML
}

async function getRepos(user) {
  try {
    const { data } = await axios(APIURL + user + '/repos?sort=created')
    addReposToCard(data)
  } catch (error) {
    renderErrorCard("Problem fetching repos")
  }
}

function addReposToCard(data){
  const repoList = document.getElementById('repos')
  for(let i = 0; i < 7; i++){
    let repo = document.createElement('a')
    repo.classList.add('repo')
    repo.innerText = data[i].name
    repo.href = data[i].html_url
    repo.target = "_blank"
    repoList.append(repo)
  }
  
}

function renderErrorCard(message) {
  const cardHTML = `
  <div class="card">
  <h1>${message}</h1>
  </div>`
  main.innerHTML = cardHTML
}
