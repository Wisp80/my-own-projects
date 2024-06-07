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

let radius = 200;
let radiusTwo = 400;
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
    xOne = (canvas.width / 2 + radius * Math.cos(2 * Math.PI * i / steps));
    yOne = (canvas.height / 2 + radius * Math.sin(2 * Math.PI * i / steps));

    xTwo = (canvas.width / 2 - radius * Math.cos(2 * Math.PI * i / steps));
    yTwo = (canvas.height / 2 - radius * Math.sin(2 * Math.PI * i / steps));

    i = i + 0.05;

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, bigCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = bigCircleColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 + 40, canvas.height / 2, smallCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = smallCircleColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 + 2 * bigCircleRadius - 8, bigCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = bigCircleColor;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width / 2 - 40, canvas.height / 2 + 2 * bigCircleRadius - 8, smallCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = smallCircleColor;
    ctx.fill();
};

setTimeout(() => {
    fire();
}, 1);