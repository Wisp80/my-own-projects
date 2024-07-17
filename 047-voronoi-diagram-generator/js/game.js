const game = {
    worldEvents: ['War', 'Alliance', 'Civil war', 'Unification'],

    drawGrid: function (w, h) {
        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                ctx.strokeStyle = 'black'
                ctx.strokeRect(i, j, w, h);

                ctx.fillStyle = 'blue'
                ctx.fillRect(i, j, w, h);

                ctx.fillStyle = 'green'
                ctx.fillRect(i * 8, j * 9, w, h);

                
            };
        };
    },
};

game.drawGrid(20, 20);

//-------------------------------------------------------------------------------------------------------------------//

// function Country(
//     points, color, population
// ) {
//     this.points = points;
//     this.color = color;
//     this.population = population;
//     this.army = Math.floor(population * 0.71);

//     this.func = function () {

//     };
// };

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