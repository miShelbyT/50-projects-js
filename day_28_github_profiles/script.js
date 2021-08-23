const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById("form")
const search = document.getElementById("search")

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const user = search.value
  if(user){
    getUser(user)
    form.reset()
  }
})

async function getUser(username) {
  try{
    const { data } = await axios(APIURL + username)
    // don't need to parse the JSON with axios
    if(data.name == null) renderErrorCard('ooops. no profile with this user name. please try again.')
    else createUserCard(data)
  } catch(error) {
    console.log(error.response.request.status)
    if(error.response.request.status == 404) renderErrorCard('ooops. no profile with this user name. please try again.')
  }
  
}

function createUserCard(user) {
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

function renderErrorCard(message){
  const cardHTML = `
  <div class="card">
  <h1>${message}</h1>
  </div>`
  main.innerHTML = cardHTML
}

