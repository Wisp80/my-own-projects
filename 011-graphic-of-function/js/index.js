const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

ctx.transform(1, 0, 0, -1, canvas.width / 2, canvas.height / 2);
ctx.lineWidth = 0.5;

let arrOfXPointsOne = [1, 2, 0, -1, -2];
let arrOfXPointsTwo = [7, 13, 0, -10, -13];

const drawAxes = () => {
    ctx.beginPath();
    ctx.moveTo(0, -450);
    ctx.lineTo(0, 450);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-800, 0);
    ctx.lineTo(800, 0);
    ctx.stroke();
};

drawAxes();

const setEquation = (x) => {
    let y = Math.pow(1.5, x);

    return y;
};

function drawChart(arrOfXPoints) {
    let arrOfYPoints = [];

    for (let i = 0; i < arrOfXPoints.length; i++) {        
        arrOfYPoints[i] = setEquation(arrOfXPoints[i]);
    };
    console.log(arrOfXPoints);
    console.log(arrOfYPoints);

    ctx.beginPath();
    ctx.lineWidth = 0.6;
    ctx.strokeStyle = 'red';
    ctx.moveTo(arrOfXPoints[0], arrOfYPoints[0]);

    for (let i = 0; i < arrOfXPoints.length; i++) {
        ctx.lineTo(arrOfXPoints[i], arrOfYPoints[i]);
        ctx.stroke();
        console.log('asdasd');
    };    
};

drawChart(arrOfXPointsTwo);