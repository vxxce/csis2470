// Navigation Bar
// ===============================

// Constants for DOM elements
const menuButton = document.querySelector('button#slide')
const navList = document.querySelector('#nav-list');
const label = document.querySelector('#menu-label')

// Function reveals mobile menu. "Slides" open or closed by setting transition duration
// and changing height to 8rem (if opening) or 0 (if closing)
const slide = target => {
  target.classList.toggle('visible')
  target.style.transitionProperty = 'height'
  target.style.transitionDuration = '500ms'
  target.style.height = target.offsetHeight + 'px'
  if (target.classList.contains('visible')) {
    target.style.height = '10rem'
    label.style.textDecoration = 'underline'
  } else {
    target.style.height = 0
    label.style.textDecoration = 'none'
  }
  // Clear transition after "slide" complete
  window.setTimeout(() => {
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
  }, 500)
}

// Menu button (seen on small screens only), triggers "slide" function
menuButton.addEventListener('click', () => slide(navList))

// Force navList height to handle interference between screen resizing and opened nav.
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navList.style.height = '3.5rem'
  } else {
    navList.classList.remove('visible')
    navList.style.height = 0
    label.style.textDecoration = 'none'
  }
})

//=================================