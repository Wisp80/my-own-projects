const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

let mousePose = { currentMouseX: undefined, currentMouseY: undefined };
let isMouseDown = false;

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;
});

window.addEventListener("click", () => {
    draw(mousePose.currentMouseX, mousePose.currentMouseY);
    draw2(mousePose.currentMouseX, mousePose.currentMouseY);

});

// window.addEventListener("mouseup", () => {
//     isMouseDown = false;
// });

/*--------------------------------------------------------------------------------*/

let outerRadius = 20;
let outerNewLineWidth = 2;

let innerRadius = 14;
let innerNewLineWidth = 1;

let counter = 1;

function draw(x, y) {
    setTimeout(() => {
        draw(x, y);
    }, 1);

    outerRadius++;
    outerNewLineWidth++;

    ctx.beginPath();
    ctx.arc(x, y, outerRadius, 0, 2 * Math.PI, false);
    ctx.lineWidth = outerNewLineWidth;
    ctx.strokeStyle = '#5633A0';
    ctx.stroke();
    ctx.closePath();

    stopIncreasing();
};

function draw2(x, y) {
    setTimeout(() => {
        draw2(x, y);
    }, 1);

    innerRadius++;
    innerNewLineWidth++;

    ctx.beginPath();
    ctx.arc(x, y, innerRadius, 0, 2 * Math.PI, false);
    ctx.lineWidth = innerNewLineWidth;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
    ctx.closePath();

    stopIncreasing2();
};

function stopIncreasing() {
    setTimeout(() => {
        outerRadius = 0;
        outerNewLineWidth = 0;
    }, 2000);
};

function stopIncreasing2() {
    setTimeout(() => {
        innerRadius = 0;
        innerNewLineWidth = 0;
    }, 2000);
};