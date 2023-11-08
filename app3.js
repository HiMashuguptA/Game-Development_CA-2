// Backgroundd Audio
let bgMusic3 = new Audio("game over.mp3")
bgMusic3.play()

// Click Exit Button redirects to Home Page
var exit = document.getElementById("exit-btn")
exit.addEventListener('click', () => {
    location.href="index.html"
})

// on Clicking Play Button Redirects to Game Page 
var playagain = document.getElementById("play-btn")
playagain.addEventListener('click', () => {
    localStorage.clear()
    location.href="indexthree.html"
})

// storing total moves in local storage and displaying it in Result
var result = document.getElementById("result")
    var score = JSON.parse(localStorage.getItem("totalmoves"))
    result.innerHTML=score

// if player complete the level before the then won will be displayed otherwise Lost will be displayed
var won = document.getElementById("won")
var Lost = document.getElementById("Lost")
var result = localStorage.getItem("result")
if (result=="won") {
    won.style.display="block"
    
}else(
    Lost.style.display="block"
)