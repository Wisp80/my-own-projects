// const game = {
//     tickTimeout: null,
//     tickRate: 1000 / 60,
//     ticks: 0,
//     currentRoom: '00',

//     tick: function () {
//         this.ticks++;
//         window.clearTimeout(game.tickTimeout);
//         this.prepareDataForNextTick();
//         window.requestAnimationFrame(game.renderPreparedDataForNextTick);
//         this.tickTimeout = window.setTimeout('game.tick()', game.tickRate);
//     },

//     prepareDataForNextTick: function () {
//         players.playerOne.move();
//         players.playerOne.checkIfPlayerCollidesWithPortal();
//     },

//     renderPreparedDataForNextTick: function () {
//         ctx.fillStyle = 'black';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         for (let i = 0; i < walls.length; i++) { walls[i].draw() };
//         for (let i = 0; i < moveableWalls.length; i++) { moveableWalls[i].draw() };
//         for (let i = 0; i < portals.length; i++) { portals[i].draw() };
//         for (let i = 0; i < NPCs.length; i++) { NPCs[i].draw() };
//         for (let i = 0; i < NPCs.length; i++) { NPCs[i].drawNPCsMessage() };

//         // if (game.ticks % 10 === 0) { for (let i = 0; i < moveableWalls.length; i++) { moveableWalls[i].move() } }
//         for (let i = 0; i < moveableWalls.length; i++) { moveableWalls[i].move() }

//         players.playerOne.draw();
//     },
// };

function drawGrid(w, h) {
    let randomPointX = helper.randomIntFromInterval(1, canvas.width);
    let randomPointY = helper.randomIntFromInterval(1, canvas.height);

    for (let i = 0; i < canvas.width; i += w) {
        for (let j = 0; j < canvas.height; j += h) {
            ctx.strokeStyle = '#1b1b1b';
            ctx.strokeRect(i, j, w, h);

            if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(
                i + w, i,
                j + h, i,
                randomPointX, randomPointY)) {
                    console.log('1');
            }
        };
    };
};

drawGrid(41, 41);