const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

function drawTerminal() {
    ctx.strokeRect(0, 0, canvas.width, 100);
};

drawTerminal();