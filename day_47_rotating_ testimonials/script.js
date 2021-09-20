const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
let data;

let idx = 0

async function updateTestimonial() {
  const res = await fetch('http://localhost:5000/testimonials')
  data = await res.json()
  const {  name, position, photo, text } = data[idx]
  testimonial.innerText = text
  userImage.src = photo
  username.innerText = name
  role.innerText = position

  idx++
  if(idx === data.length) idx = 0
}

setInterval(() => updateTestimonial(), 10000);


updateTestimonial()
