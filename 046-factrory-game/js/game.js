const game = {
    worldEvents: ['War', 'Alliance', 'Civil war', 'Unification'],

    drawGrid: function (w, h) {
        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < 720; j += h) {
                ctx.strokeStyle = 'black'
                ctx.strokeRect(i, j, w, h);
            };
        };
    },
};

game.drawGrid(20, 20);

function Factory(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.outputArrows = [
        { x: this.x + 0.8 * w, y: this.y + 0.6 * h },
        { x: this.x + 0.8 * w, y: this.y + 0.8 * h }
    ];

    this.draw = function () {
        ctx.fillStyle = 'rgb(140, 4, 37)';
        ctx.fillRect(x, y, w, h);

        for (let i = 0; i < this.outputArrows.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'rgb(200, 200, 0)';
            ctx.moveTo(this.outputArrows[i].x, this.outputArrows[i].y);
            ctx.lineTo(this.outputArrows[i].x + 0.2 * w, this.outputArrows[i].y + h * 0.1);
            ctx.lineTo(this.outputArrows[i].x, this.outputArrows[i].y + 0.2 * h);
            ctx.fill();
        };

        ctx.font = '26px arial';
        ctx.fillText('Factory', x + 7, y + 40);
    };
};

let factoryTemplate = new Factory(40, 750, 100, 100);
factoryTemplate.draw();