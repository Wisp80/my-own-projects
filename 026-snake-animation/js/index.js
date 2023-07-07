const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let nextCoordinates = {
    x: 0,
    y: 0
};

function pickRandomCoordinateFromRectangle(x, y, width, height) {
    let nextX = randomIntFromInterval(x, x + width);
    let nextY = randomIntFromInterval(y, y + height);

    nextCoordinates.x = nextX;
    nextCoordinates.y = nextY;
};

function draw() {
    ctx.beginPath();
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(0, 0, 50, 50);
    pickRandomCoordinateFromRectangle(nextCoordinates.x, nextCoordinates.y, 50, 50);
    ctx.fillRect(nextCoordinates.x, nextCoordinates.y, 50, 50);
};

setInterval(() => {
    draw();
}, 100);