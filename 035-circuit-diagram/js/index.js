const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

let helper = {
    checkIntersectionBetweenNotRotatedRectangleAndPoint: function (
        farX, closeX,
        farY, closeY,
        pointX, pointY,
    ) {
        if (closeX <= pointX &&
            farX >= pointX &&
            closeY <= pointY &&
            farY >= pointY) {
            return true;
        } else {
            return false;
        };
    },

    getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    }
};

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

let startingTile = new Tile(180, 200, 100, 50, 'wire');
let mainWireTile = new Tile(20, 20, 100, 50, 'wire');
let mainLampTile = new Tile(220, 20, 100, 50, 'lamp');
let mainButtonTile = new Tile(420, 20, 100, 50, 'button');

let mainTiles = [startingTile, mainWireTile, mainLampTile, mainButtonTile];

function drawStartingTile() {
    for (let i = 0; i < 2; i++) {
        console.log(mainTiles);
        mainTiles.startingTile.draw();
    };
};

drawStartingTile();

function drawTerminal() {
    ctx.strokeRect(0, 0, canvas.width, 100);
    for (let i = 0; i < 2; i++) {
        mainTiles.mainWireTile.draw();
        mainTiles.mainLampTile.draw();
        mainTiles.mainButtonTile.draw();
    };
};

drawTerminal();

let mousePose = {};

let previousTickMouseX = 0;
let currentTickMouseX = 0;
let isMousedown = false;
let startX = 0;
let startY = 0;

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;

    if (isMousedown === true) {
        moveSquare();
    };
});

window.addEventListener('mousedown', (e) => {
    startX = mousePose.currentMouseX;
    startY = mousePose.currentMouseY;
    isMousedown = true;
});

window.addEventListener('mouseup', (e) => {
    isMousedown = false;
});

function moveSquare() {
    for (let i = 0; i < mainTiles.length; i++) {
        if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(
            mainTiles[i].x + mainTiles[i].width, mainTiles[i].x,
            mainTiles[i].y + mainTiles[i].height, mainTiles[i].y,
            mousePose.currentMouseX, mousePose.currentMouseY)
        ) {
            let xDifference = mousePose.currentMouseX - startX;
            let yDifference = mousePose.currentMouseY - startY;
            mainTiles[i].x += xDifference;
            mainTiles[i].y += yDifference;

            startX = mousePose.currentMouseX;
            startY = mousePose.currentMouseY;
        };
    };
};