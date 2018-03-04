const lazyImages = document.querySelectorAll('img.lazyload')

for (const img of lazyImages) {
  console.log('lazy loading image')
  if (img.getAttribute('data-srcset')) {
    img.setAttribute('srcset', img.getAttribute('data-srcset'))
    img.onload = function () {
      img.removeAttribute('data-srcset')
    }
  }
  if (img.getAttribute('data-src')) {
    img.setAttribute('src', img.getAttribute('data-src'))
    img.onload = function () {
      img.removeAttribute('data-src')
    }
  }
}
