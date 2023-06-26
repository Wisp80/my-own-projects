let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let numbers = {
    first: 10,
    second: 20,
    third: 30,
    fourth: 30
};

function spawnLines() {
    setTimeout(() => {
        spawnLines();
    }, 1);

    numbers.first += 0;
    numbers.second += -1;
    numbers.third += 0;
    numbers.fourth += 9;

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(numbers.first, numbers.second);
    ctx.lineTo(numbers.third, numbers.fourth);
    ctx.stroke();
};

function spawnLinesTwo() {
    setTimeout(() => {
        spawnLinesTwo();
    }, 10);

    numbers.first += 8;
    numbers.second += 7;
    numbers.third += 6;
    numbers.fourth += 5;

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(numbers.first, numbers.second);
    ctx.lineTo(numbers.third, numbers.fourth);
    ctx.stroke();
};

function spawnLinesThree() {
    setTimeout(() => {
        spawnLinesThree();
    }, 10);

    numbers.first += 4;
    numbers.second += 3;
    numbers.third += 2;
    numbers.fourth += 1;

    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(numbers.first, numbers.second);
    ctx.lineTo(numbers.third, numbers.fourth);
    ctx.stroke();
};

spawnLines();
spawnLinesTwo();
spawnLinesThree();