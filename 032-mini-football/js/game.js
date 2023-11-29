const game = {
    tickTimeout: null,
    tickRate: 1000 / 60,
    ticks: 0,

    tick: function () {
        this.ticks++;
        window.clearTimeout(game.tickTimeout);
        this.prepareDataForNextTick();
        window.requestAnimationFrame(game.renderPreparedDataForNextTick);
        this.tickTimeout = window.setTimeout('game.tick()', game.tickRate);
    },

    prepareDataForNextTick: function () {
        players.playerOne.move();
    },

    renderPreparedDataForNextTick: function () {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < walls.length; i++) { walls[i].draw() };

        players.playerOne.draw();
    },
};