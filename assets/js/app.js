let btnLeft = document.querySelector(".carousel-left")
let btnRight = document.querySelector(".carousel-right")
let slides = document.querySelector(".slides")

btnLeft.style.display = "none"

let widthIndex = 1
if (window.matchMedia("(min-width: 1200px)").matches) {
    widthIndex = 3
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    widthIndex = 2
  }

let allSlides = []
let nbSlides = 0
let carouselWidth = function() {
    allSlides = document.querySelectorAll(".slide")
    nbSlides = allSlides.length
    slides.style.width = nbSlides * 100 / widthIndex + "%"
}

let addSlide = function() {
    let newSlide = allSlides[carouselIndex - 1].cloneNode([true])
    slides.appendChild(newSlide)
    carouselWidth()
}

let carouselIndex = 0
let moveRight = function() {
    carouselIndex += 1
    slides.style.transform = "translate3d(" + -carouselIndex * 100 / (nbSlides + 1) + "%, 0, 0)"
    addSlide()
    if (btnLeft.style.display = "none") {
        btnLeft.style.display = "flex"
    }
}
let moveLeft = function() {
    carouselIndex -= 1
    slides.style.transform = "translate3d(" + -carouselIndex * 100 / nbSlides + "%, 0, 0)"
    if (carouselIndex === 0) {
        btnLeft.style.display = "none"
    }
    clearInterval(autoMove)
}

carouselWidth()
btnRight.addEventListener("click", moveRight)
btnLeft.addEventListener("click", moveLeft)

let autoMove = setInterval(function() {
    moveRight()}, 2000)