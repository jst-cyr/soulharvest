import { initializeHouses, updateHouses } from './houses.js';
import { drawStreet, drawSidewalk, updatePaperPiles, renderPaperPile } from './street.js';
import { handleInput } from './input.js';
import { drawPaperboy, movePaperboy } from './player.js';
import { drawScore } from './utilities.js';
import { drawPause, showModal } from './modals.js';
import { checkPaperHit } from './papers.js';

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
            gravity: { y: 0 }, // No gravity
            debug: false, // Set to true for debugging physics
        },
    },
    pixelArt: true, // Ensure pixel-perfect rendering
};

const game = new Phaser.Game(config);

// Global game variables
export const gameState = {
    player: { x: window.innerWidth / 3, y: window.innerHeight - 150, width: 30, height: 30, speed: 5 },
    papers: [],
    houses: [],
    score: 0,
    scoreText: "Score: 0",
    paperCount: 10, // Initialize with 10 papers
    gameOver: false,
    isPaused: false,
    houseCount: 0,
    maxHouses: 20,
    houseHeight: 150, // Example height, adjust as needed
    houseWidth: 100, // Example width, adjust as needed
    houseGap: 50, // Example gap, adjust as needed
    streetSpeed: 1, // Adjust this value to slow down the houses
    paperSpeed: -300, //Adjust this value to slow down the paper being thrown
    mailboxDeliveryScore: 10, // Score for successful delivery
    levelComplete: false,
    reachedIntersection: false,
    paperPiles: [], // Array to store paper piles
    housesPassed: 0, // Counter for houses passed
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

/* Phaser engine functions */
function preload() {
    this.load.image('paper', '/htdocs/paperboy/assets/Paper.png');
    this.load.image('player', '/htdocs/paperboy/assets/Paperboy.webp');
    this.load.image('paperboyLogo', 'https://upload.wikimedia.org/wikipedia/en/7/7e/Paperboy_arcadeflyer.png');
    this.load.image('brokenWindow', '/htdocs/paperboy/assets/Broken-Window.png'); // New sprite for broken windows
    this.load.image('window', '/htdocs/paperboy/assets/Window.png'); // New sprite for windows
    this.load.image('paperStack', '/htdocs/paperboy/assets/PaperStack.png'); // Load paper stack image
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
    gameState.player = player; // Ensure player is assigned to gameState

    // Initialize houses and street elements
    initializeHouses(this, gameState);
    drawSidewalk(this, gameState);
    drawStreet(this, gameState);

    // Display current score and paper count
    drawScore(this, gameState);

    //Create Pause modal
    drawPause(this, gameState);

    // Reset game state flags
    gameState.isPaused = false;
    gameState.gameOver = false;
    gameState.houseCount = 0; // Reset house count
    gameState.distanceTraveled = 0; // Initialize distance traveled
    gameState.nextPileDistance = gameState.houseHeight * Phaser.Math.Between(5, 7); // Initialize next pile distance
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
        updatePaperPiles(this, gameState, gameState.streetSpeed); // Update paper piles
        gameState.scoreText.setText(`Score: ${gameState.score}`);

        // Update distance traveled
        gameState.distanceTraveled += gameState.streetSpeed;

        //Check if paper hits mailbox or windows
        gameState.papers.forEach(paper => {
            gameState.houses.forEach(house => {
                checkPaperHit(this, paper, house.mailbox, house, gameState);
            });
        });

        // Check if paperboy picks up a paper pile
        gameState.paperPiles.forEach(paperPile => {
            if (Phaser.Geom.Intersects.RectangleToRectangle(player.sprite.getBounds(), paperPile.getBounds())) {
                gameState.paperCount += 10; // Add 10 papers
                gameState.paperCountText.setText(`Papers: ${gameState.paperCount}`);
                paperPile.destroy(); // Remove the paper pile
                gameState.paperPiles = gameState.paperPiles.filter(p => p !== paperPile); // Remove from array
            }
        });

        // Check if it's time to render a new paper pile
        if (gameState.distanceTraveled >= gameState.nextPileDistance) {
            renderPaperPile(this, gameState);
            gameState.nextPileDistance += gameState.houseHeight * Phaser.Math.Between(5, 7); // Set next pile distance
            console.log(`Next pile will be rendered at distance: ${gameState.nextPileDistance}`); // Debugging output
        }

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
