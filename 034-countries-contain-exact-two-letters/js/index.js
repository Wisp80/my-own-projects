const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

function drawGrid(w, h) {
    for (let i = 0; i < canvas.width; i += w) {
        for (let j = 0; j < canvas.height; j += h) {
            ctx.strokeStyle = '#000000';
            ctx.strokeRect(i, j, w, h);
        }
    }
};

drawGrid(50, 50);