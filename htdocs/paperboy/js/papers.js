// Throw paper
export function throwPaper(scene, gameState) {
    if (gameState.gameOver) return;

    const paperSprite = scene.physics.add.sprite(gameState.player.sprite.x, gameState.player.sprite.y, 'paper'); // Use 'paper' texture
    paperSprite.setVelocityX(gameState.paperSpeed); // Set the velocity to throw the paper

    const paper = {
        sprite: paperSprite,
        x: paperSprite.x,
        y: paperSprite.y
    };

    gameState.papers.push(paper);
}

// Success animation for paper delivery
export function displaySuccessAnimation(ctx, x, y) {
    ctx.fillStyle = "green";
    ctx.font = "20px Arial";
    ctx.fillText("✔", x, y); // Check mark as success animation
}