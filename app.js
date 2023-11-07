let bgMusic1 = new Audio("rom.mp3")
    bgMusic1.play()
    loop = true
var startBtn = document.getElementById("btn3")
startBtn.addEventListener('click', () => {
    console.log(btn3);
    bgMusic1.pause()
    let bgmMusic2 = new Audio("Music.mp3");
    bgmMusic2.play()
    loop = true
    location.href="indexthree.html"
})

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

