// Player Functions
function movePlayerHz() {
    // Move Player Horizontally
    if (rightArrowPressed) {
        player.x += player.xSpeed;
        if (player.x + player.w > cnv.width) {
            player.x = cnv.width - player.w;
        }
    } else if (leftArrowPressed) {
        player.x += -player.xSpeed;
        if (player.x < 0) {
            player.x = 0;
        }
    }
}

function movePlayerVt() {
    // Move Player Vertically
    player.y += player.ySpeed;
    player.ySpeed += player.a;
    if (player.y + player.h > cnv.height) {
        player.ySpeed = 0;
        player.y = cnv.height - player.h;
    }
}

function drawPlayer() {
    ctx.fillStyle = player.col;
    ctx.fillRect(player.x, player.y, player.w, player.h);
}