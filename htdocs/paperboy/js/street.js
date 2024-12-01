// Render intersection at the end of the level
export function renderIntersection(ctx, canvas) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(canvas.width / 3 - 145, canvas.height - 80, 100, 20); // End of the sidewalk
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(canvas.width / 3 - 90, canvas.height - 60, 20, 0, Math.PI * 2); // Stop sign
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.font = "18px Arial";
    ctx.fillText("STOP", canvas.width / 3 - 90, canvas.height - 50);
}

export function drawSidewalk(ctx, canvas) {
    ctx.fillStyle = "#bcbcbc"; // Gray sidewalk color
    ctx.fillRect(canvas.width / 3 - 145, 0, 100, canvas.height); // Reduced lawn distance, but ensure sidewalk is above houses
}

export function drawStreet(ctx, canvas) {
    ctx.fillStyle = "#808080"; // Road color
    ctx.fillRect(canvas.width / 3 - 45, 0, canvas.width / 3 * 2, canvas.height); // Road width and position
}