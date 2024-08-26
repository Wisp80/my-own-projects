const game = {
    cellWidth: 20,
    cellHeight: 20,

    drawGrid: function (w, h) {
        for (let i = 0; i < canvas.width; i += w) {
            for (let j = 0; j < canvas.height; j += h) {
                ctx.strokeStyle = 'black'
                ctx.strokeRect(i, j, w, h);

                // this.drawCountry([
                //     [0, 0, w * 24, h * 18],
                //     [0, 360, w * 20, h * 13],
                //     [0, 620, w * 13, h * 13],
                // ], 'red');

                // this.drawCountry([
                //     [480, 140, w * 11, h * 7],
                //     [700, 180, w * 3, h * 3],
                // ], 'blue');
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

game.drawGrid(game.cellWidth, game.cellHeight);

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
        ctx.fillStyle = 'rgb(12, 14, 27)';
        ctx.fillRect(mousePose.currentMouseX, mousePose.currentMouseY, 200, 202);

        ctx.fillStyle = 'rgb(100, 100, 100)';
        ctx.fillRect(mousePose.currentMouseX + 2, mousePose.currentMouseY + 2, 196, 48);
        ctx.fillRect(mousePose.currentMouseX + 2, mousePose.currentMouseY + 52, 196, 48);
        ctx.fillRect(mousePose.currentMouseX + 2, mousePose.currentMouseY + 102, 196, 48);
        ctx.fillRect(mousePose.currentMouseX + 2, mousePose.currentMouseY + 152, 196, 48);

        ctx.fillStyle = 'rgb(194, 194, 194)';
        ctx.font = "40px serif";
        ctx.fillText('Go to war', mousePose.currentMouseX + 8, mousePose.currentMouseY + 38);
        ctx.fillText('Alliance', mousePose.currentMouseX + 8, mousePose.currentMouseY + 88);
        ctx.fillText('Civil war', mousePose.currentMouseX + 8, mousePose.currentMouseY + 138);
        ctx.fillText('Unification', mousePose.currentMouseX + 8, mousePose.currentMouseY + 188);

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

let worldEvents = {
    eventsList: ['War', 'Alliance', 'Civil war', 'Unification'],

    war: function() {

    }
};

//-------------------------------------------------------------------------------------------------------------------//

class Country {
    constructor(coordinates, points, color, population) {
        this.coordinates = coordinates
        this.points = points;
        this.color = color;
        this.population = population;
    }

    drawCountry(coordinates, color) {
        for (let i = 0; i < coordinates.length; i++) {
            ctx.fillStyle = color;
            ctx.fillRect(coordinates[i][0], coordinates[i][1], coordinates[i][2], coordinates[i][3]);
        };
    }

    draw() {
        this.drawCountry(this.coordinates, this.color);
    }
};

let countries = [
    new Country([
        [0, 0, game.cellWidth * 24, game.cellHeight * 18],
        [0, 360, game.cellWidth * 20, game.cellHeight * 13],
        [0, 620, game.cellWidth * 13, game.cellHeight * 13],
    ], 0, helper.getRandomColor(), helper.randomIntFromInterval(100000, 500000000)),
];

for (let i = 0; i < countries.length; i++) {
    countries[i].draw();
};

//-------------------------------------------------------------------------------------------------------------------//