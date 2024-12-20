// Throw paper
export function throwPaper(player, gameState) {
    if (gameState.gameOver) return;
    const paper = { x: player.x + player.width, y: player.y + player.height / 2 };
    gameState.papers.push(paper);
}

export function drawPapers(scene, papers, player) {
    papers.forEach(paper => {
        // Update paper position based on player position
        paper.x = player.sprite.x;
        paper.y = player.sprite.y;

        // Ensure the paper is visible in the scene
        if (!paper.sprite) {
            paper.sprite = scene.add.sprite(paper.x, paper.y, 'paperTexture');
        } else {
            paper.sprite.setPosition(paper.x, paper.y);
        }
    });
}

// Success animation for paper delivery
export function displaySuccessAnimation(ctx, x, y) {
    ctx.fillStyle = "green";
    ctx.font = "20px Arial";
    ctx.fillText("✔", x, y); // Check mark as success animation
}