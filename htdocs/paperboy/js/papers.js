// Throw paper
export function throwPaper(scene, gameState) {
    if (gameState.gameOver) return;

    const paper = scene.physics.add.sprite(gameState.player.sprite.x, gameState.player.sprite.y, 'paper'); // Use 'paper' texture
    paper.setVelocityX(300); // Set the velocity to throw the paper
    gameState.papers.push(paper);

    console.log("Num papers: " + gameState.papers.length);
}

export function drawPapers(scene, papers) {
    papers.forEach(paper => {
        // Ensure the paper is visible in the scene
        if (!paper.sprite) {
            paper.sprite = scene.add.sprite(paper.x, paper.y, 'paper');
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