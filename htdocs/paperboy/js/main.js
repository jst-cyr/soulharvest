import { initializeHouses } from './houses.js';
import { handleInput } from './input.js';
import { gameLoop } from './gameLoop.js';

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

// Initialize houses
initializeHouses(gameState);

// Start game loop
handleInput(gameState);
gameLoop(gameState);
