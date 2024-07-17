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

function movePointAroundCenter(centerX, centerY, pointX, pointY, radius, speed) {
    // Calculate the angle between the center and the point
    let angle = Math.atan2(pointY - centerY, pointX - centerX);

    // Increment the angle to simulate rotation
    angle += speed;

    // Calculate the new coordinates of the point using the updated angle
    const newX = centerX + radius * Math.cos(angle);
    const newY = centerY + radius * Math.sin(angle);

    return [newX, newY];
};

let circleX = 100; 
let circleY = 100;

let bigCircleRadius = 70;
let bigCircleColor = getRandomColor();

let smallCircleRadius = 68;
let smallCircleColor = 'white'

function fire() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let [x, y] = movePointAroundCenter(circleX, circleY + bigCircleRadius - 8, circleX, circleY, 5, 2);

    ctx.beginPath();
    ctx.arc(circleX, circleY, bigCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = bigCircleColor;
    ctx.fill(); // top right one

    ctx.beginPath();
    ctx.arc(circleX + 40, circleY, smallCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = smallCircleColor;
    ctx.fill(); // top left one

    ctx.beginPath();
    ctx.arc(circleX, circleY + 2 * bigCircleRadius - 8, bigCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = bigCircleColor;
    ctx.fill(); // bottom right one

    ctx.beginPath();
    ctx.arc(circleX - 40, circleY + 2 * bigCircleRadius - 8, smallCircleRadius, 0, 2 * Math.PI, false);
    ctx.fillStyle = smallCircleColor;
    ctx.fill(); // bottom left one

    ctx.beginPath();
    ctx.arc(circleX, circleY + bigCircleRadius - 8, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(circleX, circleY + 2 * bigCircleRadius - 8, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
};

setInterval(() => {
    fire();
}, 1);