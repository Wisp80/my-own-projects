const canvas = document.getElementById('canvas');
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

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
};

let radius = 100;
let i = 0;
let steps = 10;
let xOne;
let yOne;
let xTwo;
let yTwo;

let bigCircleRadius = 70;
let bigCircleColor = getRandomColor();

let smallCircleRadius = 68;
let smallCircleColor = 'white'

function fire() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    xOne = (canvas.width / 2 + radius * Math.cos(2 * Math.PI * i / steps));
    yOne = (canvas.height / 2 + radius * Math.sin(2 * Math.PI * i / steps));

    xTwo = (canvas.width / 2 - radius * Math.cos(2 * Math.PI * i / steps));
    yTwo = (canvas.height / 2 - radius * Math.sin(2 * Math.PI * i / steps));

    i = i + 0.25;

    ctx.beginPath();
    ctx.arc(xOne, yOne, bigCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = bigCircleColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(xOne + 40, yOne, smallCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = smallCircleColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(xOne, yOne + 2 * bigCircleRadius - 8, bigCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = bigCircleColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(xOne - 40, yOne + 2 * bigCircleRadius - 8, smallCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = smallCircleColor;
    ctx.fill();
};

setInterval(() => {
    fire();
}, 1);