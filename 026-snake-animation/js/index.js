const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

function getRandomColor() {
    let letters = '012345678ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let nextCoordinates = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

function pickRandomCoordinateFromRectangle(x, y, width, height) {
    let nextX = randomIntFromInterval(x - width, x + width);
    let nextY = randomIntFromInterval(y - height, y + height);

    nextCoordinates.x = nextX;
    nextCoordinates.y = nextY;
};

function draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(nextCoordinates.x, nextCoordinates.y, 30, 30);
    // ctx.arc(nextCoordinates.x, nextCoordinates.y, 20, 0, 2 * Math.PI);
    ctx.fill();
    pickRandomCoordinateFromRectangle(nextCoordinates.x, nextCoordinates.y, 30, 30);    
};

setInterval(() => {
    draw();
}, 1);