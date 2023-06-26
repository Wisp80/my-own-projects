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

/*-------------------------------------------------------------------------------------------------------------*/

let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
});

function drawLines() {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    // ctx.moveTo(randomIntFromInterval(1, 1600), randomIntFromInterval(1, 900));
    ctx.moveTo(800, 450);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
};

/*-------------------------------------------------------------------------------------------------------------*/

function start() {
    setInterval(() => {
        drawLines();
    }, 1);
};

start();