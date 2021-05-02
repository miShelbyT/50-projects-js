const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSounds()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSounds(){
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    // HTML5 has audio API - there is no .stop() so we .pause() and reset time as per below
    song.pause()
    song.currentTime = 0
  })
}