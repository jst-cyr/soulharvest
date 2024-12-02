export function initializeHouses(gameState) {
    const { houses, canvas } = gameState;
    for (let i = 0; i < canvas.height; i += 200) {
        addHouse(canvas.height - i - 200, gameState);
    }
}

export function addHouse(yPosition, gameState) {
    const hasDeliverable = Math.random() < 0.6; // 60% chance for a red mailbox

    gameState.houses.push({
        x: 100,
        y: yPosition,
        width: gameState.houseWidth,
        height: gameState.houseHeight,
        color: hasDeliverable ? "#FFD700" : "#8B0000",
        mailbox: {
            color: hasDeliverable ? "red" : "black",
            // Position mailbox relative to the house, to the "front" of the house
            x: gameState.houseWidth, // The x position is fixed to the right edge of the house (after rotation)
            y: yPosition, // The y position places the mailbox at the base of the house
            width: 20,
            height: 40,
            delivered: false, // Track delivery status
        },
    });
    gameState.houseCount++;
}

export function drawHouses(ctx, canvas, houses, houseCount, maxHouses, gameState) {
    //Determine gap for houses
    const houseSpacing = gameState.houseHeight + gameState.houseGap;

    // Add new houses until maxHouses is reached
    if (houseCount < maxHouses && houses.length < canvas.height / houseSpacing) {
        addHouse(houses[houses.length - 1]?.y - houseSpacing || 0, gameState);
    }

    houses.forEach((house) => {
        // Save the current canvas state
        ctx.save();

        // Move to the position where the house is to be drawn
        ctx.translate(house.x + house.width / 2, house.y + house.height / 2);  // Move the origin to the center of the house
        ctx.rotate(-Math.PI / 2); // Rotate the house 90 degrees counterclockwise

        // Draw the house body (now a vertical rectangle)
        ctx.fillStyle = house.color;
        ctx.fillRect(-house.width / 2, -house.height / 2, house.width, house.height);

        // Draw the roof (positioned on the left of the house)
        ctx.fillStyle = "darkgray";
        ctx.beginPath();
        ctx.moveTo(-house.width / 2, -house.height / 2); // Left corner of the roof
        ctx.lineTo(0, -house.height / 2 - 50); // Peak of the roof
        ctx.lineTo(house.width / 2, -house.height / 2); // Right corner of the roof
        ctx.closePath();
        ctx.fill();

        // Draw the door (to the right of the house)
        ctx.fillStyle = "brown";
        const doorWidth = house.width / 4;
        const doorHeight = house.height / 3;
        ctx.fillRect(-doorWidth / 2, house.height / 2 - doorHeight, doorWidth, doorHeight);

        // Draw windows
        ctx.fillStyle = "lightblue";
        const windowSize = house.width / 5;
        ctx.fillRect(-house.width / 2 + 10, -house.height / 2 + 30, windowSize, windowSize); // Left window
        ctx.fillRect(house.width / 2 - windowSize - 10, -house.height / 2 + 30, windowSize, windowSize); // Right window

        // Fix mailbox position (simplified to rectangle without post)
        const mailbox = house.mailbox;

        // Adjust mailbox position relative to the house (no rotation needed)
        const mailboxX = house.width / 2 + 25;  // Adjust based on house width
        const mailboxY = house.height / 2 - 25; // Position mailbox at the base of the house

        // Draw the mailbox body (no rotation)
        ctx.fillStyle = mailbox.delivered ? "gray" : mailbox.color;
        ctx.fillRect(mailboxX, mailboxY, mailbox.width, mailbox.height); // Mailbox body

        // Skip drawing the mailbox post for this test

        // Draw driveway (leading from the street to the house)
        ctx.fillStyle = "#a9a9a9"; // Gray color for driveway
        ctx.fillRect(-house.width / 6, house.height / 2, house.width / 3, 40); // Driveway width and length

        // Draw walkway (leading from the sidewalk to the house)
        ctx.fillStyle = "#d3d3d3"; // Light gray for walkway
        ctx.fillRect(-15, house.height / 2, 30, 20); // Walkway width and length

        // Restore the canvas state to undo the transformations
        ctx.restore();
    });
}
