// Jumping Player Program

// Set up the canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// GLobal Variables
let player = {
    x: 200,
    y: 550,
    w: 50,
    h: 50,
    xSpeed: 5,
    ySpeed: 0,
    a: 0.5,
    col: "blue"
}

let rightArrowPressed = false;
let leftArrowPressed = false;

// Main Program Loop
requestAnimationFrame(main);

function main() {
    // LOGIC SECTION
    movePlayerHz();
    movePlayerVt();

    // DRAWING SECTION
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    drawPlayer();
    
    // Request another animation frame
    requestAnimationFrame(main);
}

// Key Event Stuff
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
    console.log(event.code);
    if (event.code == "ArrowRight") {
        rightArrowPressed = true;
    } else if (event.code == "ArrowLeft") {
        leftArrowPressed = true;
    } else if (event.code == "ArrowUp") {
        player.ySpeed = -15;
    }
}

function keyupHandler(event) {
    if (event.code == "ArrowRight") {
        rightArrowPressed = false;
    } else if (event.code == "ArrowLeft") {
        leftArrowPressed = false;
    }
}


