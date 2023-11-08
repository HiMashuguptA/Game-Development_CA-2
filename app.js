// Background Audio
let bgMusic1 = new Audio("energy.mp3")
    bgMusic1.play()
    loop = true

// selecting start button and when clicked, redirected to the game page and home page audio stops
var startBtn = document.getElementById("start-btn")
startBtn.addEventListener('click', () => {
    bgMusic1.pause()
    let bgmMusic2 = new Audio("Music.mp3");
    bgmMusic2.play()
    loop = true
    location.href="indexthree.html"
})

// on clicking i logo or instruction text, redirects to the instruction page
var instruc = document.getElementById("i")
instruc.addEventListener('click', () => {
    console.log(instruc);
    location.href="indextwo.html"
})
var textInstruc = document.getElementById("instruction")
textInstruc.addEventListener('click', () => {
    console.log(textInstruc);
    location.href="indextwo.html"
})

