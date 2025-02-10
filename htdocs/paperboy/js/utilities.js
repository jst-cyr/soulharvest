export function drawScore(scene, gameState) {
    // Add paper count text to the top of the screen
    gameState.paperCountText = scene.add.text(
        scene.cameras.main.width / 2 - 100, // Adjusted position to the left
        20, // 20 pixels from the top
        `Papers: ${gameState.paperCount}`, // Initial paper count text
        gameState.fontStyles.default
    ).setOrigin(0.5, 0); // Center align the text horizontally

    // Add score text next to the paper count text
    gameState.scoreText = scene.add.text(
        scene.cameras.main.width / 2 + 50, // Adjusted position to the right
        20, // 20 pixels from the top
        `Score: ${gameState.score}`, // Initial score text
        gameState.fontStyles.default
    ).setOrigin(0.5, 0); // Center align the text horizontally
}

export function resizeGame(game) {
    const canvas = game.canvas;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const wratio = width / height;
    const ratio = canvas.width / canvas.height;

    if (wratio < ratio) {
        canvas.style.width = width + 'px';
        canvas.style.height = (width / ratio) + 'px';
    } else {
        canvas.style.width = (height * ratio) + 'px';
        canvas.style.height = height + 'px';
    }

    game.scale.resize(width, height);
}
