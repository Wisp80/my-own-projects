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

let cells = [];

function pickRandomNextCoordinateFromRectangle(x, y, width, height, direction) {
    let nextX = 0;
    let nextY = 0;

    let nextCoordinatesArray = [nextX, nextY]

    // if (direction === 'east') {
    //     let arrayOfDirections = [[nextX, nextY - height], [nextX + width, nextY], [nextX, nextY + height]];
    //     for (let i = 0; i < arrayOfDirections.length; i++) {
    //         nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
    //     };
    // };

    // if (direction === 'south') {
    //     let arrayOfDirections = [[nextX - width, nextY], [nextX, nextY + height], [nextX + width, nextY]];
    //     for (let i = 0; i < arrayOfDirections.length; i++) {
    //         nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
    //     };
    // };

    // if (direction === 'west') {
    //     let arrayOfDirections = [[nextX, nextY + height], [nextX - width, nextY], [nextX, nextY - height]];
    //     for (let i = 0; i < arrayOfDirections.length; i++) {
    //         nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
    //     };
    // };

    // if (direction === 'north') {
    //     let arrayOfDirections = [[nextX - width, nextY], [nextX, nextY - height], [nextX + width, nextY]];
    //     for (let i = 0; i < arrayOfDirections.length; i++) {
    //         nextCoordinatesArray = arrayOfDirections[Math.floor(Math.random() * arrayOfDirections.length)]
    //     };
    // };

    nextCoordinates.x = nextCoordinatesArray[0];
    nextCoordinates.y = nextCoordinatesArray[1];
};

function draw() {
    let w = 50;
    let h = 50;
    let currentX = 0;
    let currentY = 0;
    let arrayOfMainPointsOfTheLoop = [];

    // ctx.fillStyle = 'rgb(66, 125, 212)'
    // ctx.fillRect(0,0,canvas.width, canvas.height)

    for (let i = 0; i < canvas.width; i += w) {
        for (let j = 0; j < canvas.height; j += h) {
            ctx.strokeStyle = 'black'
            ctx.strokeRect(i, j, w, h);
            cells.push({ x: i, y: j, width: w, height: h, id: `${i / 10}${j / 10}` });

            // for (let k = 0; k <= 4; k += 200) {
            //     for (let l = 0; l <= 4; l += 200) {
            //         arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(k + 1, 200 + k - 1), helper.randomIntFromInterval(l + 1, l+200 - 1)]);
            //         let a = k/200;
            //         if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + w, j, arrayOfMainPointsOfTheLoop[a][0], arrayOfMainPointsOfTheLoop[a][1])) {
            //             ctx.fillStyle = 'rgb(100, 210, 70)';
            //             ctx.fillRect(i, j, w, h);
            //         };
            //     };
            // };

            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(0 + 1, 200 - 1), helper.randomIntFromInterval(0 + 1, 200 - 1)]); // 1
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(200 + 1, 400 - 1), helper.randomIntFromInterval(0 + 1, 200 - 1)]); // 2
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(400 + 1, 600 - 1), helper.randomIntFromInterval(0 + 1, 200 - 1)]); // 3
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(600 + 1, 800 - 1), helper.randomIntFromInterval(0 + 1, 200 - 1)]); // 4
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(600 + 1, 800 - 1), helper.randomIntFromInterval(200 + 1, 400 - 1)]); // 6
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(600 + 1, 800 - 1), helper.randomIntFromInterval(200 + 1, 600 - 1)]); // 8
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(600 + 1, 800 - 1), helper.randomIntFromInterval(600 + 1, 800 - 1)]); // 12
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(400 + 1, 600 - 1), helper.randomIntFromInterval(600 + 1, 800 - 1)]); // 11
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(200 + 1, 400 - 1), helper.randomIntFromInterval(600 + 1, 800 - 1)]); // 10
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(0 + 1, 200 - 1), helper.randomIntFromInterval(600 + 1, 800 - 1)]); // 9
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(0 + 1, 200 - 1), helper.randomIntFromInterval(200 + 1, 600 - 1)]); // 7
            arrayOfMainPointsOfTheLoop.push([helper.randomIntFromInterval(0 + 1, 200 - 1), helper.randomIntFromInterval(200 + 1, 400 - 1)]); // 5

            let region = new Path2D();
            region.moveTo(arrayOfMainPointsOfTheLoop[0][0], arrayOfMainPointsOfTheLoop[0][1]);
            for (let k = 0; k < 12; k++) {
                if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + w, j, arrayOfMainPointsOfTheLoop[k][0], arrayOfMainPointsOfTheLoop[k][1])) {
                    ctx.fillStyle = 'rgb(100, 210, 70)';
                    ctx.fillRect(i, j, w, h);
                };

                ctx.beginPath();

                let kPlusOne = k + 1;
                if (k === 11) {
                    kPlusOne = 0;
                };

                region.lineTo(arrayOfMainPointsOfTheLoop[kPlusOne][0], arrayOfMainPointsOfTheLoop[kPlusOne][1]);
                ctx.stroke();
            };

            region.closePath();
            ctx.fill(region, 'nonzero');

            // for (let i = 0; i < tilesCountInGeneral; i++) {
            //     let directions = ['east', 'south', 'west', 'north'];
            //     pickRandomNextCoordinateFromRectangle(currentX, currentY, w, h, 'east');
            // }
        };
    };

    // viewAllColoredCells();
};

function viewAllColoredCells() {
    for (let i = 0; i < cells.length; i++) {
        if (i.x <= 800 && i.y <= 800) {
            return;
        } else {
            let imageData = ctx.getImageData(100, 100, 1, 1);
            let data = imageData.data;
            // console.log(data[0]);
            // console.log(data[1]);
            // console.log(data[2]);
            // console.log(data[3]);
            // console.log(data[4]);
        }
    };
};

// setInterval(() => {
//     draw();
// }, 1);

draw();