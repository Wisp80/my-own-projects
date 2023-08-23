const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

window.onload = function () {
    const img = new Image(1500, 900);
    img.src = './src/world-map.png';
    img.onload = function () {
        ctx.drawImage(img, -40, -160)
    };

    let randomCity = cities[Math.floor(Math.random() * cities.length)];
    document.getElementsByClassName('city')[0].innerText = randomCity.cityName;
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
    drawCircles(e.clientX - bounding.left, e.clientY - bounding.top)
});

/*-------------------------------------------------------------------------------------------------------------*/

function drawCircles(x, y) {
    ctx.beginPath();
    ctx.fillStyle = '#98cc1f';
    ctx.arc(x, y, 90, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#67ba23';
    ctx.arc(x, y, 60, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#29991d';
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#0c730a';
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
};

/*-------------------------------------------------------------------------------------------------------------*/

let cities = [
    { cityName: 'Lisbon', x: 640, y: 330 },
    { cityName: 'Ottawa', x: 394, y: 265 }
];

