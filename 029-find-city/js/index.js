const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

window.onload = function () {
    const img = new Image(1500, 900);
    img.src = './src/world-map.png';
    img.onload = function () {
        ctx.drawImage(img, -40, -160)
    };
};

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
        let letters = '01234567109ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    },
};

/*-------------------------------------------------------------------------------------------------------------*/

const mousePose = {
    currentMouseX: 0,
    currentMouseY: 0
};

window.addEventListener('mousemove', (e) => {
    let bounding = canvas.getBoundingClientRect();
    mousePose.currentMouseX = e.clientX - bounding.left;
    mousePose.currentMouseY = e.clientY - bounding.top;
});

window.addEventListener('click', (e) => {
    let bounding = canvas.getBoundingClientRect();
    drawSquares(e.clientX - bounding.left, e.clientY - bounding.top)
});

/*-------------------------------------------------------------------------------------------------------------*/

function a() {
    for (let i = 0; i < canvas.width; i += 10) {
        for (let j = 0; j < canvas.height; j += 10) {
            ctx.strokeStyle = '#1b1b1b';
            ctx.strokeRect(i, j, 10, 10);
        };
    };
};

a();

function drawSquares(x, y) {
    for (let i = 0; i < canvas.width; i += 10) {
        for (let j = 0; j < canvas.height; j += 10) {
            if (helper.checkIntersectionBetweenNotRotatedRectangleAndPoint(
                i + 10, i,
                j + 10, j,
                x, y,
            )) {
                ctx.fillStyle = "green";
                ctx.strokeRect(i, j, 10, 10);
                ctx.fillRect(i, j, 10, 10);
            };

            ctx.strokeStyle = '#1b1b1b';
            ctx.strokeRect(i, j, 10, 10);
        };
    };
};

/*-------------------------------------------------------------------------------------------------------------*/

let cities = [
    { cityName: 'Lisbon', x: 640, y: 330 },
    { cityName: 'Ottawa', x: 394, y: 265 }
];

let randomCity = cities[Math.floor(Math.random() * cities.length)];
document.getElementsByClassName('city')[0].innerText = randomCity.cityName;