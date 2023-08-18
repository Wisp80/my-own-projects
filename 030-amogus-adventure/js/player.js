const players = {
    playerOne: new Player(),
};

function Player(
    x, y,
    width, height,
    speedX, speedY,
    maxSpeedX, maxSpeedY,
    jumpHeight, gravity,
    velocityX, friction,
    color
) {
    this.x = 41;
    this.y = 41;
    this.width = 40;
    this.height = 50;
    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeedX = 4;
    this.maxSpeedY = 4;
    this.jumpHeight = 5;
    this.maxJumpHeight = 100;
    this.gravity = 3;
    this.downwardForce = 0;
    this.accelerationX = 1;
    this.friction = 0.4; // [0; 1] трение, используется как множитель скорости для плавного торможения.
    this.color = 'orange';
    this.isActive = true; // Указывает активный ли для управления наш игрок.

    this.predictedHorizontalWayToTheRight = null;
    this.predictedHorizontalWayToTheLeft = null;
    this.predictedVerticalWayDown = null;
    this.predictedVerticalWayUp = null;

    this.predictCollision = function () {
        /*Подготавливаем данные, где окажется игрок в следующий тик, если будет двигаться по X.*/
        let predictedHorizontalPosition = {
            x: this.x + this.speedX,
            y: this.y,
            width: this.width,
            height: this.height
        };

        /*Подготавливаем данные, где окажется игрок в следующий тик, если будет двигаться по Y.*/
        let predictedVerticalPosition = {
            x: this.x,
            y: this.y + this.speedY,
            width: this.width,
            height: this.height
        };

        /*Проверяем не будет ли коллизия по X или Y между игроком и стенами в следующем тике.*/
        for (let i = 0; i < walls.length; i++) { // Перебираем каждую стену.

            /*Проверяем не будет ли коллизии между игроком и стенами в следующем тике, если он будет двигаться по X.*/
            if (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
                predictedHorizontalPosition.x + predictedHorizontalPosition.width, walls[i].x,
                predictedHorizontalPosition.x, walls[i].x + walls[i].width,
                predictedHorizontalPosition.y + predictedHorizontalPosition.height, walls[i].y,
                predictedHorizontalPosition.y, walls[i].y + walls[i].height)
            ) {
                /*Если такая коллизия есть, то пока такая коллизия имеет место быть, сдвигаем по X предполагаемую
                проекцию игрока, которая будет в следующем тике, ближе к текущей позиции игрока на 1 до тех пор, пока 
                не пропадет коллизия между предполагаемой позицией игрока и какой-то стеной.*/
                while (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
                    predictedHorizontalPosition.x + predictedHorizontalPosition.width, walls[i].x,
                    predictedHorizontalPosition.x, walls[i].x + walls[i].width,
                    predictedHorizontalPosition.y + predictedHorizontalPosition.height, walls[i].y,
                    predictedHorizontalPosition.y, walls[i].y + walls[i].height)
                ) {
                    predictedHorizontalPosition.x -= Math.sign(this.speedX);
                };

                /*Как только мы перестанем сдвигать по X предполагаемую проекцию игрока, которая будет в следующем тике, ближе 
                к текущей позиции игрока, то это будет означать, что мы имеем самую близку позицию игрока для следующего тика,
                когда игрок будет касаться какой-то стены, но не проходит через нее. Поэтому указываем, что координата X
                этой предполагаемой позиции должна быть текущей координатой X игрока и останавливаем игрока по X, чтобы он не
                пытался двигаться дальше в стену, так как это приведет к бесконечной работе цикла "while".*/
                this.x = predictedHorizontalPosition.x;
                this.speedX = 0;
            };

            /*Проверяем не будет ли коллизии между игроком и стенами в следующем тике, если он будет двигаться по Y.*/
            if (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
                predictedVerticalPosition.x + predictedVerticalPosition.width, walls[i].x,
                predictedVerticalPosition.x, walls[i].x + walls[i].width,
                predictedVerticalPosition.y + predictedVerticalPosition.height, walls[i].y,
                predictedVerticalPosition.y, walls[i].y + walls[i].height)
            ) {
                /*Если такая коллизия есть, то пока такая коллизия имеет место быть, сдвигаем по Y предполагаемую
                проекцию игрока, которая будет в следующем тике, ближе к текущей позиции игрока на 1 до тех пор, пока 
                не пропадет коллизия между предполагаемой позицией игрока и какой-то стеной.*/
                while (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
                    predictedVerticalPosition.x + predictedVerticalPosition.width, walls[i].x,
                    predictedVerticalPosition.x, walls[i].x + walls[i].width,
                    predictedVerticalPosition.y + predictedVerticalPosition.height, walls[i].y,
                    predictedVerticalPosition.y, walls[i].y + walls[i].height)
                ) {
                    predictedVerticalPosition.y -= Math.sign(this.speedY);
                };

                /*Как только мы перестанем сдвигать по Y предполагаемую проекцию игрока, которая будет в следующем тике, ближе 
                к текущей позиции игрока, то это будет означать, что мы имеем самую близку позицию игрока для следующего тика,
                когда игрок будет касаться какой-то стены, но не проходит через нее. Поэтому указываем, что координата Y
                этой предполагаемой позиции должна быть текущей координатой Y игрока и останавливаем игрока по Y, чтобы он не
                пытался двигаться дальше в стену, так как это приведет к бесконечной работе цикла "while".*/
                this.y = predictedVerticalPosition.y;
                this.speedY = 0;
            };
        };

        /*----------------------------*/

        /*Подготавливаем данные, описывающие путь, который игрок может пройти за следующий тик, если будет двигаться по X.*/
        if (Math.abs(this.speedX) > this.width) {
            if (this.speedX > 0) { // Если будет двигаться вправо.
                this.predictedHorizontalWayToTheRight = {
                    x: this.x + this.width,
                    y: this.y,
                    width: this.speedX - this.width,
                    height: this.height
                };
            } else {
                this.predictedHorizontalWayToTheRight = null;
            };

            if (this.speedX < 0) { // Если будет двигаться влево.
                this.predictedHorizontalWayToTheLeft = {
                    x: this.x - Math.abs(this.speedX) + this.width,
                    y: this.y,
                    width: Math.abs(this.speedX) - this.width,
                    height: this.height
                };
            } else {
                this.predictedHorizontalWayToTheLeft = null;
            };
        };

        /*Подготавливаем данные, описывающие путь, который игрок может пройти за следующий тик, если будет двигаться по Y.*/
        if (Math.abs(this.speedY) > this.height) {
            if (this.speedY > 0) { // Если будет двигаться вниз.
                this.predictedVerticalWayDown = {
                    x: this.x,
                    y: this.y + this.height,
                    width: this.width,
                    height: this.speedY - this.height
                };
            } else {
                this.predictedVerticalWayDown = null;
            };

            if (this.speedY < 0) { // Если будет двигаться вверх.
                this.predictedVerticalWayUp = {
                    x: this.x,
                    y: this.y - Math.abs(this.speedY) + this.height,
                    width: this.width,
                    height: Math.abs(this.speedY) - this.height
                };
            } else {
                this.predictedVerticalWayUp = null;
            };
        };

        /*Создаем переменные, которые будут хранить расстояния до препятствий, которые могут потенциально оказаться на пути,
        который игрок пройдет за следующий тик.*/
        let potentialCollisionsRight = [];
        let potentialCollisionsLeft = [];
        let potentialCollisionsDown = [];
        let potentialCollisionsUp = [];

        for (let i = 0; i < walls.length; i++) { // Перебираем все стены.
            if (this.predictedHorizontalWayToTheRight) { // Если рассчитан путь вправо на следующий тик,
                if (helper.checkIntersectionBetweenTwoNotRotatedRectangles( // то проверяем не пересекается ли он с каким-то стенами,
                    this.predictedHorizontalWayToTheRight.x + this.predictedHorizontalWayToTheRight.width, walls[i].x,
                    this.predictedHorizontalWayToTheRight.x, walls[i].x + walls[i].width,
                    this.predictedHorizontalWayToTheRight.y + this.predictedHorizontalWayToTheRight.height, walls[i].y,
                    this.predictedHorizontalWayToTheRight.y, walls[i].y + walls[i].height
                )) { // и если пересекается, то сохраняем расстояние от игрока до этой стены.
                    potentialCollisionsRight.push(walls[i].x - this.x - this.width);
                };
            };

            if (this.predictedHorizontalWayToTheLeft) { // Если рассчитан путь влево на следующий тик,
                if (helper.checkIntersectionBetweenTwoNotRotatedRectangles( // то проверяем не пересекается ли он с каким-то стенами,
                    this.predictedHorizontalWayToTheLeft.x + this.predictedHorizontalWayToTheLeft.width, walls[i].x,
                    this.predictedHorizontalWayToTheLeft.x, walls[i].x + walls[i].width,
                    this.predictedHorizontalWayToTheLeft.y + this.predictedHorizontalWayToTheLeft.height, walls[i].y,
                    this.predictedHorizontalWayToTheLeft.y, walls[i].y + walls[i].height
                )) { // и если пересекается, то сохраняем расстояние от игрока до этой стены.
                    potentialCollisionsLeft.push(this.x - walls[i].x - walls[i].width);
                };
            };

            if (this.predictedVerticalWayDown) { // Если рассчитан путь вниз на следующий тик,
                if (helper.checkIntersectionBetweenTwoNotRotatedRectangles( // то проверяем не пересекается ли он с каким-то стенами,
                    this.predictedVerticalWayDown.x + this.predictedVerticalWayDown.width, walls[i].x,
                    this.predictedVerticalWayDown.x, walls[i].x + walls[i].width,
                    this.predictedVerticalWayDown.y + this.predictedVerticalWayDown.height, walls[i].y,
                    this.predictedVerticalWayDown.y, walls[i].y + walls[i].height
                )) { // и если пересекается, то сохраняем расстояние от игрока до этой стены.
                    potentialCollisionsDown.push(walls[i].y - this.y - this.height);
                };
            };

            if (this.predictedVerticalWayUp) { // Если рассчитан путь вверх на следующий тик,
                if (helper.checkIntersectionBetweenTwoNotRotatedRectangles( // то проверяем не пересекается ли он с каким-то стенами,
                    this.predictedVerticalWayUp.x + this.predictedVerticalWayUp.width, walls[i].x,
                    this.predictedVerticalWayUp.x, walls[i].x + walls[i].width,
                    this.predictedVerticalWayUp.y + this.predictedVerticalWayUp.height, walls[i].y,
                    this.predictedVerticalWayUp.y, walls[i].y + walls[i].height
                )) { // и если пересекается, то сохраняем расстояние от игрока до этой стены.
                    potentialCollisionsUp.push(this.y - walls[i].y - walls[i].height);
                };
            };
        };

        /*Среди полученных расстояний находим самые маленькие.*/
        let closestCollisionRight = helper.findTheSmallestElementInArrayOfNumbers(potentialCollisionsRight);
        let closestCollisionLeft = helper.findTheSmallestElementInArrayOfNumbers(potentialCollisionsLeft);
        let closestCollisionDown = helper.findTheSmallestElementInArrayOfNumbers(potentialCollisionsDown);
        let closestCollisionUp = helper.findTheSmallestElementInArrayOfNumbers(potentialCollisionsUp);

        if (this.speedX > 0 && closestCollisionRight) { // Если игрок движется вправо и на его пути потенциально есть препятствия,
            this.speedX = closestCollisionRight - 1; // то в следующий тик его скорость равна расстоянию до самого ближайшего из этих препятствий.
        };

        if (this.speedX < 0 && closestCollisionLeft) { // Если игрок движется влево и на его пути потенциально есть препятствия,
            this.speedX = -closestCollisionLeft + 1; // то в следующий тик его скорость равна расстоянию до самого ближайшего из этих препятствий.
        };

        if (this.speedY > 0 && closestCollisionDown) { // Если игрок движется вниз и на его пути потенциально есть препятствия,
            this.speedY = closestCollisionDown - 1; // то в следующий тик его скорость равна расстоянию до самого ближайшего из этих препятствий.
        };

        if (this.speedY < 0 && closestCollisionUp) { // Если игрок движется вверх и на его пути потенциально есть препятствия,
            this.speedY = -closestCollisionUp + 1; // то в следующий тик его скорость равна расстоянию до самого ближайшего из этих препятствий.
        };
    };

    this.move = function () {
        if (this.isActive) { // Реализуем движение игрока, если он активен.
            /*Обработка скоростей по X.*/
            if ((!controls.isLeftKeyPressed && !controls.isRightKeyPressed) || // Если не нажато вправо и влево
                (controls.isLeftKeyPressed && controls.isRightKeyPressed)) { // или если нажато и вправо и влево,
                this.speedX *= this.friction; // то значит мы не двигаемся вправо или влево, соответственно замедляем нашу скорость по X.
            } else if (controls.isRightKeyPressed) { // Если нажато вправо,
                this.speedX += this.accelerationX; // то увеличиваем скорость по X.
            } else if (controls.isLeftKeyPressed) { // Если нажато влево,
                this.speedX -= this.accelerationX; // то уменьшаем скорость по X.
            };

            /*Ограничиваем скорость по X при достижения максимума.*/
            if (this.speedX >= this.maxSpeedX) { // Если достигаем максимума скорости по X вправо,
                this.speedX = this.maxSpeedX; // то ограничиваем нашу скорость по X максимально указанной.
            } else if (this.speedX < -this.maxSpeedX) { // Если достигаем максимума скорости по X влево,
                this.speedX = -this.maxSpeedX; // то ограничиваем нашу скорость по X максимально указанной.
            };

            /*Округляем скорость по X до целых значений. Поскольку метод "Math.floor()" для отрицательных значений, например,
            "-5,3" превращает в "-6", то есть модуль числа по факту округляется сверху, то для отрицательных значение используем 
            "Math.ceil()".*/
            if (this.speedX > 0) { // Если скорость по X больше 0,
                this.speedX = Math.floor(this.speedX); // то округляем скорость по X снизу. 
            } else {
                this.speedX = Math.ceil(this.speedX); // Если скорость по X меньше или равна 0, то округляем скорость по X сверху.
            };

            /*----------------------------*/

            /*Обработка скоростей по Y.*/

            if ((!controls.isUpKeyPressed && !controls.isDownKeyPressed) || // Если не нажато вверх и вниз
                (controls.isUpKeyPressed && controls.isDownKeyPressed)) { // или если нажато и вверх и вниз,
                this.speedY *= this.friction; // то значит мы не двигаемся вверх или вниз, соответственно замедляем нашу скорость по Y.
            } else if (controls.isUpKeyPressed) { // Если нажато вверх,
                this.speedY -= this.accelerationX; // то уменьшаем скорость по Y.
            } else if (controls.isDownKeyPressed) { // Если нажато влево,
                this.speedY += this.accelerationX; // то увеличиваем скорость по Y.
            };

            /*Ограничиваем скорость по Y при достижения максимума.*/
            if (this.speedY >= this.maxSpeedY) { // Если достигаем максимума скорости по Y вверх,
                this.speedY = this.maxSpeedY; // то ограничиваем нашу скорость по Y максимально указанной.
            } else if (this.speedY < -this.maxSpeedY) { // Если достигаем максимума скорости по Y вниз,
                this.speedY = -this.maxSpeedY; // то ограничиваем нашу скорость по Y максимально указанной.
            };

            /*Округляем скорость по Y до целых значений. Поскольку метод "Math.floor()" для отрицательных значений, например,
            "-5,3" превращает в "-6", то есть модуль числа по факту округляется сверху, то для отрицательных значение используем 
            "Math.ceil()".*/
            if (this.speedY > 0) { // Если скорость по Y больше 0,
                this.speedY = Math.floor(this.speedY); // то округляем скорость по Y снизу. 
            } else {
                this.speedY = Math.ceil(this.speedY); // Если скорость по Y меньше или равна 0, то округляем скорость по Y сверху.
            };

            if (this.downwardForce < 0) {
                this.currentJumpHeight += this.downwardForce * -1;

                if (this.currentJumpHeight >= this.maxJumpHeight) {
                    this.downwardForce = world.gravity;
                    this.currentJumpHeight = 0;
                };
            };

            /*----------------------------*/

            this.predictCollision();

            /*----------------------------*/

            /*Двигаем нашего игрока по X и Y.*/
            this.x += this.speedX;
            this.y += this.speedY;
        };
    };

    this.checkIfPlayerCollidesWithPortal = function () {
        // for (let i = 0; i < realPortals.length; i++) {
        //     if (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
        //         this.x + this.width, portals[i].x,
        //         this.x, portals[i].x + portals[i].width,
        //         this.y + this.height, portals[i].y,
        //         this.y, portals[i].y + portals[i].height)
        //     ) {
        //         walls = portals[i].destinationWalls;
        //         portals = portals[i].destinationPortals;
        //     };
        // };

        // for (let portal in realPortals) {

        //     for (let i = 0; i < realPortals[portal].length; i++) {
        //         if (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
        //             this.x + this.width, realPortals[portal][i].x,
        //             this.x, realPortals[portal][i].x + realPortals[portal][i].width,
        //             this.y + this.height, realPortals[portal][i].y,
        //             this.y, realPortals[portal][i].y + realPortals[portal][i].height)) {

        //             console.log('wallsRoom' + realPortals[portal][i].destinationWalls);
        //             walls = realWalls['wallsRoom' + realPortals[portal][i].destinationWalls];
        //             portals = realPortals['portalsRoom' + realPortals[portal][i].destinationPortals];
        //         };

        //         break;
        //     };
        // };

        for (let i = 0; i < realPortals['portalsRoom' + game.currentRoom].length; i++) {
            if (helper.checkIntersectionBetweenTwoNotRotatedRectangles(
                this.x + this.width, realPortals['portalsRoom' + game.currentRoom][i].x,
                this.x, realPortals['portalsRoom' + game.currentRoom][i].x + realPortals['portalsRoom' + game.currentRoom][i].width,
                this.y + this.height, realPortals['portalsRoom' + game.currentRoom][i].y,
                this.y, realPortals['portalsRoom' + game.currentRoom][i].y + realPortals['portalsRoom' + game.currentRoom][i].height)) {

                walls = realWalls['wallsRoom' + realPortals['portalsRoom' + game.currentRoom][i].destinationWalls];
                portals = realPortals['portalsRoom' + realPortals['portalsRoom' + game.currentRoom][i].destinationPortals];

                for (let j = 0; j < realPortals['portalsRoom' + realPortals['portalsRoom' + game.currentRoom][i].destinationPortals].length; j++) {
                    if (realPortals['portalsRoom' + realPortals['portalsRoom' + game.currentRoom][i].destinationPortals][j].id ===
                        realPortals['portalsRoom' + game.currentRoom][i].destinationPortalID
                    ) {
                        this.x = realPortals['portalsRoom' + realPortals['portalsRoom' + game.currentRoom][i].destinationPortals][j].x
                        this.y = realPortals['portalsRoom' + realPortals['portalsRoom' + game.currentRoom][i].destinationPortals][j].y - this.height - 20;
                    };
                };

                game.currentRoom = realPortals['portalsRoom' + game.currentRoom][i].destinationWalls;
            };
        };
    };

    this.drawPredictedWays = function () {
        if (this.predictedHorizontalWayToTheRight) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.predictedHorizontalWayToTheRight.x, this.predictedHorizontalWayToTheRight.y, this.predictedHorizontalWayToTheRight.width, this.predictedHorizontalWayToTheRight.height);
        };

        if (this.predictedHorizontalWayToTheLeft) {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.predictedHorizontalWayToTheLeft.x, this.predictedHorizontalWayToTheLeft.y, this.predictedHorizontalWayToTheLeft.width, this.predictedHorizontalWayToTheLeft.height);
        };

        if (this.predictedVerticalWayDown) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.predictedVerticalWayDown.x, this.predictedVerticalWayDown.y, this.predictedVerticalWayDown.width, this.predictedVerticalWayDown.height);
        };

        if (this.predictedVerticalWayUp) {
            ctx.fillStyle = 'violet';
            ctx.fillRect(this.predictedVerticalWayUp.x, this.predictedVerticalWayUp.y, this.predictedVerticalWayUp.width, this.predictedVerticalWayUp.height);
        };
    };

    this.drawPlayerCoordinates = function () {
        ctx.font = '10px serif';
        ctx.fillStyle = 'white';
        ctx.fillText(this.x + ':' + this.y, this.x, this.y + 15);
        ctx.fillText((this.x + this.width) + ':' + this.y, this.x + this.width, this.y + 30);
        ctx.fillText(this.x + ':' + (this.y + this.height), this.x, this.y + this.height);
        ctx.fillText((this.x + this.width) + ':' + (this.y + this.height), this.x + this.width, this.y + this.height - 15);
    };

    this.draw = function () {
        // this.drawPredictedWays();

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // this.drawPlayerCoordinates();
    };
};