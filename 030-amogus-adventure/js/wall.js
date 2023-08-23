let realWalls = {
    wallsRoom00: [
        new Wall(0, 0, 40, canvas.height - 40, helper.getRandomColor(), 0, 2),
        new Wall(40, 0, canvas.width - 40, 40, helper.getRandomColor(), 1, 2),
        new Wall(canvas.width - 40, 40, 40, canvas.height - 40, helper.getRandomColor(), 2, 2),
        new Wall(0, canvas.height - 40, canvas.width - 40, 40, helper.getRandomColor(), 3, 2),

        new Wall(40, 184, 1420, 40, helper.getRandomColor(), 4, 2),
        new Wall(1420, 184, 40, 226, helper.getRandomColor(), 5, 2),
        new Wall(710, 370, 610, 40, helper.getRandomColor(), 6, 2),
        new Wall(290, 370, 300, 40, helper.getRandomColor(), 7, 2),
        new Wall(290, 286, 40, 245, helper.getRandomColor(), 8, 2),
        new Wall(590, 370, 40, 245, helper.getRandomColor(), 9, 2),
        new Wall(630, 531, 330, 40, helper.getRandomColor(), 10, 2),
        new Wall(960, 410, 40, 161, helper.getRandomColor(), 11, 2),
        new Wall(120, 306, 40, 449, helper.getRandomColor(), 12, 2),
        new Wall(40, 755, 300, 40, helper.getRandomColor(), 13, 2),
        new Wall(590, 715, 40, 145, helper.getRandomColor(), 14, 2),
        new Wall(630, 761, 430, 40, helper.getRandomColor(), 15, 2),
        new Wall(960, 630, 40, 131, helper.getRandomColor(), 16, 2),
        new Wall(710, 630, 290, 40, helper.getRandomColor(), 17, 2),
        new Wall(425, 477, 40, 245, helper.getRandomColor(), 18, 2),
        new Wall(1100, 410, 40, 290, helper.getRandomColor(), 19, 2),
        new Wall(1140, 513, 320, 40, helper.getRandomColor(), 20, 2),
        new Wall(1280, 553, 40, 181, helper.getRandomColor(), 21, 2),
        new Wall(1140, 660, 90, 40, helper.getRandomColor(), 22, 2),
    ],

    wallsRoom01: [
        new Wall(0, 0, 40, canvas.height - 40, helper.getRandomColor(), 0, 2),
        new Wall(40, 0, canvas.width - 40, 40, helper.getRandomColor(), 1, 2),
        new Wall(canvas.width - 40, 40, 40, canvas.height - 40, helper.getRandomColor(), 2, 2),
        new Wall(0, canvas.height - 40, canvas.width - 40, 40, helper.getRandomColor(), 3, 2),

        new Wall(40, 200, 720, 40, helper.getRandomColor(), 4, 2),
        new Wall(850, 240, 40, 104, helper.getRandomColor(), 5, 2),
        new Wall(1430, 240, 40, 104, helper.getRandomColor(), 6, 2),
        new Wall(350, 344, 40, 126, helper.getRandomColor(), 7, 2),
        new Wall(40, 344, 310, 40, helper.getRandomColor(), 8, 2),
        new Wall(490, 344, 40, 126, helper.getRandomColor(), 9, 2),
        new Wall(530, 344, 770, 40, helper.getRandomColor(), 10, 2),
        new Wall(890, 468, 190, 40, helper.getRandomColor(), 11, 2),
        new Wall(1120, 468, 180, 40, helper.getRandomColor(), 12, 2),
        new Wall(850, 592, 450, 40, helper.getRandomColor(), 13, 2),
        new Wall(1340, 592, 220, 40, helper.getRandomColor(), 14, 2),
    ]
};

let walls = realWalls.wallsRoom01;

function Wall(
    x, y,
    width, height,
    color, id,
    type
) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.type = type;

    this.drawWallsCoordinates = function () {
        ctx.font = '10px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.x + ':' + this.y, this.x, this.y + 15);
        ctx.fillText((this.x + this.width) + ':' + this.y, this.x + this.width, this.y + 30);
        ctx.fillText(this.x + ':' + (this.y + this.height), this.x, this.y + this.height);
        ctx.fillText((this.x + this.width) + ':' + (this.y + this.height), this.x + this.width, this.y + this.height - 15);
    };

    this.drawWallsID = function () {
        ctx.font = '11px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.id, this.x + this.width / 2, this.y + this.height / 2);
    };

    this.draw = function () {
        if (this.type === 1) { ctx.fillStyle = 'white' }
        else if (this.type === 2) { ctx.fillStyle = this.color };

        ctx.fillRect(this.x, this.y, this.width, this.height);
        // this.drawWallsCoordinates();
        // this.drawWallsID();
    };
};