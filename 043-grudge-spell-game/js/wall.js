const walls = [
    new Wall(400, 50, 60, 800, helper.getRandomColor(), 0, 2),
    new Wall(200, 150, 40, 40, helper.getRandomColor(), 1, 2),
    new Wall(300, 550, 1200, 300, helper.getRandomColor(), 2, 2),
    new Wall(350, 150, 1150, 55, helper.getRandomColor(), 3, 2),
    new Wall(1400, 100, 20, 500, helper.getRandomColor(), 4, 2),
    new Wall(530, 250, 20, 20, helper.getRandomColor(), 5, 2),
    new Wall(730, 350, 20, 20, helper.getRandomColor(), 6, 2),
    new Wall(860, 390, 20, 20, helper.getRandomColor(), 7, 2),
    new Wall(870, 310, 20, 20, helper.getRandomColor(), 8, 2),
    new Wall(900, 500, 20, 20, helper.getRandomColor(), 9, 2),
    new Wall(1100, 368, 20, 20, helper.getRandomColor(), 10, 2),
    new Wall(1300, 350, 20, 20, helper.getRandomColor(), 11, 2),
    new Wall(1300, 500, 20, 20, helper.getRandomColor(), 12, 2),
    new Wall(1200, 240, 20, 20, helper.getRandomColor(), 13, 2),
];

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
        if (this.type === 1) {
            ctx.fillStyle = 'white';
        } else if (this.type === 2) {
            ctx.fillStyle = this.color;
        };

        ctx.fillRect(this.x, this.y, this.width, this.height);

        // this.drawWallsCoordinates();
        this.drawWallsID();
    };
};