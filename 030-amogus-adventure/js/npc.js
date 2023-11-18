let realNPCs = {
    NPCsRoom00: [
        new NPC(860, 440, 68, 68, helper.getRandomColor(), 0, 2, './src/images/patrick.png', 'Ya look like Sponge Bob...', 140, 12)
    ],

    NPCsRoom01: [
        // new NPC(860, 440, 68, 68, helper.getRandomColor(), 0, 2, './src/images/patrick.png', 'Ya look like Sponge Bob...', 140, 12)
    ],

    NPCsRoom02: [
        // new NPC(860, 440, 68, 68, helper.getRandomColor(), 0, 2, './src/images/patrick.png', 'Ya look like Sponge Bob...', 140, 12)
    ]
};

let NPCs = realNPCs.NPCsRoom02;

function NPC(
    x, y,
    width, height,
    color, id,
    type, src,
    message,
    xMessageShift, yMessageShift
) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.type = type;
    this.src = src;
    this.message = message;
    this.xMessageShift = xMessageShift;
    this.yMessageShift = yMessageShift;

    this.drawNPCsCoordinates = function () {
        ctx.font = '10px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.x + ':' + this.y, this.x, this.y + 15);
        ctx.fillText((this.x + this.width) + ':' + this.y, this.x + this.width, this.y + 30);
        ctx.fillText(this.x + ':' + (this.y + this.height), this.x, this.y + this.height);
        ctx.fillText((this.x + this.width) + ':' + (this.y + this.height), this.x + this.width, this.y + this.height - 15);
    };

    this.drawNPCsMessage = function () {
        ctx.font = '24px serif';
        ctx.fillStyle = 'white';
        if (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
            players.playerOne.x + players.playerOne.width, this.x,
            players.playerOne.x, this.x + this.width,
            players.playerOne.y + players.playerOne.height, this.y,
            players.playerOne.y, this.y + this.height
        )) {
            if (controls.isEKeyPressed) {
                ctx.fillText(this.message, this.x - xMessageShift, this.y - yMessageShift);
            }
        };

    };

    this.drawNPCsID = function () {
        ctx.font = '11px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.id, this.x + this.width / 2, this.y + this.height / 2);
    };

    this.draw = function () {
        const image = new Image(68, 68);
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y);

        // this.drawPortalCoordinates();
        // this.drawPortalID();
    };
};