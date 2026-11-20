let homecount = document.getElementById("screencounter1")
let guestcount = document.getElementById("screencounter2")

let hc = 0
let gc = 0

function add1(){
    hc += 1
    homecount.textContent = hc
}

function add2(){
    hc += 2
    homecount.textContent = hc
}
function add3(){
    hc += 3
    homecount.textContent = hc
}

// 

function oneadd(){
    gc += 1
    guestcount.textContent = gc
}

function twoadd(){
    gc += 2
    guestcount.textContent = gc
}
function threeadd(){
    gc += 3
    guestcount.textContent = gc
}
