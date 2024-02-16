const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

function Square(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = getRandomColor();

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
};

let squareOne = new Square(400, 300, 120, 120);
squareOne.draw();

let mousePose = {};

let previousTickMouseX = 0;
let currentTickMouseX = 0;
let currentMouseDirectionX = 'nowhere';

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;
});

function showMousePosition() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    setTimeout(() => {
        showMousePosition();
    }, 1);

    ctx.fillStyle = "black";
    ctx.font = "50px serif";
    ctx.fillText(`currentMouseX: ${mousePose.currentMouseX}`, 50, 90);
    ctx.fillText(`currentMouseY: ${mousePose.currentMouseY}`, 50, 190);
};

showMousePosition();