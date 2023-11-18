let realPortals = {
    portalsRoom00: [
        new Portal(
            1390, 630,
            100, 130,
            helper.getRandomColor(), 0, '00',
            '01', '01', 0, '01', '01',
            './src/images/portal.png'
        ),

        // new Portal(
        //     256, 52,
        //     100, 130,
        //     helper.getRandomColor(), 0, '02',
        //     '02', '02', 0, '02', '02',
        //     './src/images/portal.png'
        // )
    ],

    portalsRoom01: [
        new Portal(
            56, 52,
            100, 130,
            helper.getRandomColor(), 0, '01',
            '00', '00', 0, '00', '00',
            './src/images/portal.png'
        ),

        new Portal(
            1390, 660,
            100, 130,
            helper.getRandomColor(), 1, '01',
            '02', '02', 0, '02', '02',
            './src/images/portal.png'
        ),
    ],

    portalsRoom02: [
        new Portal(
            56, 355,
            100, 130,
            helper.getRandomColor(), 0, '02',
            '01', '01', 1, '01', '01',
            './src/images/portal.png'
        )
    ]
};

let portals = realPortals.portalsRoom02;

function Portal(
    x, y,
    width, height,
    color, id, room,
    destinationWalls, destinationPortals, destinationPortalID, destinationMovableWalls, destinationNPCs,
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
    this.destinationNPCs = destinationNPCs;
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