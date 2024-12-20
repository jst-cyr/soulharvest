
export function gameLoop(gameState) {
    const { ctx, canvas, player, houses, isPaused, gameOver, streetSpeed, houseCount, maxHouses, papers, score } = gameState;

    if (gameOver || isPaused) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Recursive loop
    requestAnimationFrame(() => gameLoop(gameState));
}
