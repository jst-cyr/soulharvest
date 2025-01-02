export function initializeHouses(scene, gameState) {
    const gameHeight = scene.sys.game.config.height;

    for (let i = 0; i < gameHeight; i += 200) {
        addHouse(scene, gameHeight - i - 200, gameState);
    }
}

export function addHouse(scene, yPosition, gameState) {
    const isSubscriber = Math.random() < 0.6; // 60% chance for a yellow house (subscriber)

    const houseColor = isSubscriber ? 0xFFD700 : 0x8B0000; // Yellow for subscribers, dark red for non-subscribers
    const mailboxColor = isSubscriber ? 0xFF0000 : 0x000000; // Red for subscribers, black for non-subscribers

    const house = scene.add.rectangle(100, yPosition, gameState.houseWidth, gameState.houseHeight, houseColor);
    const mailbox = scene.add.rectangle(100 + gameState.houseWidth / 2 + 10, yPosition, 40, 20, mailboxColor); // Moved to the front and made wider

    gameState.houses.push({ house, mailbox, subscriber: isSubscriber, delivered: false });
    gameState.houseCount++;
}

export function updateHouses(scene, gameState, streetSpeed) {
    const { houses, houseHeight, houseGap, maxHouses } = gameState;
    const gameHeight = scene.sys.game.config.height;

    // Move houses and mailboxes down
    houses.forEach(({ house, mailbox }) => {
        house.y += streetSpeed;
        mailbox.y += streetSpeed;
    });

    // Remove off-screen houses
    gameState.houses = houses.filter(({ house }) => house.y < gameHeight);

    // Check if new houses need to be added
    const lastHouseY = houses[houses.length - 1]?.house.y || gameHeight;
    const houseSpacing = houseHeight + houseGap;

    if (gameState.houseCount < maxHouses && lastHouseY + houseSpacing < gameHeight) {
        addHouse(scene, lastHouseY - houseSpacing, gameState);
    }
}
