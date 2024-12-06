export function renderIntersection(scene, gameState) {
    const { canvas } = gameState;

    // Add a yellow rectangle for the end of the sidewalk
    scene.add.rectangle(
        canvas.width / 3 - 145 + 50, // X position (center of the rectangle)
        canvas.height - 70,         // Y position
        100,                        // Width
        20,                         // Height
        0xffff00                    // Yellow color
    );

    // Add a red circle for the stop sign
    scene.add.circle(
        canvas.width / 3 - 90,      // X position
        canvas.height - 60,         // Y position
        20,                         // Radius
        0xff0000                    // Red color
    );

    // Add white "STOP" text on the stop sign
    scene.add.text(
        canvas.width / 3 - 110,     // X position (adjust for centering)
        canvas.height - 75,         // Y position (adjust for centering)
        "STOP",                     // Text
        {
            font: "18px Arial",
            fill: "#ffffff"         // White color
        }
    );
}


export function drawSidewalk(scene, gameState) {
    const { canvas } = gameState;
    const sidewalkWidth = 100;

    // Add a gray rectangle for the sidewalk
    const sidewalk = scene.add.rectangle(
        canvas.width / 3 - 145 + sidewalkWidth / 2, // X position (center of the sidewalk)
        canvas.height / 2,                         // Y position (center of the screen)
        sidewalkWidth,                             // Width of the sidewalk
        canvas.height,                             // Height of the sidewalk
        0xbcbcbc                                   // Gray color
    );

    sidewalk.setDepth(0);
}


export function drawStreet(scene, gameState) {
    const { canvas } = gameState;
    const roadWidth = (canvas.width / 3) * 2;

    // Add a gray rectangle for the road
    const road = scene.add.rectangle(
        canvas.width / 3 - 45 + roadWidth / 2, // X position (center of the road)
        canvas.height / 2,                   // Y position (center of the screen)
        roadWidth,                           // Width of the road
        canvas.height,                       // Height of the road
        0x808080                             // Gray color
    );

    road.setDepth(0);
}
