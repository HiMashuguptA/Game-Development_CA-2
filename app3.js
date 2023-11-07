let bgMusic3 = new Audio("carry.mp3")
bgMusic3.play()
var exit = document.getElementById("btn2")
exit.addEventListener('click', () => {
    location.href="index.html"
})
var playagain = document.getElementById("btn1")
playagain.addEventListener('click', () => {
    localStorage.clear()
    location.href="indexthree.html"
})
var won = document.getElementById("won")
var Lost = document.getElementById("Lost")
var result = localStorage.getItem("result")
if (result=="won") {
    won.style.display="block"
    
}else(
    Lost.style.display="block"
)