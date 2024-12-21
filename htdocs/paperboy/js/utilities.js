export function drawScore(scene, gameState) {
    // Add score text to the top of the screen
    gameState.scoreText = scene.add.text(
        scene.cameras.main.width / 2, // Center horizontally
        20,                         // 20 pixels from the top
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

    gameState.canvas.width = width;
    gameState.canvas.height = height;
}
