// customize the height of slider
$(function () {
  let windowHeight = $(window).height()
  let navHeight = $('nav').innerHeight()
  $('.slider, .carousel-item ').height(windowHeight - navHeight)
})

// scroll to top
let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  this.scrollY >= 200
    ? (scrollBtn.style.right = '20px')
    : (scrollBtn.style.right = '-60px')
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// invoke wow library
new WOW().init()
