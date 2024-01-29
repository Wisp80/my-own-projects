const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

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
            ctx.stroke();
            ctx.closePath();
        };

        if (this.type === 'button') {
            ctx.lineWidth = 4;
            // ctx.strokeRect(180, 200, 100, 50);
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.beginPath();
            ctx.fillStyle = 'rgb(222, 101, 11)'
            ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.height / 2, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        };

        if (this.type === 'lamp') {
            ctx.lineWidth = 4;
            // ctx.strokeRect(180, 200, 100, 50);
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.beginPath();
            ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.height / 2, 0, 2 * Math.PI);

            ctx.moveTo(this.x + this.width / 2, this.y);
            ctx.lineTo(this.x + this.width / 2, this.y + this.height);

            ctx.moveTo(this.x + 27, this.y + this.height / 2);
            ctx.lineTo(this.x + this.width - 27, this.y + this.height / 2);

            ctx.stroke();
            ctx.closePath();
        };
    };
};

function drawStartingTile() {
    for (let i = 0; i < 2; i++) {
        let startingTile = new Tile(180, 200, 100, 50, 'wire');
        startingTile.draw();
    };
};

drawStartingTile();

function drawTerminal() {
    ctx.strokeRect(0, 0, canvas.width, 100);
    for (let i = 0; i < 2; i++) {
        let mainWireTile = new Tile(20, 20, 100, 50, 'wire');
        mainWireTile.draw();

        let mainLampTile = new Tile(220, 20, 100, 50, 'lamp');
        mainLampTile.draw();

        let mainButtonTile = new Tile(420, 20, 100, 50, 'button');
        mainButtonTile.draw();
    };
};

drawTerminal();

// for (let i = 0; i < 2; i++) {
//     let newTile = new Tile(380, 200, 100, 50, 'lamp');
//     newTile.draw();
// };