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
    const windowColor = 0xFFFFFF; // White windows
    const doorColor = 0x654321; // Brown door
    const postColor = 0x8B4513; // Brown post

    const house = scene.add.rectangle(100, yPosition, gameState.houseWidth, gameState.houseHeight, houseColor);
    const mailbox = scene.add.rectangle(100 + gameState.houseWidth / 2 + 30, yPosition, 40, 20, mailboxColor); // Moved to the front lawn
    const post = scene.add.rectangle(100 + gameState.houseWidth / 2 + 30, yPosition + 20, 5, 40, postColor); // Post below the mailbox

    // Add windows to the front of the house with adjusted y-axis positions
    const window1 = scene.add.rectangle(100 + gameState.houseWidth / 2 - 20, yPosition - 30, 20, 20, windowColor); // Moved up
    const window2 = scene.add.rectangle(100 + gameState.houseWidth / 2 - 20, yPosition + 30, 20, 20, windowColor); // Moved down

    // Add a door to the right side of the house, facing the street
    const door = scene.add.rectangle(100 + gameState.houseWidth / 2 - 10, yPosition, 50, 30, doorColor);

    gameState.houses.push({ house, mailbox, post, window1, window2, door, subscriber: isSubscriber, delivered: false });
    gameState.houseCount++;
}

export function updateHouses(scene, gameState, streetSpeed) {
    const { houses, houseHeight, houseGap, maxHouses } = gameState;
    const gameHeight = scene.sys.game.config.height;

    // Move houses and mailboxes down
    houses.forEach(({ house, mailbox, post, window1, window2, door }) => {
        house.y += streetSpeed;
        mailbox.y += streetSpeed;
        post.y += streetSpeed;
        window1.y += streetSpeed;
        window2.y += streetSpeed;
        door.y += streetSpeed;
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
