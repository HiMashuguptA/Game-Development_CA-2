// Background Audio
let bgMusic1 = new Audio("energy.mp3")
    bgMusic1.play()
    loop = true

// on clicking cut icon, redirects to the home page
var crosssimage = document.getElementById("Img-cross")
crosssimage.addEventListener('click', () => {
    location.href="index.html"
})

