const game = {
    randomSqureXBasedOnRandomPoint: 0,
    randomSqureYBasedOnRandomPoint: 0,
    hasYellowTileAppeared: false,
    tilesPassedSinceYellowTileAppeared: 0,
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

    worldTilesColors: ['green', 'blue'],
    worldBioms: ['Desert', 'Forest', 'Mountains', 'Tundra'],
    worldEvents: ['War', 'Alliance', 'Civil war', 'Unification'],

    drawGrid: function (w, h) {
        let randomPointX = this.randomSqureXBasedOnRandomPoints[0];
        let randomPointY = this.randomSqureYBasedOnRandomPoints[0];

        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                // ctx.strokeStyle = '#1b1b1b';
                // ctx.strokeRect(i, j, w, h);

                // if (this.hasYellowTileAppeared === true && this.tilesPassedSinceYellowTileAppeared < 10) {
                //     this.tilesPassedSinceYellowTileAppeared++;
                //     continue;
                // };

                ctx.fillStyle = helper.chooseRandomString(this.worldTilesColors);
                ctx.fillRect(i, j, w, h);

                if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + h, j, randomPointX, randomPointY)) {
                    this.hasYellowTileAppeared = true;
                    console.log('here');
                    let randomTopLeftSquarePointX = i;
                    let randomTopLeftSquarePointY = j;
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(randomTopLeftSquarePointX, randomTopLeftSquarePointY, w * 10, h * 10);
                };
            };
        };
    },
};

game.drawGrid(20, 20);

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

// let countries = [
//     new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
//     new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
//     new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
//     new Country(100, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
// ];

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