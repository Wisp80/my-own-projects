const game = {
    worldEvents: ['War', 'Alliance', 'Civil war', 'Unification'],

    drawGrid: function (w, h) {
        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                ctx.strokeStyle = 'black'
                ctx.strokeRect(i, j, w, h);

                this.drawCountry([
                    [0, 0, w * 24, h * 18],
                    [0, 360, w * 20, h * 13],
                    [0, 620, w * 13, h * 13],
                ], 'red');

                this.drawCountry([
                    [480, 140, w * 11, h * 7],
                    [700, 180, w * 3, h * 3],
                ], 'blue');
            };
        };
    },

    drawCountry: function (coordinates, color) {
        for (let i = 0; i < coordinates.length; i++) {
            ctx.fillStyle = color;
            ctx.fillRect(coordinates[i][0], coordinates[i][1], coordinates[i][2], coordinates[i][3]);
        };
    },
};

game.drawGrid(20, 20);

//-------------------------------------------------------------------------------------------------------------------//

const mousePose = {
    currentMouseX: 0,
    currentMouseY: 0
};

let isWindowThere = false;

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;
});

window.addEventListener('click', (e) => {
    let bounding = canvas.getBoundingClientRect();

    let imageData = ctx.getImageData(mousePose.currentMouseX, mousePose.currentMouseY, 1, 1);
    let pixelData = imageData.data;

    if (isWindowThere === false) {
        ctx.fillStyle = 'rgb(12, 14, 27)'
        ctx.fillRect(mousePose.currentMouseX, mousePose.currentMouseY, 200, 240);
        isWindowThere = true;
    };

    // if (pixelData[0] === 255 && pixelData[1] === 0 && pixelData[2] === 0) {
    //     console.log('this is red!!!!');
    // };

    // console.log(`x: ${mousePose.currentMouseX}`);
    // console.log(`y: ${mousePose.currentMouseY}`);
    // console.log(bounding);
});

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