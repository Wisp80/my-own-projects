// const game = {
//     firstCountrySquares: [],
//     randomSqureXBasedOnRandomPoint: 0,
//     randomSqureYBasedOnRandomPoint: 0,

//     drawGrid: function (w, h) {
//         let randomPointX = helper.randomIntFromInterval(1, canvas.width);
//         let randomPointY = helper.randomIntFromInterval(1, canvas.height);

//         for (let i = 0; i < canvas.width; i += w) {
//             for (let j = 0; j < canvas.height; j += h) {
//                 ctx.strokeStyle = '#1b1b1b';
//                 ctx.strokeRect(i, j, w, h);
//                 this.randomSqureXBasedOnRandomPoint = randomPointX;
//                 this.randomSqureYBasedOnRandomPoint = randomPointY;
//             };
//         };

//         this.firstCountrySquares = [this.randomSqureXBasedOnRandomPoint, this.randomSqureYBasedOnRandomPoint];
//     },
// }

// game.drawGrid(40, 40);

let worldBioms = ['Desert', 'Forest', 'Mountains', 'Tundra'];

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

function createCountries() {
    console.log(countries[1].color);

    for (let i = 0; i < countries.length; i++) {
        ctx.fillStyle = countries[i].color;
        ctx.fillRect(20 + 450 * i, 20, 100, 100);
        ctx.font = "40px serif";
        ctx.fillText('Points: ' + countries[i].points, 20 + 450 * i, 170);
        ctx.fillText('Population: ' + countries[i].population, 20 + 450 * i, 220);
        ctx.fillText('Army: ' + countries[i].army, 20 + 450 * i, 270);
    };
};

createCountries();