export function showModal(scene, gameState) {
    // Semi-transparent overlay
    const overlay = scene.add.graphics();
    overlay.fillStyle(0x000000, 0.90); // Black with 90% opacity
    overlay.fillRect(0, 0, scene.cameras.main.width, scene.cameras.main.height);
    overlay.setDepth(20); // Ensure the modal is on top

    // Modal background
    const modalWidth = 300;
    const modalHeight = 200;
    const modalX = scene.cameras.main.width / 2 - modalWidth / 2;
    const modalY = scene.cameras.main.height / 2 - modalHeight / 2;

    const modalBackground = scene.add.graphics();
    modalBackground.fillStyle(0xCCCCCC, 1); // Light Grey background
    modalBackground.fillRect(modalX, modalY, modalWidth, modalHeight);
    modalBackground.setDepth(21);

    // Modal title
    const title = scene.add.text(
        scene.cameras.main.width / 2,
        modalY + 20,
        "Level Complete!",
        gameState.fontStyles.default
    ).setOrigin(0.5).setDepth(22);

    // Score text
    const scoreText = scene.add.text(
        scene.cameras.main.width / 2,
        modalY + 70,
        `Your Score: ${gameState.score}`,
        gameState.fontStyles.small
    ).setOrigin(0.5).setDepth(22);

    // Continue button
    const continueButton = scene.add.text(
        scene.cameras.main.width / 2,
        modalY + 120,
        "Continue",
        gameState.fontStyles.button
    ).setOrigin(0.5).setDepth(22).setInteractive();

    // Quit button
    const quitButton = scene.add.text(
        scene.cameras.main.width / 2,
        modalY + 160,
        "Quit",
        gameState.fontStyles.button
    ).setOrigin(0.5).setDepth(22).setInteractive();

    // Button interactions
    continueButton.on('pointerdown', () => {
        scene.scene.restart(); // Restart the scene
    });

    quitButton.on('pointerdown', () => {
        showCredits(gameState); // Call the showCredits function
    });
}


//show credits modal
export function showCredits(gameState) {
    // Pause the game
    gameState.isPaused = true;

    // Hide the game canvas and display the credits modal
    const modal = document.createElement("div");
    modal.style.position = "absolute";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.padding = "20px";
    modal.style.backgroundColor = "white";
    modal.style.border = "2px solid black";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.zIndex = "9999";  // Ensure the modal is on top of the canvas
    modal.style.width = "300px";
    modal.style.textAlign = "center";

    // Add title and content
    modal.innerHTML = `
        <h2>Credits</h2>
        <p>Created by ChatGPT and Jason St-Cyr</p>
        <p>An homage to the classic Atari game Paperboy (1985)</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/7/7e/Paperboy_arcadeflyer.png" alt="Paperboy Logo" style="width: 100%; height: auto; margin-bottom: 10px;">
        <a href="https://en.wikipedia.org/wiki/Paperboy_(video_game)" target="_blank">Learn more about Paperboy</a>
        <br><br>
        <button id="continueBtn">Continue</button>
        <button id="quitBtn">Quit</button>
    `;

    // Append modal to body
    document.body.appendChild(modal);

    // Event listener for the Continue button
    document.getElementById("continueBtn").addEventListener("click", () => {
        location.reload();  // Reload the page to start a new level
    });

    // Event listener for the Quit button
    document.getElementById("quitBtn").addEventListener("click", () => {
        window.location.href = "https://en.wikipedia.org/wiki/Paperboy_(video_game)";  // Redirect to the Wikipedia page
    });
}

export function drawPause(scene, gameState){
    // Semi-transparent overlay
    gameState.pauseOverlay = scene.add.graphics();
    gameState.pauseOverlay.fillStyle(0x000000, 0.5); // Black with 50% opacity
    gameState.pauseOverlay.fillRect(0, 0, scene.cameras.main.width, scene.cameras.main.height);
    gameState.pauseOverlay.setDepth(10); // Ensure it renders on top
    gameState.pauseOverlay.setVisible(false); // Hide by default

    // Pause text
    gameState.pauseText = scene.add.text(
        scene.cameras.main.width / 2, 
        scene.cameras.main.height / 2 - 20, 
        "Game Paused",
        gameState.fontStyles.default 
    ).setOrigin(0.5).setDepth(11).setVisible(false); // Center-aligned, on top, hidden initially

    // Instructions text
    gameState.pauseInstructions = scene.add.text(
        scene.cameras.main.width / 2, 
        scene.cameras.main.height / 2 + 20, 
        "Press 'P' to resume",
        gameState.fontStyles.small 
    ).setOrigin(0.5).setDepth(11).setVisible(false); // Center-aligned, on top, hidden initially
}