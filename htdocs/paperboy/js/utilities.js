export function drawScore(ctx, canvas, score) {
    ctx.save(); // Save the canvas state before transformations
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transformations

    // Set font and alignment for score display
    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.textAlign = "center"; // Center-align the text
    ctx.textBaseline = "top";

    // Draw the score at the top center of the canvas
    const xPosition = canvas.width / 2; // Center of the canvas
    const yPosition = 20; // 20 pixels from the top
    ctx.fillText(`Score: ${score}`, xPosition, yPosition);

    ctx.restore(); // Restore the canvas state
}
