const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

const helper = {
    getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) { color += letters[Math.floor(Math.random() * 16)]; };

        return color;
    },

    randomIntFromInterval: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

/*-------------------------------------------------------------------------------------------------------------*/

function start() {
    drawTerminal();
};

/*-------------------------------------------------------------------------------------------------------------*/

function drawTerminal() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'lime';

    for (let x = 70; x < 520; x += 90) {
        for (let y = 65; y < 605; y += 90) {
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();
        };
    };
};

function makeSpaces(xPos, yPos) {
    let space = document.createElement('div');
    space.style.position = "absolute";
    space.style.left = xPos + 'px';
    space.style.top = yPos + 'px';
    space.style.backgroundColor = 'red';
    console.log(space.style.height);
    space.style.border = "1px solid black";
};

/*-------------------------------------------------------------------------------------------------------------*/

function fillWord() {
    console.log('here');
};

/*-------------------------------------------------------------------------------------------------------------*/

start();