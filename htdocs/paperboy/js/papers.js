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

export function checkPaperHit(scene, paper, mailbox, house, gameState) {
    // Check for collision or overlap between paper and mailbox
    if (Phaser.Geom.Intersects.RectangleToRectangle(paper.sprite.getBounds(), mailbox.getBounds())) {        
        // Give the player points for successful delivery
        if(house.subscriber){
            displaySuccessAnimation(scene, mailbox);
            gameState.score += gameState.mailboxDeliveryScore; // Adjust the score increment as needed
            gameState.scoreText.setText(`Score: ${gameState.score}`);
        }
        paper.sprite.destroy(); // Remove the paper after a successful hit
        gameState.papers = gameState.papers.filter(p => p !== paper); // Remove the paper from the array
    }
}

// Success animation for paper delivery
export function displaySuccessAnimation(scene, mailbox) {
    // Change the color of the mailbox to green to indicate a successful hit
    mailbox.setFillStyle(0x00ff00); // Green color

    // Optionally, you can add a check mark or other indicator
    const checkMark = scene.add.text(mailbox.x, mailbox.y - 20, '✔', { fontSize: '20px', fill: '#00ff00' });
    checkMark.setOrigin(0.5, 0.5);

    // You can also add a tween animation for a visual effect
    scene.tweens.add({
        targets: checkMark,
        y: mailbox.y - 40,
        alpha: 0,
        duration: 1000,
        ease: 'Power1',
        onComplete: () => {
            checkMark.destroy(); // Remove the check mark after the animation
        }
    });
}