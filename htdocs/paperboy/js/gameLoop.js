import { drawPlayer } from './player.js';
import { drawHouses } from './houses.js';
import { drawSidewalk, drawStreet, renderIntersection } from './street.js';
import { drawPapers } from './papers.js';
import { showModal } from './modals.js';
import { drawScore } from './utilities.js';

export function gameLoop(gameState) {
    const { ctx, canvas, player, houses, isPaused, gameOver, streetSpeed, houseCount, maxHouses, papers, score } = gameState;

    if (gameOver || isPaused) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Check if level is complete
    if (houseCount >= maxHouses && houses.length === 0) {
        renderIntersection(ctx, canvas);
        setTimeout(() => { 
            showModal(score);
        }, 1000); // Show modal after 1 second
        return;
    }

    // Slide background elements
    houses.forEach(house => {
        house.y += streetSpeed;
        house.mailbox.y += streetSpeed;
    });
    papers.forEach(paper => paper.x -= 10);

    // Remove off-screen houses
    if (houses[0]?.y > canvas.height) {
        houses.shift();
    }

    // Draw game elements
    drawHouses(ctx, canvas, houses, houseCount, maxHouses, gameState);
    drawSidewalk(ctx, canvas);
    drawStreet(ctx, canvas);
    drawPlayer(ctx, player);
    drawPapers(ctx, papers, houses, gameState);

    // Display current score
    drawScore(ctx, canvas, score);

    // Recursive loop
    requestAnimationFrame(() => gameLoop(gameState));
}
