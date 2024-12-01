export function initializeHouses(gameState) {
    const { houses, canvas } = gameState;
    for (let i = 0; i < canvas.height; i += 200) {
        addHouse(canvas.height - i - 200, gameState);
    }
}

export function addHouse(yPosition, gameState) {
    const hasDeliverable = Math.random() < 0.6; // 60% chance for a red mailbox
    gameState.houses.push({
        x: 0,
        y: yPosition,
        width: 100,
        height: 150,
        color: hasDeliverable ? "#FFD700" : "#8B0000",
        mailbox: {
            color: hasDeliverable ? "red" : "black",
            x: 50,
            y: yPosition + 50,
            width: 20,
            height: 40,
            delivered: false, // Track delivery status
        },
    });
    gameState.houseCount++;
}

export function drawHouses(ctx, canvas, houses, houseCount, maxHouses, gameState) {
    // Add new houses until maxHouses is reached
    if (houseCount < maxHouses && houses.length < canvas.height / 200) {
        addHouse(houses[houses.length - 1]?.y - 200 || 0, gameState);
    }

    houses.forEach((house) => {
        ctx.fillStyle = house.color;
        ctx.fillRect(house.x, house.y, house.width, house.height);

        const mailbox = house.mailbox;
        ctx.fillStyle = mailbox.delivered ? "gray" : mailbox.color;
        ctx.fillRect(mailbox.x, mailbox.y, mailbox.width, mailbox.height);
    });
}
