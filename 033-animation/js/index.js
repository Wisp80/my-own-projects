const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

// canvas.width = 1600;
// canvas.height = 880;

let radius = 50;
let newLineWidth = 1;

function draw() {
    setTimeout(() => {
        draw();
    }, 1);

    radius++;
    newLineWidth++;

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = newLineWidth;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
};

draw();