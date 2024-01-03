const game = {
    firstCountrySquares: [],
    randomSqureXBasedOnRandomPoint: 0,
    randomSqureYBasedOnRandomPoint: 0,

    worldBioms: ['Desert', 'Forest', 'Mountains', 'Tundra'],
    worldEvent: ['War', 'Alliance', 'Civil war', 'Unification'],

    drawGrid: function (w, h) {
        let randomPointX = helper.randomIntFromInterval(1, canvas.width);
        let randomPointY = helper.randomIntFromInterval(1, canvas.height);

        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                ctx.strokeStyle = '#1b1b1b';
                ctx.strokeRect(i, j, w, h);
                this.randomSqureXBasedOnRandomPoint = randomPointX;
                this.randomSqureYBasedOnRandomPoint = randomPointY;
                // ctx.strokeRect(randomPointX, randomPointY, w, h);

                if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(i + w, i, j + h, j, randomPointX, randomPointY)) {
                    let randomTopLeftSquarePointX = i;
                    let randomTopLeftSquarePointY = j;
                    console.log(randomTopLeftSquarePointX);
                    console.log(randomTopLeftSquarePointY);
                    ctx.fillStyle = "green";
                    ctx.fillRect(randomTopLeftSquarePointX, randomTopLeftSquarePointY, 22, 22);
                    ctx.fillRect(randomTopLeftSquarePointX, randomTopLeftSquarePointY, 22, 22);
                };
            };
        };

        this.firstCountrySquares = [this.randomSqureXBasedOnRandomPoint, this.randomSqureYBasedOnRandomPoint];
    },
};

game.drawGrid(22, 22);

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