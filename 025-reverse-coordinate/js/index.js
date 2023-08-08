const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

let coordinatesOne = {
    x: 11,
    y: 92,
};

let coordinatesTwo = {
    reverseX: 1,
    reverseY: 1
};

let iterator = 0;
let radius = 10;
let steps = 2;

function reverseCoordinate(coordinate) {
    let stringCoordinate = coordinate.toString();
    let splitStringCoordinate = stringCoordinate.split('');
    let reverseArray = splitStringCoordinate.reverse();
    let joinedArray = reverseArray.join('');
    let newCoordinate = Number(joinedArray);
    return newCoordinate;
};

function draw2() {
    if (iterator === 0) {
        coordinatesTwo.reverseX = reverseCoordinate(coordinatesOne.x);
        coordinatesTwo.reverseY = reverseCoordinate(coordinatesOne.y);

        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.moveTo(coordinatesOne.x, coordinatesOne.y);
        ctx.lineTo(coordinatesTwo.reverseX, coordinatesTwo.reverseY);
        
        ctx.stroke();

        // if (coordinatesOne.x === coordinatesTwo.reverseX || coordinatesOne.y === coordinatesTwo.reverseY) {
        //     ctx.beginPath();
        //     ctx.fillStyle = 'red';
        //     ctx.arc(100, 75, 5, 0, 2 * Math.PI);
        //     ctx.fill();
        // };

        iterator++;
    } else {
        coordinatesOne.x += 1;
        coordinatesOne.y += 1;

        coordinatesTwo.reverseX = reverseCoordinate(coordinatesOne.x);
        coordinatesTwo.reverseY = reverseCoordinate(coordinatesOne.y);

        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.moveTo(coordinatesOne.x, coordinatesOne.y);
        ctx.lineTo(coordinatesTwo.reverseX, coordinatesTwo.reverseY);
        
        ctx.stroke();
        iterator++;
    };
}

setInterval(() => {
    draw2();
}, 1);