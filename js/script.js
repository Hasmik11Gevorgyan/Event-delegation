"use strict"


// window.addEventListener('load', function() {


   
window.addEventListener("load", function() {
  const slides = document.querySelectorAll(".slider-wrapper-item");
  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  const counter = document.querySelector("#counter");



  let currentSlide = 0;
 
  next.addEventListener("click", function(){
    if(slides.length >1){
      slides[currentSlide].style.display = "none";
      currentSlide++
      if(currentSlide >= slides.length){
        currentSlide = 0;
      }
    }
    slides[currentSlide].style.display = "block";
    setState(currentSlide)
  })

prev.addEventListener("click", function(){
  if(slides.length >1){
    slides[currentSlide].style.display = "none";
    currentSlide--
    if(currentSlide < 0){
      currentSlide = slides.length-1;
    }
  }
  slides[currentSlide].style.display = "block";
  setState(currentSlide)
})

function setState(state){
    counter.textContent = `${state+1} / ${slides.length}`
}

setState(currentSlide)
})