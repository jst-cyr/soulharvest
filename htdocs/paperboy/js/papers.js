// Throw paper
export function throwPaper(player, gameState) {
    if (gameState.gameOver) return;
    const paper = { x: player.x + player.width, y: player.y + player.height / 2 };
    gameState.papers.push(paper);
}

//Draw papers
export function drawPapers(ctx, papers, houses, gameState) {
    papers.forEach((paper, index) => {
        // Move the paper across the screen
        paper.x -= 10; // Move left
        paper.y -= 2;  // Slight upward angle

        // Draw the paper as a white rectangle
        ctx.fillStyle = "white";
        ctx.fillRect(paper.x, paper.y, 30, 12); // Rectangular paper

        // Check if the paper is off-screen and remove it if it is
        if (paper.x < 0 || paper.y < 0 || paper.x > ctx.canvas.width || paper.y > ctx.canvas.height) {
            papers.splice(index, 1);
            return; // Skip further checks for this paper
        }

        // Check collision with each house's mailbox
        houses.forEach(house => {
            const mailbox = house.mailbox;

            // Collision detection without rotation (simplified)
            const paperLeft = paper.x;
            const paperRight = paper.x + 30;
            const paperTop = paper.y;
            const paperBottom = paper.y + 12;

            const mailboxLeft = mailbox.x;
            const mailboxRight = mailbox.x + mailbox.width;
            const mailboxTop = mailbox.y;
            const mailboxBottom = mailbox.y + mailbox.height;

            // Check if paper intersects with mailbox (bounding box check)
            if (
                paperRight > mailboxLeft && // Paper's right side is past mailbox's left side
                paperLeft < mailboxRight && // Paper's left side is before mailbox's right side
                paperBottom > mailboxTop && // Paper's bottom side is past mailbox's top side
                paperTop < mailboxBottom && // Paper's top side is before mailbox's bottom side
                !mailbox.delivered // Only deliver if not already delivered
            ) {
                if (house.mailbox.color === "red") {
                    gameState.score++; // Increment score for red mailbox hit
                    displaySuccessAnimation(ctx, mailbox.x + mailbox.width / 2, mailbox.y - 10);
                }
                mailbox.delivered = true; // Mark mailbox as delivered
                papers.splice(index, 1); // Remove paper after successful delivery
            }
        });
    });
}

// Success animation for paper delivery
export function displaySuccessAnimation(ctx, x, y) {
    ctx.fillStyle = "green";
    ctx.font = "20px Arial";
    ctx.fillText("✔", x, y); // Check mark as success animation
}