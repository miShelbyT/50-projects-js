const navList = document.querySelectorAll('nav ul li')
const images = document.querySelectorAll('.content')

images[0].classList.add('show')
navList[0].classList.add('active')

function changeImage(){
  images.forEach(img => img.classList.remove('show'))
}

function changeNavClass(){
  navList.forEach(navEl => navEl.classList.remove('active'))
}

navList.forEach((navEl, idx) => {
  navEl.addEventListener('click', () => {
    changeImage()
    changeNavClass()

    navEl.classList.add('active')
    images[idx].classList.add('show')
  })
})




// loop through nav elements. add event listeners to each element. 
//create node list of images. whichever nav element is clicked, add active class to that element 
// and add show class to corresponding image. use idx within forEach