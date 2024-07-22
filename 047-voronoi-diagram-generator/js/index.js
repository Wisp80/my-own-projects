const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

window.onload = function () {
    // controls.initializePlayersControlsListening();
};

let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
});

let mainPoints = [
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
    [helper.randomIntFromInterval(0, 195), helper.randomIntFromInterval(0, 195), helper.getRandomColor()],
];

function getDistanceBetweenTwoPixels(x1, y1, x2, y2) {
    let distance = 0;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    dx = x2 - x1;
    dy = y2 - y1;
    distance = Math.sqrt(dx * dx + dy * dy);

    return distance;
};

function draw() {
    let distanceBetweenThisPixelAndPointOne = 0;
    let distanceBetweenThisPixelAndPointTwo = 0;

    for (let i = 0; i < canvas.width; i++) {
        for (let j = 0; j < canvas.height; j++) {
            let minDistance = Infinity;
            let closestPointIndex = 0;

            for (let k = 0; k < mainPoints.length; k++) {
                let distance = getDistanceBetweenTwoPixels(i, j, mainPoints[k][0], mainPoints[k][1]);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestPointIndex = k;
                };
            };

            ctx.fillStyle = mainPoints[closestPointIndex][2];
            ctx.fillRect(i, j, 1, 1);

            ctx.fillStyle = 'red';
            ctx.fillRect(i, j, 1, 1);

            distanceBetweenThisPixelAndPointOne = getDistanceBetweenTwoPixels(i, j, mainPoints[0][0], mainPoints[0][1]);
            distanceBetweenThisPixelAndPointTwo = getDistanceBetweenTwoPixels(i, j, mainPoints[1][0], mainPoints[1][1]);
        };

        for (let i = 0; i < mainPoints.length; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(mainPoints[i][0], mainPoints[i][1], 5, 5);
        };

        ctx.fillStyle = 'black';
        ctx.fillRect(mousePos.x, mousePos.y, 5, 5);
    };
};

setInterval(() => {
    draw();
}, 1);