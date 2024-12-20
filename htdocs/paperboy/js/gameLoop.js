import { drawSidewalk, drawStreet, renderIntersection } from './street.js';
import { drawPapers } from './papers.js';

export function gameLoop(gameState) {
    const { ctx, canvas, player, houses, isPaused, gameOver, streetSpeed, houseCount, maxHouses, papers, score } = gameState;

    if (gameOver || isPaused) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    papers.forEach(paper => paper.x -= 10);

    // Draw game elements
    drawPapers(ctx, papers, houses, gameState);

    // Recursive loop
    requestAnimationFrame(() => gameLoop(gameState));
}
