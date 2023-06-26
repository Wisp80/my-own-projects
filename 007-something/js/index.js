function xmasTree() {
    document.getElementById("square1").classList.remove("hidden");
    document.getElementById("square2").classList.remove("hidden");
    document.getElementsByClassName("tree")[0].classList.add("hidden");
    document.getElementById("canvas").classList.remove("hidden");
    graphics.drawBoard();
};

var game = {
    board: [
        '     #     ',
        '    ###    ',
        '   #####   ',
        '    ###    ',
        '   #####   ',
        '  #######  ',
        '   #####   ',
        '  #######  ',
        ' ######### ',
        '  #######  ',
        ' ######### ',
        '###########',
        '     #     ',
        '     #     ',
        '     #     '
    ],

    rememberColorGreen: function () {
      return "rgb(41, 124, 47)";
    },

    rememberColorBrown: function () {
        return "rgb(110, 95, 35)";
    },

    fillCanvasColor: function () {
        console.log(game.rememberColorBrown)
        var ctx = graphics.canvas.getContext("2d");
        ctx.fillStyle = game.rememberColorBrown;
    }
};

var graphics = {
    canvas: document.getElementById('canvas'),

    squareSize: 50,

    drawBoard: function (ctx) {
        var ctx = graphics.canvas.getContext("2d");
        var currentYoffset = 0;

        game.board.forEach(function checkLine(line) {
            line = line.split('');

            var currentXoffset = 0;

            line.forEach(function checkCharacter(character) {
                if (character === '#') {
                    ctx.fillStyle = 'rgb(208, 209, 210)';
                    ctx.fillRect(currentXoffset, currentYoffset, graphics.squareSize, graphics.squareSize);
                };

                currentXoffset += graphics.squareSize;
            });

            currentYoffset += graphics.squareSize;
        });
    }
};
