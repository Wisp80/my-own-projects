const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

function GetRandomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/*-------------------------------------------------------------------------------------------------------------*/

let gameValues = {
    health: 3,
    keys: 1,
    coins: 1,
    countOfItems: 0
};

/*-------------------------------------------------------------------------------------------------------------*/

function drawCountOfSomethingForUi() {
    ctx.font = '100px calibri';
    ctx.fillText(gameValues.coins, 630, 850);
    ctx.fillText(gameValues.keys, 900, 850);
};

function makeImage(src, imageX, imageY) {
    var img = new Image();
    img.src = src;
    img.onload = function () {
        ctx.drawImage(img, imageX, imageY)
    };
};

function drawUi() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 750, 1900, 200);
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 750, 555, 200);
    ctx.strokeRect(555, 750, 275, 200);
    ctx.strokeRect(830, 750, 275, 200);
    ctx.strokeRect(1105, 750, 650, 200);

    ctx.roundRect(200, 100, 1500, 550, [40]);
    ctx.stroke();

    makeImage('./src/heart3.png', 5, 775);
    makeImage('./src/heart3.png', 95, 775);
    makeImage('./src/heart3.png', 184, 775);

    makeImage('./src/coin.png', 720, 775);

    makeImage('./src/key.png', 1000, 775);

    drawCountOfSomethingForUi();
};

drawUi();

/*-------------------------------------------------------------------------------------------------------------*/

let countOfRooms = GetRandomNumberFromInterval(2, 3);
let countOfEnemies = GetRandomNumberFromInterval(1, 5);

let messages = {
    startMessage: 'Вы очутились в какой-то комнате с серыми стенами. Перед вами ' + countOfRooms + ' двери. В какую из них вы пойдете?',
    simpleRoomMessage: 'Вы зашли в комнату, там оказалось ' + countOfEnemies + ' врагов. Вы пойдете назад или будете атаковать?'
};

function createButton(x, y, text) {
    var tag = document.createElement('button');
    tag.innerHTML = text;
    tag.style.position = 'absolute';
    tag.style.left = x + 'px';
    tag.style.top = y + 'px';
    tag.style.width = 70 + 'px';
    tag.style.height = 45 + 'px';
    tag.style.fontSize = 30 + 'px';
    tag.addEventListener('click', wwe)
    my_div = document.getElementById('number-button');
    document.body.insertBefore(tag, my_div);
};

function wwe() {
    ctx.font = '30px calibri';
    ctx.fillText(messages.simpleRoomMessage, 240, 170);
};

function drawText() {    
    ctx.font = '30px calibri';
    ctx.fillText(messages.startMessage, 240, 170);

    for (let i = 0; i < countOfRooms; i++) {
        createButton(440 * i + 300, 240, i + 1);
    };
};

drawText();