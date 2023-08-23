let realMoveableWalls = {
    moveableWallsRoom00: [
        
    ],

    moveableWallsRoom01: [
        new MoveableWall(250, 40, 40, 40, helper.getRandomColor(), 0, null, 160, 3),
        new MoveableWall(350, 160, 40, 40, helper.getRandomColor(), 1, null, 40, 4),
        new MoveableWall(450, 40, 40, 40, helper.getRandomColor(), 2, null, 160, 5),
        new MoveableWall(550, 160, 40, 40, helper.getRandomColor(), 3, null, 40, 4),
        new MoveableWall(650, 40, 40, 40, helper.getRandomColor(), 4, null, 160, 3),

        new MoveableWall(760, 200, 710, 40, helper.getRandomColor(), 5, 850, null, 3),
        new MoveableWall(40, 470, 350, 40, helper.getRandomColor(), 6, 180, null, 3),

        new MoveableWall(850, 384, 40, 104, helper.getRandomColor(), 7, null, 488, 3),
        new MoveableWall(1080, 488, 40, 104, helper.getRandomColor(), 8, null, 384, 5),
        new MoveableWall(1300, 344, 40, 288, helper.getRandomColor(), 9, null, 572, 8),

        new MoveableWall(850, 632, 450, 40, helper.getRandomColor(), 10, null, 820, 1),

        new MoveableWall(40, 720, 160, 40, helper.getRandomColor(), 11, 140, 620, 4),
        new MoveableWall(160, 760, 40, 100, helper.getRandomColor(), 12, 260, 660, 4),

        new MoveableWall(200, 720, 160, 40, helper.getRandomColor(), 13, 300, 620, 4),
        new MoveableWall(320, 760, 40, 100, helper.getRandomColor(), 14, 420, 560, 4),
    ]
};

let moveableWalls = realMoveableWalls.moveableWallsRoom01;

function MoveableWall(
    x, y,
    width, height,
    color, id,
    arrivalPointX, arrivalPointY,
    speed
) {
    this.x = x;
    this.y = y;
    this.inititalX = x;
    this.inititalY = y;
    this.isAtInitialPoint = true;
    this.isAtArrivalPoint = false;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.arrivalPointX = arrivalPointX;
    this.arrivalPointY = arrivalPointY;
    this.speed = speed;

    this.move = function () {
        if (this.arrivalPointY === null) {

            if (this.arrivalPointX > this.inititalX) {
                if (this.x >= this.arrivalPointX) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.x <= this.inititalX) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.x += this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.x -= this.speed };

            } else if (this.arrivalPointX < this.inititalX) {
                if (this.x <= this.arrivalPointX) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.x >= this.inititalX) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.x -= this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.x += this.speed };
            };

        } else if (this.arrivalPointX === null) {

            if (this.arrivalPointY > this.inititalY) {
                if (this.y >= this.arrivalPointY) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.y <= this.inititalY) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.y += this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.y -= this.speed };

            } else if (this.arrivalPointY < this.inititalY) {
                if (this.y <= this.arrivalPointY) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.y >= this.inititalY) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.y -= this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.y += this.speed };
            };

        } else {

            if (this.arrivalPointX > this.inititalX) {
                if (this.x >= this.arrivalPointX) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.x <= this.inititalX) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.x += this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.x -= this.speed };

            } else if (this.arrivalPointX < this.inititalX) {
                if (this.x <= this.arrivalPointX) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.x >= this.inititalX) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.x -= this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.x += this.speed };
            };

            if (this.arrivalPointY > this.inititalY) {
                if (this.y >= this.arrivalPointY) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.y <= this.inititalY) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.y += this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.y -= this.speed };

            } else if (this.arrivalPointY < this.inititalY) {
                if (this.y <= this.arrivalPointY) {
                    this.isAtArrivalPoint = true;
                    this.isAtInitialPoint = false;
                };

                if (this.y >= this.inititalY) {
                    this.isAtArrivalPoint = false;
                    this.isAtInitialPoint = true;
                };

                if (this.isAtInitialPoint && !this.isAtArrivalPoint) { this.y -= this.speed };
                if (!this.isAtInitialPoint && this.isAtArrivalPoint) { this.y += this.speed };
            };

        };
    };

    this.drawMoveableWallsCoordinates = function () {
        ctx.font = '10px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.x + ':' + this.y, this.x, this.y + 15);
        ctx.fillText((this.x + this.width) + ':' + this.y, this.x + this.width, this.y + 30);
        ctx.fillText(this.x + ':' + (this.y + this.height), this.x, this.y + this.height);
        ctx.fillText((this.x + this.width) + ':' + (this.y + this.height), this.x + this.width, this.y + this.height - 15);
    };

    this.drawMoveableWallsID = function () {
        ctx.font = '11px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.id, this.x + this.width / 2, this.y + this.height / 2);
    };

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // this.drawMoveableWallsCoordinates();
        // this.drawMoveableWallsID();
    };
};