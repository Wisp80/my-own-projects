const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

const helper = {
    checkIntersectionBetweenNotRotatedRectangleAndPoint: function (
        farX, closeX,
        farY, closeY,
        pointX, pointY,
    ) {
        if (closeX <= pointX &&
            farX >= pointX &&
            closeY <= pointY &&
            farY >= pointY) {
            return true;
        } else {
            return false;
        };
    },

    getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    }
};

/*------------------------------------------------------------------------*/

let mousePose = {};

let previousTickMouseX = 0;
let currentTickMouseX = 0;
let isMousedown = false;

/*------------------------------------------------------------------------*/

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;

    if (isMousedown === true) {

    };
});

window.addEventListener('mousedown', (e) => {
    startX = mousePose.currentMouseX;
    startY = mousePose.currentMouseY;
    isMousedown = true;
});

window.addEventListener('mouseup', (e) => {
    isMousedown = false;
});

/*------------------------------------------------------------------------*/

function showMousePosition() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setTimeout(() => {
        showMousePosition();
    }, 1);

    ctx.fillStyle = "black";
    ctx.font = "24px serif";
    ctx.fillText(`currentMouseX: ${Math.round(mousePose.currentMouseX)}`, 50, 60);
    ctx.fillText(`currentMouseY: ${Math.round(mousePose.currentMouseY)}`, 50, 120);

    let intervalId = setInterval(() => {
        drawLine(640, 340, 840, 340, 'black')
    }, 1000);

    setTimeout(() => {
        drawLine(640, 340, 840, 340, 'white')
        clearInterval(intervalId);
    }, 3000);
};

// drawLine(640, 340, 840, 340)

showMousePosition();

/*------------------------------------------------------------------------*/

function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};

function trackMouseMovementForCheckingIfUserIsDrawingLineOutOfMemory(params) {
    
}