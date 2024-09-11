const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

const helper = {
    checkIntersectionBetweenNotRotatedRectangleAndPoint: function (
        farX, closeX,
        farY, closeY,
        pointX, pointY,
    ) {
        if (closeX <= pointX &&
            farX >= pointX &&
            closeY <= pointY &&
            farY >= pointY) {
            return true;
        } else {
            return false;
        };
    },

    getRandomColor: function () {
        let letters = '012345678ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    },

    randomIntFromInterval: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

let nextCoordinates = {
    x: 0,
    y: 0
};

function pickRandomNextCoordinateFromRectangle(x, y, width, height, direction) {
    let nextX = 0;
    let nextY = 0;

    let nextCoordinatesArray = [nextX, nextY]

    if (direction === 'east') {
        let arrayOfDirections = [[nextX, nextY - height], [nextX + width, nextY], [nextX, nextY + height]];
        for (let i = 0; i < arrayOfDirections.length; i++) {
            nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
        };
    };

    if (direction === 'south') {
        let arrayOfDirections = [[nextX - width, nextY], [nextX, nextY + height], [nextX + width, nextY]];
        for (let i = 0; i < arrayOfDirections.length; i++) {
            nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
        };
    };

    if (direction === 'west') {
        let arrayOfDirections = [[nextX, nextY + height], [nextX - width, nextY], [nextX, nextY - height]];
        for (let i = 0; i < arrayOfDirections.length; i++) {
            nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
        };
    };

    if (direction === 'north') {
        let arrayOfDirections = [[nextX - width, nextY], [nextX, nextY - height], [[nextX + width, nextY]]];
        for (let i = 0; i < arrayOfDirections.length; i++) {
            nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
        };
    };

    nextCoordinates.x = nextCoordinatesArray[0];
    nextCoordinates.y = nextCoordinatesArray[1];
};

function draw() {
    let w = 50;
    let h = 50;
    let currentX = 0;
    let currentY = 0;

    for (let i = 0; i < canvas.width; i += w) {
        for (let j = 0; j < canvas.height; j += h) {
            ctx.strokeStyle = 'black'
            ctx.strokeRect(i, j, w, h);

            if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + w, j, helper.randomIntFromInterval(100, 500), helper.randomIntFromInterval(100, 500))) {
                ctx.fillStyle = 'rgb(100, 210, 70)';
                ctx.fillRect(i, j, w, h);
            };

            pickRandomNextCoordinateFromRectangle(currentX, currentY, w, h, 'east');
        };
    };
};

setInterval(() => {
    draw();
}, 1);