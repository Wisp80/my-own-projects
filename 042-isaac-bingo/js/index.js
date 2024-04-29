const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/
let counter = 0;
function drawBoard(w, h, side) {
    f: for (let i = 0; i < canvas.width; i += h) {

        if (counter === 1) {
            console.log('yo');
            break
        };

        for (let j = 0; j < canvas.height; j += w) {
            ctx.strokeStyle = "black";
            ctx.strokeRect(i, j, 50, 50);

            counter++;
        }
    };
};

drawBoard(50, 50, 5)