export function initializeHouses(scene, gameState) {
    const { houses, canvas } = gameState;

    for (let i = 0; i < canvas.height; i += 200) {
        addHouse(scene, canvas.height - i - 200, gameState);
    }
}


export function addHouse(scene, yPosition, gameState) {
    const hasDeliverable = Math.random() < 0.6; // 60% chance for a red mailbox

    const house = scene.add.rectangle(100, yPosition, gameState.houseWidth, gameState.houseHeight, hasDeliverable ? 0xFFD700 : 0x8B0000);
    const mailbox = scene.add.rectangle(125, yPosition + 75, 20, 40, hasDeliverable ? 0xFF0000 : 0x000000);

    gameState.houses.push({ house, mailbox, delivered: false });
    gameState.houseCount++;
}

export function updateHouses(scene, gameState, streetSpeed) {
    const { houses, houseHeight, houseGap, maxHouses, canvas } = gameState;

    // Move houses and mailboxes down
    houses.forEach(({ house, mailbox }) => {
        house.y += streetSpeed;
        mailbox.y += streetSpeed;
    });

    // Remove off-screen houses
    gameState.houses = houses.filter(({ house }) => house.y < canvas.height);

    // Check if new houses need to be added
    const lastHouseY = houses[houses.length - 1]?.house.y || canvas.height;
    const houseSpacing = houseHeight + houseGap;

    if (gameState.houseCount < maxHouses && lastHouseY + houseSpacing < canvas.height) {
        addHouse(scene, lastHouseY - houseSpacing, gameState);
    }
}
