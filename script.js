let homecount = document.getElementById("screencounter1")
let guestcount = document.getElementById("screencounter2")

let hc = 0

function add1(){
    hc += 1
    homecount.textContent = hc
}
