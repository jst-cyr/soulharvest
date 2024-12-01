export function movePlayer(keys, player, canvas) {
    if (keys["ArrowUp"] && player.y > 0) player.y -= player.speed;
    if (keys["ArrowDown"] && player.y < canvas.height - player.height) player.y += player.speed;
    if (keys["ArrowLeft"] && player.x > canvas.width / 3 - 145) player.x -= player.speed;
    if (keys["ArrowRight"] && player.x < canvas.width / 3 - 45) player.x += player.speed;
}

export function drawPlayer(ctx, player) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 2, player.width / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.fillRect(player.x + player.width / 2 - 2.5, player.y + player.height, 5, 10); // Back tire
    ctx.fillRect(player.x + player.width / 2 - 2.5, player.y - 10, 5, 10); // Front tire
    ctx.fillRect(player.x + player.width / 2 + 5, player.y, 10, 1); // Front tire connecting line
    ctx.fillRect(player.x, player.y, 10, 1); // Back tire connecting line
}