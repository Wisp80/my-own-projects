const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

const helper = {
    checkIntersectionBetweenTwoNotRotatedRectangles: function (
        farX1, closeX2,
        closeX1, farX2,
        farY1, closeY2,
        closeY1, farY2
    ) {
        if (
            farX1 >= closeX2 &&
            closeX1 <= farX2 &&
            farY1 >= closeY2 &&
            closeY1 <= farY2
        ) {
            return true;
        } else {
            return false;
        };
    },

    getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) { color += letters[Math.floor(Math.random() * 16)]; };

        return color;
    },

    randomIntFromInterval: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

/*-------------------------------------------------------------------------------------------------------------*/

let currentSpeedY = 1;
let currentSpeedX = 2;
let isActive = true;
let ticks = 0;

const mousePose = {
    currentMouseX: 0,
    currentMouseY: 0
};

let previousTickMouseX = 0;
let currentTickMouseX = 0;
let currentMouseDirectionX = 'nowhere';

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;
});

function RandomRectangle(width, height) {
    this.x = canvas.width / 2;
    this.y = -1 * height;
    this.width = width;
    this.height = height;
    this.color = helper.getRandomColor();
    this.speedOfFalling = 1;
    this.isActive = true;

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};

let fallingRectangles = [
    new RandomRectangle(helper.randomIntFromInterval(50, 300), helper.randomIntFromInterval(50, 250))
];

let fallenRectangles = [];

function drawRandomRectangle() {
    if (isActive) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < fallenRectangles.length; i++) {
            ctx.fillStyle = fallenRectangles[i].color;
            ctx.fillRect(fallenRectangles[i].x, fallenRectangles[i].y, fallenRectangles[i].width, fallenRectangles[i].height);
        };

        for (let i = 0; i < fallingRectangles.length; i++) {
            ctx.fillStyle = fallingRectangles[i].color;
            // ctx.fillRect(mousePose.currentMouseX - (fallingRectangles[i].width / 2), fallingRectangles[i].y, fallingRectangles[i].width, fallingRectangles[i].height);
            ctx.fillRect(fallingRectangles[i].x, fallingRectangles[i].y, fallingRectangles[i].width, fallingRectangles[i].height);
        };
    };
};

function stop() {
    isActive = false;
};

function stopFallenRectangles() {
    for (let i = 0; i < fallingRectangles.length; i++) {

        for (let j = 0; j < fallenRectangles.length; j++) {
            if (
                helper.checkIntersectionBetweenTwoNotRotatedRectangles(
                    fallingRectangles[i].x + fallingRectangles[i].width, fallenRectangles[j].x,
                    fallingRectangles[i].x, fallenRectangles[j].x + fallenRectangles[j].width,

                    fallingRectangles[i].y + fallingRectangles[i].height + currentSpeedY, fallenRectangles[j].y,
                    fallingRectangles[i].y + currentSpeedY, fallenRectangles[j].y + fallenRectangles[j].height,
                )
            ) {
                fallingRectangles[i].y = fallenRectangles[j].y - fallingRectangles[i].height;
                fallingRectangles[i].isActive = false;
                fallenRectangles.push(fallingRectangles[i]);
                fallingRectangles.splice(0, 1);
                let tempRectangle = new RandomRectangle(helper.randomIntFromInterval(50, 300), helper.randomIntFromInterval(50, 250));
                fallingRectangles.push(tempRectangle);
                return;
            };
        };

        if (fallingRectangles[i].y + fallingRectangles[i].height >= canvas.height && fallingRectangles[i].isActive) {
            fallingRectangles[i].isActive = false;
            fallenRectangles.push(fallingRectangles[i]);
            fallingRectangles.splice(0, 1);
            let tempRectangle = new RandomRectangle(helper.randomIntFromInterval(50, 300), helper.randomIntFromInterval(50, 250));
            fallingRectangles.push(tempRectangle);
        };

        if (fallingRectangles[i].isActive) {
            if (currentMouseDirectionX === 'right') {
                for (let i = 0; i < fallingRectangles.length; i++) {
                    if (fallingRectangles[i].isActive) {
                        fallingRectangles[i].x += currentSpeedX;
                    };
                };
            } else if (currentMouseDirectionX === 'left') {
                for (let i = 0; i < fallingRectangles.length; i++) {
                    if (fallingRectangles[i].isActive) {
                        fallingRectangles[i].x -= currentSpeedX;
                    };
                };
                // } else if (currentMouseDirectionX === 'nowhere') {
                //     for (let i = 0; i < fallingRectangles.length; i++) {
                //         if (fallingRectangles[i].isActive) {
                //             fallingRectangles[i].x += 0;
                //         };
                //     };
            };
            
            // fallingRectangles[i].x = mousePose.currentMouseX - (fallingRectangles[i].width / 2);
            fallingRectangles[i].y += currentSpeedY;
        };
    };
};

setInterval(() => {
    previousTickMouseX = currentTickMouseX;
    currentTickMouseX = mousePose.currentMouseX;

    if (currentTickMouseX - previousTickMouseX > 0 || currentTickMouseX >= canvas.width) {
        currentMouseDirectionX = 'right';
    } else if (currentTickMouseX - previousTickMouseX < 0 || currentTickMouseX <= 0) {
        currentMouseDirectionX = 'left';
    } else {
        currentMouseDirectionX = 'nowhere';
    };

    // if (currentTickMouseX <= 0) {
    //     currentMouseDirectionX = 'left';
    // } else if (currentTickMouseX >= canvas.width) {
    //     currentMouseDirectionX = 'right';
    // };

    console.log(currentTickMouseX);

    stopFallenRectangles();
    drawRandomRectangle();
    ticks++;
}, 1);