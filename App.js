const incrementbtn = document.getElementById("increbtn")
const decrementbtn = document.getElementById("decrebtn")
let display = document.querySelector(".display")
const resets = document.querySelector(".reset")
let val = 0;
incrementbtn.addEventListener("click", increase)
function increase(){
    val = val+1;
    display.innerText = val 
}

decrementbtn.addEventListener("click", decrease)
function decrease(){
    val = val-1;
    display.innerText = val  
}
resets.addEventListener("click", reset)
function reset(){
    val = 0;
    display.innerText = val  
}