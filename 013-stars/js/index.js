const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

function getRandomColour(redMax, greenMax, blueMax) {
    var red = Math.floor(Math.random() * redMax);
    var green = Math.floor(Math.random() * greenMax);
    var blue = Math.floor(Math.random() * blueMax);

    return "rgb(" + red + "," + green + "," + blue + " )";
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
};

function spawnLines() {
    setTimeout(() => {
        spawnLines();
    }, 100);

    ctx.beginPath();
    ctx.moveTo(800, 450);
    ctx.lineTo(getRandomNumber(1600), getRandomNumber(900));
    ctx.strokeStyle = getRandomColour(256, 256, 256);
    ctx.stroke();
};

spawnLines();