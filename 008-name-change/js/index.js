let alphabet = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26]
];

function ChangeName() {
    let text = document.getElementById('first-name').value.split('');
    let changedText = [];

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (text[i] === alphabet[j][0]) {
                changedText[i] = alphabet[j][1] * text.length + alphabet[j][1];
            };
        };
    };

    for (let i = 0; i < changedText.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (changedText[i] === alphabet[j][1]) {
                changedText[i] = alphabet[j][0];
            };
            
            if (changedText[i] > 26) {
                changedText[i] = getRandomNumberBetween(1, 26);
            };
        };
    };

    document.getElementById('second-name').value = changedText.join("");
};

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};