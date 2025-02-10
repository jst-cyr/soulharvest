export function renderIntersection(scene, gameState) {
    const gameWidth = scene.sys.game.config.width;
    const gameHeight = scene.sys.game.config.height;

    // Add a yellow rectangle for the end of the sidewalk
    scene.add.rectangle(
        gameWidth / 3 - 145 + 50, // X position (center of the rectangle)
        gameHeight - 70,          // Y position
        100,                      // Width
        20,                       // Height
        0xffff00                  // Yellow color
    );

    // Add a red circle for the stop sign
    scene.add.circle(
        gameWidth / 3 - 90,       // X position
        gameHeight - 60,          // Y position
        20,                       // Radius
        0xff0000                  // Red color
    );

    // Add white "STOP" text on the stop sign
    scene.add.text(
        gameWidth / 3 - 100,      // X position
        gameHeight - 70,          // Y position
        'STOP',                   // Text
        gameState.fontStyles.small // Style
    );
}


export function drawSidewalk(scene, gameState) {
    const gameWidth = scene.sys.game.config.width;
    const gameHeight = scene.sys.game.config.height;

    const sidewalkWidth = 100;

    // Add a gray rectangle for the sidewalk
    const sidewalk = scene.add.rectangle(
        gameWidth / 3 - 145 + sidewalkWidth / 2, // X position (center of the sidewalk)
        gameHeight / 2,                         // Y position (center of the screen)
        sidewalkWidth,                             // Width of the sidewalk
        gameHeight,                             // Height of the sidewalk
        0xbcbcbc                                   // Gray color
    );

    sidewalk.setDepth(0);

    // Add a pile of newspapers on the sidewalk
    const paperPile = scene.physics.add.sprite(
        gameWidth / 3 - 145 + 50, // X position
        gameHeight / 2,           // Y position
        'paperStack'              // Texture
    );

    paperPile.setDepth(1);
    gameState.paperPiles.push(paperPile);
}


export function drawStreet(scene, gameState) {
    const gameWidth = scene.sys.game.config.width;
    const gameHeight = scene.sys.game.config.height;

    const roadWidth = (gameWidth / 3) * 2;

    // Add a gray rectangle for the road
    const road = scene.add.rectangle(
        gameWidth / 3 - 45 + roadWidth / 2, // X position (center of the road)
        gameHeight / 2,                   // Y position (center of the screen)
        roadWidth,                           // Width of the road
        gameHeight,                       // Height of the road
        0x808080                             // Gray color
    );

    road.setDepth(0);
}
