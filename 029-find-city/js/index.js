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

function drawSquares(x, y) {
    for (let i = 0; i < canvas.width; i += 15) {
        for (let j = 0; j < canvas.height; j += 15) {
            ctx.beginPath();
            ctx.strokeStyle = '#1b1b1b';
            ctx.strokeRect(i, j, 15, 15);
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