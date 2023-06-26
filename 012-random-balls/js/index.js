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

function spawnLines() {
    setTimeout(() => {
        spawnLines();
    }, 100);

    ctx.beginPath();
    ctx.arc(getRandomNumber(500), getRandomNumber(500), getRandomNumber(70), 0, 2 * Math.PI, false);
    ctx.shadowColor = getRandomColor();
    ctx.shadowBlur = 10;
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = getRandomColor();
    ctx.fill();
};

spawnLines();