let realMoveableWalls = {
    moveableWallsRoom00: [
        new MoveableWall(200, 50, 40, 40, helper.getRandomColor(), 0, null, 110, 1),
    ],

    moveableWallsRoom01: [
        new MoveableWall(500, 250, 40, 40, helper.getRandomColor(), 0, null, 310, 1),
    ]
};

let moveableWalls = realMoveableWalls.moveableWallsRoom00;

function MoveableWall(
    x, y,
    width, height,
    color, id,
    arrivalPointX, arrivalPointY,
    speed
) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.id = id;
    this.arrivalPointX = arrivalPointX;
    this.arrivalPointY = arrivalPointY;
    this.speed = speed;

    this.move = function () {
        if (this.arrivalPointY === null) {
            for (let i = this.x; i <= this.arrivalPointX; i += this.speed) {
                this.x = i;
            };

        } else if (this.arrivalPointX === null) {

            let timeMultiplier = 1;
            let inititalY = this.y;

            for (let i = this.y; i <= this.arrivalPointY; i += this.speed) {
                setTimeout(() => {
                    this.y = i;
                }, 5 * timeMultiplier);

                // console.log('timeMultiplier ' + timeMultiplier + '; ' + 'time ' + 25 * timeMultiplier);

                timeMultiplier++;
            };

            // console.log('HERE');
            // console.log('timeMultiplier ' + timeMultiplier + '; ' + 'time ' + 25 * timeMultiplier);

            setTimeout(() => {
                for (let j = this.y; j >= inititalY; j -= this.speed) {
                    setTimeout(() => {
                        this.y = j;
                    }, 5 * timeMultiplier);

                    // console.log('timeMultiplier ' + timeMultiplier + '; ' + 'time ' + 25 * timeMultiplier);

                    timeMultiplier++;
                };
            }, 5 * timeMultiplier);
        }
        // else if (this.arrivalPointX !== null && this.arrivalPointY !== null) {

        //     for (let i = this.x; i <= this.arrivalPointX; i += this.speed) {
        //         for (let j = this.y; j <= this.arrivalPointY; j += this.speed) {
        //             this.x = i;
        //             this.y = j;
        //         };
        //     };
        // };
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