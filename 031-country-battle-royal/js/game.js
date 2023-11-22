const game = {
    firstCountrySquares: [],
    randomSqureXBasedOnRandomPoint: 0,
    randomSqureYBasedOnRandomPoint: 0,

    drawGrid: function (w, h) {
        let randomPointX = helper.randomIntFromInterval(1, canvas.width);
        let randomPointY = helper.randomIntFromInterval(1, canvas.height);

        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                ctx.strokeStyle = '#1b1b1b';
                ctx.strokeRect(i, j, w, h);
                this.randomSqureXBasedOnRandomPoint = randomPointX;
                this.randomSqureYBasedOnRandomPoint = randomPointY;
            };
        };

        this.firstCountrySquares = [this.randomSqureXBasedOnRandomPoint, this.randomSqureYBasedOnRandomPoint];
    },
}

game.drawGrid(40, 40);