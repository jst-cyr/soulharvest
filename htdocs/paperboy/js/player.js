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

export function drawPaperboy(scene, player) {
    if (!scene.physics) {
        console.error("Scene's physics system is not available!");
        return;
    }

    // Add the player sprite with physics
    player.sprite = scene.physics.add.sprite(200, 300, 'player');

    // Set player properties
    player.sprite.setCollideWorldBounds(true); // Prevent going out of bounds
    player.sprite.setScale(0.5); // Adjust size if needed
    player.sprite.setDepth(1);

    // Create input keys
    player.cursors = scene.input.keyboard.createCursorKeys(); // Arrow keys
}

export function movePaperboy(player) {
    const speed = 150; // Movement speed

    if (!player.sprite || !player.cursors) {
        console.error("Player sprite or cursors are not defined!");
        return;
    }

    // Stop any previous movement
    player.sprite.setVelocity(0);

    // Vertical movement
    if (player.cursors.up.isDown) {
        player.sprite.setVelocityY(-speed);
    } else if (player.cursors.down.isDown) {
        player.sprite.setVelocityY(speed);
    }

    // Horizontal movement
    if (player.cursors.left.isDown) {
        player.sprite.setVelocityX(-speed);
    } else if (player.cursors.right.isDown) {
        player.sprite.setVelocityX(speed);
    }
}
