const game = {
    randomSqureXBasedOnRandomPoint: 0,
    randomSqureYBasedOnRandomPoint: 0,
    coordinates: [0, 0, 0, 0],

    randomSqureXBasedOnRandomPoints: [
        helper.randomIntFromInterval(1, canvas.width),
        helper.randomIntFromInterval(1, canvas.width),
        helper.randomIntFromInterval(1, canvas.width)
    ],

    randomSqureYBasedOnRandomPoints: [
        helper.randomIntFromInterval(1, canvas.height),
        helper.randomIntFromInterval(1, canvas.height),
        helper.randomIntFromInterval(1, canvas.height)
    ],

    worldBioms: ['Desert', 'Forest', 'Mountains', 'Tundra'],
    worldEvent: ['War', 'Alliance', 'Civil war', 'Unification'],

    drawGrid: function (w, h) {
        let randomPointX = this.randomSqureXBasedOnRandomPoints[0];
        let randomPointY = this.randomSqureYBasedOnRandomPoints[0];

        let randomPointXTwo = this.randomSqureXBasedOnRandomPoints[1];
        let randomPointYTwo = this.randomSqureYBasedOnRandomPoints[1];


        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                ctx.strokeStyle = '#1b1b1b';
                ctx.strokeRect(i, j, w, h);



                if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + h, j, randomPointX, randomPointY)) {
                    let randomTopLeftSquarePointX = i;
                    let randomTopLeftSquarePointY = j;
                    this.coordinates[0] = i;
                    this.coordinates[1] = j;
                    // console.log(randomTopLeftSquarePointX);
                    // console.log(randomTopLeftSquarePointY);
                    ctx.fillStyle = "blue";
                    ctx.fillRect(randomTopLeftSquarePointX, randomTopLeftSquarePointY, 40, 40);
                };

                if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + h, j, randomPointXTwo, randomPointYTwo)) {
                    let randomTopLeftSquarePointX = i;
                    let randomTopLeftSquarePointY = j;
                    this.coordinates[2] = i;
                    this.coordinates[3] = j;

                    // console.log(randomTopLeftSquarePointX);
                    // console.log(randomTopLeftSquarePointY);
                    ctx.fillStyle = "blue";
                    ctx.fillRect(randomTopLeftSquarePointX, randomTopLeftSquarePointY, 40, 40);
                    console.log(this.coordinates);
                };


            };
        };

        ctx.fillStyle = "blue";

        ctx.beginPath();
        // ctx.moveTo(this.coordinates[0], this.coordinates[1]);
        // ctx.lineTo(this.coordinates[2], this.coordinates[3]);
        // ctx.lineTo(this.coordinates[2] + w, this.coordinates[3]);
        // ctx.lineTo(this.coordinates[0] + w, this.coordinates[1]);
        // ctx.lineTo(this.coordinates[0], this.coordinates[1]);
        // ctx.stroke();

        // ctx.moveTo(this.coordinates[0], this.coordinates[1]);
        // ctx.lineTo(this.coordinates[0], this.coordinates[1] + h);
        // ctx.lineTo(this.coordinates[2], this.coordinates[3] + h);
        // ctx.lineTo(this.coordinates[2], this.coordinates[3]);
        // ctx.lineTo(this.coordinates[0], this.coordinates[1]);
        // ctx.stroke();

        // ctx.moveTo(this.coordinates[0] + w, this.coordinates[1] + h);
        // ctx.lineTo(this.coordinates[0], this.coordinates[1] + h);
        // ctx.lineTo(this.coordinates[2], this.coordinates[3] + h);
        // ctx.lineTo(this.coordinates[2] + w, this.coordinates[3] + h);
        // ctx.lineTo(this.coordinates[0] + w, this.coordinates[1] + h);
        // ctx.stroke();

        // ctx.moveTo(this.coordinates[0] + w, this.coordinates[1]);
        // ctx.lineTo(this.coordinates[0] + w, this.coordinates[1] + h);
        // ctx.lineTo(this.coordinates[2] + w, this.coordinates[3] + h);
        // ctx.lineTo(this.coordinates[2] + w, this.coordinates[3]);
        // ctx.lineTo(this.coordinates[0] + w, this.coordinates[1]);
        // ctx.stroke();

        ctx.moveTo(this.coordinates[0], this.coordinates[1]);
        ctx.lineTo(this.coordinates[0], this.coordinates[1] + h);
        ctx.lineTo(this.coordinates[2], this.coordinates[3] + h);
        ctx.lineTo(this.coordinates[2] + w, this.coordinates[3] + h);
        ctx.lineTo(this.coordinates[0], this.coordinates[1] + h);
        ctx.lineTo(this.coordinates[0], this.coordinates[1]);
        ctx.stroke();

        ctx.moveTo(this.coordinates[0], this.coordinates[1]);
        ctx.lineTo(this.coordinates[0], this.coordinates[1] + h);
        ctx.lineTo(this.coordinates[2], this.coordinates[3] + h);
        ctx.lineTo(this.coordinates[2] + w, this.coordinates[3] + h);
        ctx.lineTo(this.coordinates[0], this.coordinates[1] + h);
        ctx.lineTo(this.coordinates[0], this.coordinates[1]);
        ctx.stroke();

        ctx.fill();
        ctx.closePath();
    },
};

game.drawGrid(40, 40);

//-------------------------------------------------------------------------------------------------------------------//

function Country(
    points, color, population
) {
    this.points = points;
    this.color = color;
    this.population = population;
    this.army = Math.floor(population * 0.71);

    this.func = function () {

    };
};

let countries = [
    new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
    new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
    new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
    new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
];

// function createCountries() {
//     for (let i = 0; i < countries.length; i++) {
//         ctx.fillStyle = countries[i].color;
//         ctx.fillRect(20 + 450 * i, 20, 100, 100);
//         ctx.font = "40px serif";
//         ctx.fillText('Points: ' + countries[i].points, 20 + 450 * i, 170);
//         ctx.fillText('Population: ' + countries[i].population, 20 + 450 * i, 220);
//         ctx.fillText('Army: ' + countries[i].army, 20 + 450 * i, 270);
//     };
// };

// createCountries();