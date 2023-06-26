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

/*-------------------------------------------------------------------------------------------------------------*/

function spawnStars() {
    setTimeout(() => {
        spawnStars();
    }, 10);

    ctx.beginPath();
    ctx.moveTo(800, 450);
    ctx.lineTo(getRandomNumber(1600), getRandomNumber(900));
    ctx.strokeStyle = getRandomColor();
    ctx.stroke();
};

/*-------------------------------------------------------------------------------------------------------------*/

let numbers = {
    first: 10,
    second: 20,
    third: 30,
    fourth: 30
};

function spawnFirstFractalOne() {
    setTimeout(() => {
        spawnFirstFractalOne();
    }, 1);

    numbers.first += 0;
    numbers.second += -1;
    numbers.third += 6;
    numbers.fourth += 89;

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(numbers.first, numbers.second);
    ctx.lineTo(numbers.third, numbers.fourth);
    ctx.stroke();
};

function spawnSecondFractalOne() {
    setTimeout(() => {
        spawnSecondFractalOne();
    }, 10);

    numbers.first += 0;
    numbers.second += 0;
    numbers.third += 1;
    numbers.fourth += 0;

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(numbers.first, numbers.second);
    ctx.lineTo(numbers.third, numbers.fourth);
    ctx.stroke();
};

function spawnThirdFractalOne() {
    setTimeout(() => {
        spawnThirdFractalOne();
    }, 10);

    numbers.first += 12;
    numbers.second += 10;
    numbers.third += 20;
    numbers.fourth += -16;

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(numbers.first, numbers.second);
    ctx.lineTo(numbers.third, numbers.fourth);
    ctx.stroke();
};

/*-------------------------------------------------------------------------------------------------------------*/

let currentNumbers = {
    first: 10,
    second: 20,
    third: 30,
    fourth: 30
};

function spawnFractalTwo() {
    setTimeout(() => {
        spawnFractalTwo();
    }, 1);
    

    currentNumbers.first += 5;
    currentNumbers.second += 5;
    currentNumbers.third += 1;
    currentNumbers.fourth += 1;

    ctx.beginPath();
    ctx.arc(currentNumbers.first, currentNumbers.second, currentNumbers.third, 0, currentNumbers.fourth * Math.PI, false);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
};

/*-------------------------------------------------------------------------------------------------------------*/

function spawnBalls() {
    setTimeout(() => {
        spawnBalls();
    }, 10);

    ctx.beginPath();
    ctx.arc(getRandomNumber(1600), getRandomNumber(900), getRandomNumber(70), 0, 2 * Math.PI, false);
    ctx.shadowColor = getRandomColor();
    ctx.shadowBlur = 10;
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = getRandomColor();
    ctx.fill();
};

spawnStars();

spawnFirstFractalOne();
spawnSecondFractalOne();
spawnThirdFractalOne();

spawnFractalTwo();

spawnBalls();