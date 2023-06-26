let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

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

    numbers.first += 5;
    numbers.second += 5;
    numbers.third += 1;
    numbers.fourth += 1;

    ctx.beginPath();
    ctx.arc(numbers.first, numbers.second, numbers.third, 0, numbers.fourth * Math.PI, false);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
};

spawnLines();
