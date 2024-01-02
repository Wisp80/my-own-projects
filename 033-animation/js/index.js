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
    setTimeout(() => {
        draw2();
    }, 700);
});

// window.addEventListener("mouseup", () => {
//     isMouseDown = false;
// });

/*--------------------------------------------------------------------------------*/

let outerRadius = 20;
let outerNewLineWidth = 2;

let innerRadius = 10;
let innerNewLineWidth = 1;

function draw(x, y) {
    setTimeout(() => {
        draw();
    }, 1);

    outerRadius++;
    outerNewLineWidth++;

    innerRadius++;
    innerNewLineWidth++;

    ctx.beginPath();
    ctx.arc(x, y, outerRadius, 0, 2 * Math.PI, false);
    ctx.lineWidth = outerNewLineWidth;
    ctx.strokeStyle = '#5633A0';
    ctx.stroke();
    ctx.closePath();
};

function draw2(x, y) {
    setTimeout(() => {
        draw();
    }, 1);

    ctx.beginPath();
    ctx.arc(x, y, innerRadius, 0, 2 * Math.PI, false);
    ctx.lineWidth = innerNewLineWidth;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();
}