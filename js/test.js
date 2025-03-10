"use strict"
// Event delegation

const btns = document.querySelectorAll("button");
const wrapper = document.querySelector("#first");

wrapper.addEventListener("click", function(e){
    if(e.target && e.target.tagName === "BUTTON" || e.target.matches(".blue")|| e.target.tagName === "DIV"){
        console.log(e.target.textContent);
        
    }
})

const btn = document.createElement("button");
btn.textContent = 7;
btn.classList.add("blue");
wrapper.append(btn);
