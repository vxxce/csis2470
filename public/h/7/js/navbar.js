// Constants for DOM elements
const menuButtons = [...document.querySelectorAll('button.slide')]
const navLists = [...document.querySelectorAll('.nav-list')]

// Function reveals mobile menu. "Slides" open or closed by setting transition duration
// and changing height to 8rem (if opening) or 0 (if closing)
const slide = target => {
  target.classList.toggle('visible')
  target.style.transitionProperty = 'height'
  target.style.transitionDuration = '500ms'
  target.style.height = target.offsetHeight + 'px'
  if (target.classList.contains('visible')) {
    target.style.height = '9rem'
    menuButtons.forEach(b => b.style.textDecoration = 'underline')
  } else {
    target.style.height = 0
    menuButtons.forEach(l => l.style.textDecoration = 'none')
  }
  // Clear transition after "slide" complete
  window.setTimeout(() => {
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
  }, 500)
}

// Menu button (seen on small screens only), triggers "slide" function
menuButtons.forEach(b => b.addEventListener('click', e => {
  slide(e.target.nextElementSibling)
}))

// Force navList height to handle interference between screen resizing and opened nav.
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navLists.forEach(n => n.style.height = '3.25rem')
    menuButtons.forEach(b => b.style.display = 'none')
  } else {
    navLists.forEach(n => n.classList.remove('visible'))
    navLists.forEach(n => n.style.height = '0')
    menuButtons.forEach(b => b.style.display = 'block')
    menuButtons.forEach(b => b.style.textDecoration = 'none')
  }
})

window.addEventListener("load", () => menuButtons.forEach(b => b.style.display = (window.innerWidth < 600) ? 'block' : 'none'))

//=================================