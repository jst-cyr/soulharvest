import { drawSidewalk, drawStreet, renderIntersection } from './street.js';
import { drawPapers } from './papers.js';
import { showModal, showPause } from './modals.js';

export function gameLoop(gameState) {
    const { ctx, canvas, player, houses, isPaused, gameOver, streetSpeed, houseCount, maxHouses, papers, score } = gameState;

    if (isPaused){
        showPause(ctx, canvas);
    }

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

    papers.forEach(paper => paper.x -= 10);

    // Remove off-screen houses
    if (houses[0]?.y > canvas.height) {
        houses.shift();
    }

    // Draw game elements
    drawPapers(ctx, papers, houses, gameState);

    // Recursive loop
    requestAnimationFrame(() => gameLoop(gameState));
}
