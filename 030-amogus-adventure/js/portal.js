let realPortals = {
    portalsRoom00: [
        new Portal(
            1390, 630,
            100, 130,
            helper.getRandomColor(), 0, '00',
            '01', '01', 0, '01',
            './src/images/portal.png'
        )
    ],

    portalsRoom01: [
        new Portal(
            56, 52,
            100, 130,
            helper.getRandomColor(), 0, '01',
            '00', '00', 0, '00',
            './src/images/portal.png'
        )
    ]
};

let portals = realPortals.portalsRoom00;

function Portal(
    x, y,
    width, height,
    color, id, room,
    destinationWalls, destinationPortals, destinationPortalID, destinationMovableWalls,
    src
) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.room = room;
    this.destinationWalls = destinationWalls;
    this.destinationPortals = destinationPortals;
    this.destinationPortalID = destinationPortalID;
    this.destinationMovableWalls = destinationMovableWalls;
    this.src = src;

    this.drawPortalCoordinates = function () {
        ctx.font = '10px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.x + ':' + this.y, this.x, this.y + 15);
        ctx.fillText((this.x + this.width) + ':' + this.y, this.x + this.width, this.y + 30);
        ctx.fillText(this.x + ':' + (this.y + this.height), this.x, this.y + this.height);
        ctx.fillText((this.x + this.width) + ':' + (this.y + this.height), this.x + this.width, this.y + this.height - 15);
    };

    this.drawPortalID = function () {
        ctx.font = '11px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.id, this.x + this.width / 2, this.y + this.height / 2);
    };

    this.draw = function () {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        const imagePortal = new Image(100, 130);
        imagePortal.src = this.src;
        ctx.drawImage(imagePortal, this.x, this.y);

        // this.drawPortalCoordinates();
        // this.drawPortalID();
    };
};

game.tick();

setInterval(() => {
    for (let i = 0; i < moveableWalls.length; i++) {
        moveableWalls[i].move();
    };
}, 1000);