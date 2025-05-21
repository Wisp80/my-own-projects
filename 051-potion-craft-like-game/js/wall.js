let realWalls = {
    wallsRoom00: [
        
    ]
}

let walls = realWalls.wallsRoom00;

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
        this.drawWallsCoordinates();
        this.drawWallsID();
    };
};