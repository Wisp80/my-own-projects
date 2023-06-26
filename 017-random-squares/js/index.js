const canvas = document.getElementById('canvas');
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

let quadrilateralCoordinates = {
    firstPoint: 0,
    secondPoint: 0,
    thirdPoint: 0,
    fourthPoint: 0,
    fifthPoint: 0,
    sixthPoint: 0,
    seventhPoint: 0,
    eighthPoint: 0,
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
};

function spawnQuadrilateral() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    setTimeout(() => {
        spawnQuadrilateral();
    }, 1000);

    quadrilateralCoordinates.firstPoint = getRandomNumber(1600);
    quadrilateralCoordinates.secondPoint = getRandomNumber(1600);
    quadrilateralCoordinates.thirdPoint = getRandomNumber(1600);
    quadrilateralCoordinates.fourthPoint = getRandomNumber(1600);
    quadrilateralCoordinates.fifthPoint = getRandomNumber(1600);
    quadrilateralCoordinates.sixthPoint = getRandomNumber(1600);
    quadrilateralCoordinates.seventhPoint = getRandomNumber(1600);
    quadrilateralCoordinates.eighthPoint = getRandomNumber(1600);

    ctx.beginPath();
    ctx.strokeStyle = 'violet';
    ctx.moveTo(quadrilateralCoordinates.firstPoint, quadrilateralCoordinates.secondPoint);
    ctx.lineTo(quadrilateralCoordinates.thirdPoint, quadrilateralCoordinates.fourthPoint);
    ctx.lineTo(quadrilateralCoordinates.fifthPoint, quadrilateralCoordinates.sixthPoint);
    ctx.lineTo(quadrilateralCoordinates.seventhPoint, quadrilateralCoordinates.eighthPoint);
    ctx.moveTo(quadrilateralCoordinates.firstPoint, quadrilateralCoordinates.secondPoint);
    ctx.lineTo(quadrilateralCoordinates.seventhPoint, quadrilateralCoordinates.eighthPoint);
    ctx.lineWidth = 14;
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 15;
    ctx.stroke();
    ctx.fill();
};

spawnQuadrilateral();