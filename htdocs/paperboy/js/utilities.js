export function drawScore(scene, gameState) {
    // Add score text to the top of the screen
    gameState.scoreText = scene.add.text(
        scene.cameras.main.width / 2, // Center horizontally
        20,                         // 20 pixels from the top
        `Score: ${gameState.score}`, // Initial score text
        {
            font: '24px Arial',
            fill: '#ffffff',        // White text color
            align: 'center',
        }
    ).setOrigin(0.5, 0); // Center align the text horizontally
}



export function resizeGame(game) {
    const canvas = document.querySelector('canvas');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Update Phaser game size
    game.scale.resize(width, height);

    // Adjust canvas dimensions
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
}
