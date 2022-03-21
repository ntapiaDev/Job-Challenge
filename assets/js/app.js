let btns = document.querySelectorAll(".btn")
let btnLeft = document.querySelector(".carousel-left")
let btnRight = document.querySelector(".carousel-right")
let slides = document.querySelector(".slides")
let slideImgs = document.querySelectorAll(".slide img")

btnLeft.style.display = "none"

let widthIndex = 1
if (window.matchMedia("(min-width: 1200px)").matches) {
    widthIndex = 3
    for (let btn of btns) {
        btn.style.width = "50px"
    btn.style.height = "50px"
    }
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

let fadeIn = function() {
    slideImgs = document.querySelectorAll(".slide img")
    for (let slideImg of slideImgs) {
        slideImg.style.transition = "opacity 0s"
        slideImg.style.opacity = "0"
        let opacity = function() {
            slideImg.style.transition = "opacity 0.5s"
            slideImg.style.opacity = "1"
        }
        setTimeout(opacity, 50)
    }    
}

let carouselIndex = 0
let moveRight = function() {
    carouselIndex += 1
    slides.style.transform = "translate3d(" + -carouselIndex * 100 / (nbSlides + 1) + "%, 0, 0)"
    addSlide()
    if (btnLeft.style.display = "none") {
        btnLeft.style.display = "flex"
    }
    fadeIn()
}
let moveLeft = function() {
    carouselIndex -= 1
    slides.style.transform = "translate3d(" + -carouselIndex * 100 / nbSlides + "%, 0, 0)"
    if (carouselIndex === 0) {
        btnLeft.style.display = "none"
    }
    fadeIn()
    clearInterval(autoMove)
}

carouselWidth()
btnRight.addEventListener("click", moveRight)
btnLeft.addEventListener("click", moveLeft)

let autoMove = setInterval(moveRight, 2000)

// FLIPCARD

let cards = document.querySelectorAll(".project")

let flip = function() {
    this.children[0].style.transform = "rotateY(180deg)"
    this.children[0].children[0].style.display = "none"
    this.children[0].children[1].style.transform = "rotateY(-180deg)"
    this.children[0].children[2].style.display = "block"
    this.children[0].children[2].style.transform = "rotateY(-180deg)"
    this.children[0].children[3].style.display = "block"
}

let unflip = function() {
    this.children[0].style.transform = "rotateY(0deg)"
    this.children[0].children[0].style.display = "block"
    this.children[0].children[1].style.transform = "rotateY(0deg)"
    this.children[0].children[2].style.display = "none"
    this.children[0].children[2].style.transform = "rotateY(0deg)"
    this.children[0].children[3].style.display = "none"
}

for (let card of cards) {
    card.addEventListener("mouseover", flip)
}

for (let card of cards) {
    card.addEventListener("mouseout", unflip)
}

// MODALE

let modalBtnAll = document.querySelectorAll(".flip-btn")
let modal = document.querySelector("#modal")
let closeModalBtnAll = document.querySelectorAll(".modal-btn")

let openModal = function() {
    modal.style.display = "block"
    this.parentElement.children[0].style.display = "block"
    this.parentElement.children[1].style.transform = "rotateY(0deg)"
    this.parentElement.children[2].style.transform = "rotateY(0deg)"
    this.parentElement.children[3].style.display = "none"
    modal.children[0].children[0].innerHTML = this.parentElement.innerHTML
}

let closeModal = function() {
    modal.style.display = "none"
}

for (let modalBtn of modalBtnAll) {
    modalBtn.addEventListener("click", openModal)
}

for (let closeModalBtn of closeModalBtnAll) {
    closeModalBtn.addEventListener("click", closeModal)
}