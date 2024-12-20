import { initializeHouses, updateHouses } from './houses.js';
import { drawStreet, drawSidewalk } from './street.js';
import { handleInput } from './input.js';
import { gameLoop } from './gameLoop.js';
import { drawPaperboy, movePaperboy } from './player.js';
import { drawScore, resizeGame } from './utilities.js';
import { drawPause, showModal } from './modals.js';

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
    maxHouses: 10,
    houseHeight: 150,
    houseWidth: 100,
    houseGap: 50,
    streetSpeed: 2,
    levelComplete: false,
    reachedIntersection: false,
};

/* Setup font styles */
gameState.fontStyles = {
    default: { font: "24px Courier, monospace", fill: "#ffffff", align: "center" },
    defaultDark: { font: "24px Courier, monospace", fill: "#000000", align: "center" },
    smallLight: { font: "18px Courier, monospace", fill: "#ffffff", align: "center" },
    smallDark: { font: "18px Courier, monospace", fill: "#000000", align: "center" },
    title: { font: "32px Courier, monospace", fill: "#ffcc00", align: "center" },
    button: {font: "18px 'Courier New', Courier, monospace", fill: "#ffffff", backgroundColor: "#666666", padding: { x: 10, y: 5 } },
    link: { font: "16px 'Courier New', Courier, monospace", fill: "#0000ff", align: "center" },
};

// Start game loop
gameLoop(gameState);

/* Phaser engine functions */
function preload() {
    this.load.image('player', '/htdocs/paperboy/assets/Paperboy.webp');
    this.load.image('paperboyLogo', 'https://upload.wikimedia.org/wikipedia/en/7/7e/Paperboy_arcadeflyer.png' );
    this.load.on('complete', () => {
        console.log('Assets loaded successfully!');
    }); 
}

let player = {}; //Create an empty player object to store references
let cursors;

function create() {
    //Add input listeners
    handleInput(this, gameState);

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

        // Update the x position of all papers
        gameState.papers.forEach(paper => {
            paper.x -= 10;
        });

        //Check if level is over
        if (gameState.houseCount >= gameState.maxHouses && gameState.houses.length === 0) {
            // Delay showing the modal
            this.time.delayedCall(1000, () => {
                showModal(this, gameState);
                gameState.gameOver = true; // Prevent further updates
            });

            return; //Stop further updates for this frame
        }
    }
}
