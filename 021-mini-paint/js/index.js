const canvas = document.getElementsByClassName('canvas-one')[0];
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

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/*-------------------------------------------------------------------------------------------------------------*/

let color = 'blue';

function changeColor(el) {
    color = el.innerHTML;
};

/*-------------------------------------------------------------------------------------------------------------*/

let size = 20;

function changeSize(el) {
    size = el.value;
};

/*-------------------------------------------------------------------------------------------------------------*/

let mousePos = { x: undefined, y: undefined };
let isMouseDown = false;

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
});

window.addEventListener("mousedown", () => {
    isMouseDown = true;
});

window.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function draw() {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(mousePos.x, mousePos.y, size, 0, 2 * Math.PI);
    ctx.fill();
    // ctx.stroke();
};

/*-------------------------------------------------------------------------------------------------------------*/

let range = document.getElementsByClassName('size-input')[0];
let hint = document.getElementsByClassName('hint')[0];

hint.style.top = range.offsetHeight + 'px';

var thumbnWidth = 8;

let offset = range.clientWidth / (parseInt(range.max) - parseInt(range.min));
let updatePosition = () => {
    hint.innerHTML = range.value;
    hint.style.left = ((range.valueAsNumber - parseInt(range.min)) * offset - hint.offsetWidth / 2 - 
    (range.valueAsNumber / parseInt(range.max) - parseInt(range.min) - 0.5) * thumbnWidth) + 'px';

};

updatePosition();
range.addEventListener('input', updatePosition);

/*-------------------------------------------------------------------------------------------------------------*/

function start() {
    setInterval(() => {
        if (isMouseDown === true) {
            draw();
        };
    }, 1);
};

start();