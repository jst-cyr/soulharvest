// Throw paper
export function throwPaper(player, gameState) {
    if (gameState.gameOver) return;
    const paper = { x: player.x + player.width, y: player.y + player.height / 2 };
    gameState.papers.push(paper);
}

// Handle papers
export function drawPapers(ctx, papers, houses, gameState){
    papers.forEach((paper, index) => {
        paper.x -= 10;
        paper.y -= 2; // Slight upward angle
        ctx.fillStyle = "white";
        ctx.fillRect(paper.x, paper.y, 30, 12); // Rectangular paper

        // Check collision with mailboxes
        houses.forEach(house => {
            const mailbox = house.mailbox;
            if (paper.x > mailbox.x && paper.x < mailbox.x + mailbox.width &&
                paper.y > mailbox.y && paper.y < mailbox.y + mailbox.height &&
                !mailbox.delivered) {
                if (house.mailbox.color === "red") {
                    gameState.score++;
                    displaySuccessAnimation(ctx, mailbox.x + mailbox.width / 2, mailbox.y - 10);
                }
                mailbox.delivered = true; // Mark mailbox as delivered
                papers.splice(index, 1); // Remove paper after delivery
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