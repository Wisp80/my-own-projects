const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

function drawTerminal() {
    ctx.strokeRect(0, 0, canvas.width, 100);
};

function drawStartingTile() {
    let startingTile = new Tile(180, 200, 100, 50, 'wire');
    startingTile.draw();
};

drawTerminal();
drawStartingTile();

function Tile(x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    this.draw = function () {
        if (this.type === 'wire') {
            ctx.lineWidth = 3;
            // ctx.strokeRect(180, 200, 100, 50);
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.height / 2);
            ctx.lineTo(this.x + this.width, this.y + this.height / 2);
            ctx.stroke()
            ctx.closePath();
        };
    };
};