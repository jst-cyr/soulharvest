import { movePlayer } from './player.js';
import { throwPaper } from './papers.js';
import { showCredits } from './modals.js';
import { gameLoop } from './gameLoop.js';

export function handleInput(gameState) {
    const { player, isPaused } = gameState;
    const keys = {};

    window.addEventListener("keydown", (e) => keys[e.code] = true);
    window.addEventListener("keyup", (e) => keys[e.code] = false);

    // Pause toggle
    window.addEventListener("keydown", (e) => {
        if (e.code === "KeyP") {
            gameState.isPaused = !gameState.isPaused;

            //If we unpaused, start the animation again
            if(!gameState.isPaused){
                requestAnimationFrame(() => gameLoop(gameState));
            }
        }
    });

    // Paper throw trigger
    window.addEventListener("keydown", (e) => {
        if (e.code === "Space") {
            throwPaper(player, gameState);
        }
    });

    // Event listener for Escape key to go to credits
    window.addEventListener("keydown", (e) => {
        // Handle the 'Escape' key properly for both modern browsers and Chrome.
        if (e.key == "Escape" || e.code == "Escape") {
            showCredits(gameState);
        }
    });

    function handleMovement() {
        if (!isPaused) {
            movePlayer(keys, player, gameState.canvas);
        }
        requestAnimationFrame(handleMovement);
    }

    handleMovement();
}
