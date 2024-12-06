import { initializeHouses, updateHouses } from './houses.js';
import { handleInput } from './input.js';
import { gameLoop } from './gameLoop.js';
import { drawPaperboy, movePaperboy } from './player.js';

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
    //Draw the paperboy
    drawPaperboy(this, player);
    // Initialize houses
    initializeHouses(this, gameState);
}

function update() {
    //Move the paperboy
    movePaperboy(player);

    if (!gameState.isPaused && !gameState.gameOver) {
        updateHouses(gameState, gameState.streetSpeed);
    }
}
