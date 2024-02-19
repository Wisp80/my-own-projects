const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

let helper = {
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

function Square(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = helper.getRandomColor();

    this.draw = function () {
        setTimeout(() => {
            this.draw();
        }, 1);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};

let mousePose = {};

let previousTickMouseX = 0;
let currentTickMouseX = 0;
let isMousedown = false;
let startX = 0;
let startY = 0;

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;

    if (isMousedown === true) {
        moveSquare();
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

function showMousePosition() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setTimeout(() => {
        showMousePosition();
    }, 1);

    ctx.fillStyle = "black";
    ctx.font = "50px serif";
    ctx.fillText(`currentMouseX: ${mousePose.currentMouseX}`, 50, 90);
    ctx.fillText(`currentMouseY: ${mousePose.currentMouseY}`, 50, 190);
};

function moveSquare() {
    if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(
        squareOne.x + squareOne.width, squareOne.x,
        squareOne.y + squareOne.height, squareOne.y,
        mousePose.currentMouseX, mousePose.currentMouseY)
    ) {
        let xDifference = mousePose.currentMouseX - startX;
        let yDifference = mousePose.currentMouseY - startY;
        squareOne.x += xDifference;
        squareOne.y += yDifference;

        startX = mousePose.currentMouseX;
        startY = mousePose.currentMouseY;
    } else {
        console.log('No intersection');
    };
};

showMousePosition();

let squareOne = new Square(400, 300, 120, 120);
squareOne.draw();