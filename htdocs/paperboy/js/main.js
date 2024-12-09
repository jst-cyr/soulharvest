import { initializeHouses, updateHouses } from './houses.js';
import { drawStreet, drawSidewalk } from './street.js';
import { handleInput } from './input.js';
import { gameLoop } from './gameLoop.js';
import { drawPaperboy, movePaperboy } from './player.js';
import { drawScore, resizeGame } from './utilities.js';
import { drawPause } from './modals.js';

//Phaser configuration
const config = {
    type: Phaser.AUTO, // Use WebGL if available, fallback to Canvas
    parent: 'phaserContainer',
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true,
    scene: {
        preload,
        create,
        update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false, // Set to true for debugging physics
        },
    },
    pixelArt: true, // Ensure pixel-perfect rendering
};
const game = new Phaser.Game(config);

//Original canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Global game variables
export const gameState = {
    canvas,
    ctx,
    player: { x: canvas.width / 3, y: canvas.height - 150, width: 30, height: 30, speed: 5 },
    papers: [],
    houses: [],
    score: 0,
    scoreText: "Score: 0",
    gameOver: false,
    isPaused: false,
    houseCount: 0,
    maxHouses: 30,
    houseHeight: 150,
    houseWidth: 100,
    houseGap: 50,
    streetSpeed: 2,
    levelComplete: false,
    reachedIntersection: false,
};

// Start game loop
handleInput(gameState);
gameLoop(gameState);

/* Phaser engine functions */
function preload() {
    this.load.image('player', '/htdocs/paperboy/assets/Paperboy.webp');
    this.load.on('complete', () => {
        console.log('Assets loaded successfully!');
    }); 
}

let player = {}; //Create an empty player object to store references
let cursors;

function create() {
    // Add resizing event listener
    window.addEventListener('resize', () => resizeGame(this.game));

    //Draw the paperboy
    drawPaperboy(this, player);
    // Initialize houses and street elements
    initializeHouses(this, gameState);
    drawSidewalk(this, gameState);
    drawStreet(this, gameState);

    // Display current score
    drawScore(this, gameState);

    //Create Pause modal
    drawPause(this, gameState);
}

function update() {    
    //Handle pause modal
    if (gameState.isPaused) {
        // Show pause overlay and text
        gameState.pauseOverlay.setVisible(true);
        gameState.pauseText.setVisible(true);
        gameState.pauseInstructions.setVisible(true);
    } else {
        // Hide pause overlay and text
        gameState.pauseOverlay.setVisible(false);
        gameState.pauseText.setVisible(false);
        gameState.pauseInstructions.setVisible(false);
    }

    //Move the paperboy
    movePaperboy(player);

    if (!gameState.isPaused && !gameState.gameOver) {
        updateHouses(this, gameState, gameState.streetSpeed);
        gameState.scoreText.setText(`Score: ${gameState.score}`);
    }
}
