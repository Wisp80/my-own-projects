const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*-------------------------------------------------------------------------------------------------------------*/

const helper = {
    getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) { color += letters[Math.floor(Math.random() * 16)]; };

        return color;
    },

    randomIntFromInterval: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

/*-------------------------------------------------------------------------------------------------------------*/

function start() {
    drawTerminal();
};

/*-------------------------------------------------------------------------------------------------------------*/

function drawTerminal() {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';

    for (let x = 70; x < 520; x += 90) {
        for (let y = 65; y < 605; y += 90) {
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.closePath();
        };
    };
};

/*-------------------------------------------------------------------------------------------------------------*/

let hiddenWord = [
    'П', 'А', 'Н', 'Д', 'А'
];

let attemptWords = [
    [
        '', '', '', '', ''
    ],

    [
        '', '', '', '', ''
    ],

    [
        '', '', '', '', ''
    ],

    [
        '', '', '', '', ''
    ],

    [
        '', '', '', '', ''
    ],

    [
        '', '', '', '', ''
    ]
];

/*-------------------------------------------------------------------------------------------------------------*/

let letterCount = 0;
let attemptCount = 0;
let enterCount = 0;

function fillLetter(letter) {
    if (letterCount > 4) {
        attemptCount++;
    };

    for (let i = 0; i < attemptWords.length; i++) {
        for (let j = 0; j < attemptWords[i].length; j++) {
            attemptWords[attemptCount][letterCount] = letter;
        };
    };

    ctx.font = "42px serif";

    if (attemptCount === 0) {
        switch (letterCount) {
            case 0:
                ctx.fillText(letter, 55, 76);
                break;

            case 1:
                ctx.fillText(letter, 145, 76);
                break;

            case 2:
                ctx.fillText(letter, 235, 76);
                break;

            case 3:
                ctx.fillText(letter, 325, 76);
                break;

            case 4:
                ctx.fillText(letter, 415, 76);
                break;

            default:
                break;
        };
    };

    if (attemptCount === 1 && enterCount === 1) {
        switch (letterCount) {
            case 0:
                ctx.fillText(letter, 55, 168);
                break;

            case 1:
                ctx.fillText(letter, 145, 168);
                break;

            case 2:
                ctx.fillText(letter, 235, 168);
                break;

            case 3:
                ctx.fillText(letter, 325, 168);
                break;

            case 4:
                ctx.fillText(letter, 415, 168);
                break;

            default:
                break;
        };
    };

    if (attemptCount === 2 && enterCount === 2) {
        switch (letterCount) {
            case 0:
                ctx.fillText(letter, 55, 259);
                break;

            case 1:
                ctx.fillText(letter, 145, 259);
                break;

            case 2:
                ctx.fillText(letter, 235, 259);
                break;

            case 3:
                ctx.fillText(letter, 325, 259);
                break;

            case 4:
                ctx.fillText(letter, 415, 259);
                break;

            default:
                break;
        };
    };

    if (attemptCount === 3 && enterCount === 3) {
        switch (letterCount) {
            case 0:
                ctx.fillText(letter, 55, 350);
                break;

            case 1:
                ctx.fillText(letter, 145, 350);
                break;

            case 2:
                ctx.fillText(letter, 235, 350);
                break;

            case 3:
                ctx.fillText(letter, 325, 350);
                break;

            case 4:
                ctx.fillText(letter, 415, 350);
                break;

            default:
                break;
        };
    };

    if (attemptCount === 4 && enterCount === 4) {
        switch (letterCount) {
            case 0:
                ctx.fillText(letter, 55, 438);
                break;

            case 1:
                ctx.fillText(letter, 145, 438);
                break;

            case 2:
                ctx.fillText(letter, 235, 438);
                break;

            case 3:
                ctx.fillText(letter, 325, 438);
                break;

            case 4:
                ctx.fillText(letter, 415, 438);
                break;

            default:
                break;
        };
    };

    if (attemptCount === 5 && enterCount === 5) {
        switch (letterCount) {
            case 0:
                ctx.fillText(letter, 55, 525);
                break;

            case 1:
                ctx.fillText(letter, 145, 525);
                break;

            case 2:
                ctx.fillText(letter, 235, 525);
                break;

            case 3:
                ctx.fillText(letter, 325, 525);
                break;

            case 4:
                ctx.fillText(letter, 415, 525);
                break;

            default:
                break;
        };
    };

    if (letterCount !== 5) {
        letterCount++;
    };

    console.log(letterCount);
    console.log(attemptCount);
};

/*-------------------------------------------------------------------------------------------------------------*/

function checkTheWord() {
    if (letterCount === 5) {
        enterCount++;

        for (let i = 0; i < hiddenWord.length; i++) {
            for (let j = 0; j < attemptWords[enterCount]; j++) {
                if (hiddenWord[i] = attemptWords[enterCount][j]) {
                    console.log('win');
                };
            };
        };
    } else {
        return;
    };
};

/*-------------------------------------------------------------------------------------------------------------*/

start();