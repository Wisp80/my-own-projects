const game = {
    tickTimeout: null,
    tickRate: 1000 / 60,
    currentRoom: '00',

    tick: function () {
        window.clearTimeout(game.tickTimeout);
        game.prepareDataForNextTick();
        window.requestAnimationFrame(game.renderPreparedDataForNextTick);
        game.tickTimeout = window.setTimeout('game.tick()', game.tickRate);
    },

    prepareDataForNextTick: function () {
        players.playerOne.move();
        players.playerOne.checkIfPlayerCollidesWithPortal();
    },

    renderPreparedDataForNextTick: function () {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < walls.length; i++) {
            walls[i].draw();
        };

        for (let i = 0; i < moveableWalls.length; i++) {
            moveableWalls[i].draw();
            // moveableWalls[i].move();
        };

        for (let i = 0; i < portals.length; i++) {
            portals[i].draw();
        };

        players.playerOne.draw();
    },
};

