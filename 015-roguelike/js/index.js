const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

let game = {
    tickTimeout: null,
    tickRate: 1000 / 60,

    tick: function () {
        window.clearTimeout(game.tickTimeout);

        prepareData();

        renderRoom();

        checkCollision();

        game.tickTimeout = window.setTimeout('game.tick()', game.tickRate);
    }
};

/*-------------------------------------------------------------------------------------------------------------*/

function prepareData() {
    controls.initializeWatchPlayerControls();
    controls.updatePlayerControls();
};

function renderRoom() {
    ctx.fillStyle = roomData.roomBackgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    render.renderWalls();
    render.renderRocks();    
    render.renderFlames();
    render.renderPlayer();
    render.renderBushes();
};

/*-------------------------------------------------------------------------------------------------------------*/

let render = {
    renderWalls: function () {
        for (let wall in roomData.walls) {
            ctx.fillStyle = roomData.roomWallColor;
            ctx.fillRect(roomData.walls[wall].x, roomData.walls[wall].y, roomData.walls[wall].width, roomData.walls[wall].height);
        };
    },

    renderRocks: function () {
        for (let rock in roomData.rocks) {
            ctx.fillStyle = roomData.rocks[rock].color;
            ctx.fillRect(roomData.rocks[rock].x, roomData.rocks[rock].y, roomData.rocks[rock].width, roomData.rocks[rock].height);
        };
    },

    renderBushes: function () {
        for (let bush in roomData.bushes) {
            ctx.fillStyle = roomData.bushes[bush].color;
            ctx.fillRect(roomData.bushes[bush].x, roomData.bushes[bush].y, roomData.bushes[bush].width, roomData.bushes[bush].height);
        };
    },

    renderFlames: function () {
        for (let flame in roomData.flames) {
            ctx.fillStyle = roomData.flames[flame].color;
            ctx.fillRect(roomData.flames[flame].x, roomData.flames[flame].y, roomData.flames[flame].width, roomData.flames[flame].height);
        };
    },

    renderPlayer: function () {
        ctx.fillStyle = playerData.color;
        ctx.fillRect(playerData.x, playerData.y, playerData.width, playerData.height)
    },
};

/*-------------------------------------------------------------------------------------------------------------*/

let roomData = {
    roomX: 0,
    roomY: 0,
    roomHeight: canvas.height,
    roomWidth: canvas.width,
    roomBackgroundColor: '#d0bbaf',
    roomWallColor: '#AB8772',

    walls: {
        wall01: {
            x: 0,
            y: 0,
            width: canvas.width,
            height: 50
        },
        wall02: {
            x: canvas.width - 50,
            y: 50,
            width: 50,
            height: canvas.height - 50
        },
        wall03: {
            x: (canvas.width / 2) + 100,
            y: canvas.height - 50,
            width: (canvas.width / 2) - 150,
            height: 50
        },
        wall04: {
            x: 0,
            y: canvas.height - 50,
            width: (canvas.width / 2) - 100,
            height: 50
        },
        wall05: {
            x: 0,
            y: 50,
            width: 50,
            height: canvas.height - 60
        },
    },

    rocks: {
        rock01: {
            x: 700,
            y: 50,
            width: 100,
            height: 100,
            color: '#807171'
        }
    },

    bushes: {
        bush01: {
            x: 1000,
            y: 130,
            width: 100,
            height: 200,
            color: '#33bd4a'
        }
    },

    flames: {
        flame01: {
            x: 350,
            y: 600,
            width: 100,
            height: 100,
            color: '#D48830'
        }
    }
};

let playerData = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 40,
    height: 60,
    color: '#7F00FF',
    speed: 6
};

/*-------------------------------------------------------------------------------------------------------------*/

let controls = {
    heldDownKeysByPlayer: {},

    move: function (keyCode) {
        let nextY = playerData.y;
        let nextX = playerData.x;

        if (keyCode === '87') {
            nextY += -1 * playerData.speed;
        } else if (keyCode === '83') {
            nextY += playerData.speed;
        } else if (keyCode === '65') {
            nextX += -1 * playerData.speed;
        } else if (keyCode === '68') {
            nextX += playerData.speed;
        };

        playerData.y = nextY;
        playerData.x = nextX;
    },

    updatePlayerControls: function () {
        for (let keyCode in this.heldDownKeysByPlayer) {
            controls.move(keyCode);
        };
    },

    initializeWatchPlayerControls: function () {
        window.addEventListener('keydown', () => { this.heldDownKeysByPlayer[event.keyCode] = true; }, false);
        window.addEventListener('keyup', () => { delete this.heldDownKeysByPlayer[event.keyCode]; }, false);
    },
};

/*-------------------------------------------------------------------------------------------------------------*/

function checkCollision() {
    let playerTopWall = playerData.x + playerData.width;
    let playerBottomWall = playerData.x + playerData.width + playerData.height;
    let playerRightWall = playerData.y + playerData.width - playerData.height;
    let playerLeftWall = playerData.x - playerData.height;
    
    // ctx.beginPath();
    // ctx. fillStyle = 'red';
    // ctx.fillRect(playerTopWall, 450, 20, 20);
};

game.tick();