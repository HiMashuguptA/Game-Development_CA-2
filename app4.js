
let bgmMusic = new Audio("Music.mp3");
    bgmMusic.play()


let level1 = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
let level2 = [
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1]
]

let level3 = [
    [1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1]
]
let level4 = [
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 1]
]
let level5 = [
    [1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 1]
]

let mazearray = level1;
let Level = document.getElementById("levelselect");
// var lvlsele = JSON.parse(localStorage.getItem("lvlvalue"))


let timer;
let timeInSeconds = 0;

let levelTimes = {
    1: 999,
    2: 2,
    3: 3,
    4:5,
    5:6
};

function displayTime(seconds) {
    const timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDisplay.textContent = `Time: ${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
}
function startTimer() {
    clearInterval(timer);
    timeInSeconds = levelTimes[Level.value];

    timer = setInterval(function () {
        timeInSeconds--;
        if (timeInSeconds < 0) {
            clearInterval(timer);
            localStorage.setItem("result","loose")
            window.open("indexfour.html")
            

            // Implement actions to handle the time's up event
        }
        displayTime(timeInSeconds);
    }, 1000);
}
let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");
let food = document.getElementById("food");
Level.addEventListener("change", function () {
    let level = Level.value;
    // let level = lvlsele
    // console.log(level);
    // console.log(level);
    clearInterval(timer);
    if(level==1){
        mazearray = level1; 
    }
    if (level ==2) {
        mazearray = level2;
    }
    if (level == 3) {
        mazearray = level3;
    }
    if (level == 4) {
        mazearray = level4;
        
    }
    if (level == 5) {
        mazearray = level5;
        
    }
    maze.innerHTML =
        `<img src="rat.png" id ="rat" width="50px" height="50px" alt="rat" >
    <img src="food.png" alt="rat" width="50px" height="50px" id="food">`
    startTimer();
    createMaze();
})

function setratposition(x, y) {
    rat.style.top = x + "px";
    rat.style.left = y + "px";
}
function setfoodposition(x, y) {
    food.style.bottom = x + "px";
    food.style.right = y + "px";
}


function createMaze() {
    for (let i = 0; i < mazearray.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < mazearray[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            if (mazearray[i][j] == 0) {
                cell.classList.add("wall");
            }
            row.appendChild(cell);



            // rat = 2 , replace 2 with 0,0 of mazearray ---------------------------------
            if (i == 0 && j == 0) {
                mazearray[i][j] = 2;
            }
        }
        maze.appendChild(row);
    }

    setratposition(0, 0)
    setfoodposition(0, 0)
    // console.log(mazearray);
}


function getratposition() {
    // find 2 in mazearray and return its position
    let position = [-1, -1];
    for (let i = 0; i < mazearray.length; i++) {
        for (let j = 0; j < mazearray[i].length; j++) {
            if (mazearray[i][j] == 2) {
                position[0] = i;
                position[1] = j;
            }
        }
    }
    console.log(position);
    return position;
}



document.addEventListener("keydown", function (e) {
    let rat = document.getElementById("rat");
    let food = document.getElementById("food");
    let ratleft = rat.offsetLeft;
    let rattop = rat.offsetTop;
    let foodleft = food.offsetLeft;
    let foodtop = food.offsetTop;
    let ratposition = getratposition();
    
    
    
    
    
    // console.log(ratleft, rattop);
    if (e.key == "ArrowRight" && ratleft < (mazearray.length - 1) * 50 && mazearray[ratposition[0]][ratposition[1] + 1] == 1) {
        ratleft += 50;
        rat.style.left = ratleft + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0]][ratposition[1] + 1] = 2;
    }
    
    
    if (e.key == "ArrowLeft" && ratleft > 0 && mazearray[ratposition[0]][ratposition[1] - 1] == 1) {
        ratleft -= 50;
        rat.style.left = ratleft + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0]][ratposition[1] - 1] = 2;
    }
    
    if (e.key == "ArrowUp" && rattop > 0 && mazearray[ratposition[0] - 1][ratposition[1]] == 1) {
        rattop -= 50;
        rat.style.top = rattop + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0] - 1][ratposition[1]] = 2;
    }
    
    
    if (e.key == "ArrowDown" && rattop < (mazearray.length - 1) * 50 && mazearray[ratposition[0] + 1][ratposition[1]] == 1) {
        rattop += 50;
        rat.style.top = rattop + "px";
        mazearray[ratposition[0]][ratposition[1]] = 1;
        mazearray[ratposition[0] + 1][ratposition[1]] = 2;
    }
    

    if (ratleft == foodleft && rattop == foodtop) {
        this.location.href="indexfour.html"
        var yourScore = document.getElementById("#result")
        console.log(yourScore);
        localStorage.setItem("result","won")
        
    }
})


let totalMoves = 0;
localStorage.setItem("totalmoves",0)
document.addEventListener("keydown", function (e) {
    if (e.key.includes('Arrow')) {
        totalMoves++;
        console.log(totalMoves)
        localStorage.setItem("totalmoves",totalMoves)
        // console.log(localStorage.getItem("totalmoves"));
    }
});
