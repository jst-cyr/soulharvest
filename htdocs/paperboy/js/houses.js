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
        // Draw the house body
        ctx.fillStyle = house.color;
        ctx.fillRect(house.x, house.y, house.width, house.height);

        // Draw the roof
        ctx.fillStyle = "darkgray";
        ctx.beginPath();
        ctx.moveTo(house.x, house.y); // Left corner of the roof
        ctx.lineTo(house.x + house.width / 2, house.y - 50); // Peak of the roof
        ctx.lineTo(house.x + house.width, house.y); // Right corner of the roof
        ctx.closePath();
        ctx.fill();

        // Draw the door
        ctx.fillStyle = "brown";
        const doorWidth = house.width / 4;
        const doorHeight = house.height / 3;
        ctx.fillRect(house.x + house.width / 2 - doorWidth / 2, house.y + house.height - doorHeight, doorWidth, doorHeight);

        // Draw windows
        ctx.fillStyle = "lightblue";
        const windowSize = house.width / 5;
        ctx.fillRect(house.x + 10, house.y + 30, windowSize, windowSize); // Left window
        ctx.fillRect(house.x + house.width - windowSize - 10, house.y + 30, windowSize, windowSize); // Right window

        // Draw the mailbox
        const mailbox = house.mailbox;
        ctx.fillStyle = mailbox.delivered ? "gray" : mailbox.color;
        ctx.fillRect(mailbox.x, mailbox.y, mailbox.width, mailbox.height); // Mailbox body

        // Draw mailbox post
        ctx.fillStyle = "black";
        ctx.fillRect(mailbox.x + mailbox.width / 2 - 2, mailbox.y + mailbox.height, 4, 20); // Mailbox post
    });
}
