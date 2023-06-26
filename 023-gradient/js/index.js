const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

let a = 100;

function run() {    
    a = a * 2;
    let gradient = ctx.createLinearGradient(a, 0, 10, 0);

    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1, "white");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

setInterval(() => {
    run();
}, 1);