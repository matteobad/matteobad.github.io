var menuBlock = document.querySelector('.menu__block')
var menuIcon = document.querySelector('.menu')
menuIcon.addEventListener('click', function () {
  this.classList.toggle('close')
  this.classList.toggle('menu')
  menuBlock.classList.toggle('show')
})

var menuSpans = document.querySelectorAll('.menu__block span')
window.onhashchange = focusMenuItem

function focusMenuItem () {
  menuBlock.classList.toggle('show')
  menuIcon.classList.toggle('close')
  menuIcon.classList.toggle('menu')

  for (var i = 0; i < menuSpans.length; i++) {
    menuSpans[i].classList.remove('active')
    var spanText = menuSpans[i].innerText.toLowerCase().replace(' ', '-')
    if (window.location.hash.indexOf(spanText) === 1) {
      menuSpans[i].classList.add('active')
    }
  }
}
