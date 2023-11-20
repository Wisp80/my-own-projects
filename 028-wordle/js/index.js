const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');
ctx.font = '42px serif';

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
    },

    getUniqueCharactersFromArray: function (originalArray) {
        let uniqueArray = [];

        for (let i = 0; i < originalArray.length; i++) {
            if (uniqueArray.includes(originalArray[i]) === false) {
                uniqueArray.push(originalArray[i]);
            };
        };

        return uniqueArray;
    },
};

/*-------------------------------------------------------------------------------------------------------------*/

function start() { drawTerminal() };

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

let hiddenWord = ['Ф', 'А', 'К', 'Е', 'Л']; // Загаданное слово.

let roundWords = [ // Массив данных о введеных буквах.
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

let uniqueLettersInHiddenWord = []; // Массив уникальных букв в загаданном слове.
let hiddenWordAnalyze = {}; // Данные о том, сколько каждой уникальной буквы находится в загаданном слове.

function analyzeHiddenWord() { // Функция по сбору данных в два массива выше.
    uniqueLettersInHiddenWord = helper.getUniqueCharactersFromArray(hiddenWord);

    for (let i = 0; i < uniqueLettersInHiddenWord.length; i++) {
        hiddenWordAnalyze[uniqueLettersInHiddenWord[i]] = 0;

        for (let j = 0; j < hiddenWord.length; j++) {
            if (uniqueLettersInHiddenWord[i] === hiddenWord[j]) {
                hiddenWordAnalyze[uniqueLettersInHiddenWord[i]]++;
            };
        };
    };

    console.log('Уникальные буквы в загаданном слове:');
    console.log(uniqueLettersInHiddenWord);
    console.log('Сколько каждой уникальной буквы находится в загаданном слове:');
    console.log(hiddenWordAnalyze);
    console.log('------------------------------------------------------------------------------------------');
};

analyzeHiddenWord(); // Собираем данные для двух массивов выше.

/*-------------------------------------------------------------------------------------------------------------*/

let lettersCountInCurrentAttempt = 0; // Количество букв введенных в текущую строку на данный момент.
let attemptCount = 0; // Номер текущей строки.
let win = false;

function fillLetter(letter) {
    if (lettersCountInCurrentAttempt < hiddenWord.length && !win) {
        roundWords[attemptCount][lettersCountInCurrentAttempt] = letter;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.fillText(letter, 55 + 90 * lettersCountInCurrentAttempt, 76 + 90 * attemptCount);
        lettersCountInCurrentAttempt++;
        console.log('Все введенные буквы:');
        console.log(roundWords);
    };
};

/*-------------------------------------------------------------------------------------------------------------*/

let colorsInCurrentWord = ['black', 'black', 'black', 'black', 'black']; // Данные о том, какие буквы уже закрашены в текущем слове.
let uniqueLettersInCurrentWord = []; // Массив уникальных букв в текущем слове.
let currentWordAnalyze = {}; // Данные о том, сколько каждой уникальной буквы находится в текущем слове.

function showInfo() {
    console.log('Все введенные буквы:');
    console.log(roundWords);
    console.log('Уникальные буквы в загаданном слове:');
    console.log(uniqueLettersInHiddenWord);
    console.log('Сколько каждой уникальной буквы находится в загаданном слове:');
    console.log(hiddenWordAnalyze);
    console.log('Уникальные буквы в текущем слове:');
    console.log(uniqueLettersInCurrentWord);
    console.log('Сколько каждой уникальной буквы закрашено зеленым или желтым цветом в текущем слове:');
    console.log(currentWordAnalyze);
    console.log('Какого цвета буквы в текущем слове');
    console.log(colorsInCurrentWord);
    console.log('------------------------------------------------------------------------------------------');
};

function analyzeCurrentnWord() { // Функция по сбору данных в два массива выше.
    uniqueLettersInCurrentWord = [];
    currentWordAnalyze = {};
    colorsInCurrentWord = ['black', 'black', 'black', 'black', 'black'];
    uniqueLettersInCurrentWord = helper.getUniqueCharactersFromArray(roundWords[attemptCount]);
    for (let j = 0; j < uniqueLettersInCurrentWord.length; j++) { currentWordAnalyze[uniqueLettersInCurrentWord[j]] = 0 };
};

function changeLetterColor(color, letter, letterPosition, line) { // Функция для закрашивания какой-то буквы в текущем слове.
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.fillText(letter, 55 + 90 * letterPosition, 76 + 90 * line);
    ctx.strokeText(letter, 55 + 90 * letterPosition, 76 + 90 * line);
};

function checkTheWord() {
    if (lettersCountInCurrentAttempt === hiddenWord.length && !win) {
        analyzeCurrentnWord();
        console.log('------------------------------------------------------------------------------------------');
        console.log('ATTEMP #' + attemptCount);
        showInfo();

        /*Если какая-то буква в текущем слове совпадает с какой-то буквой в загаданном слове по значению и позиции, то 
        делаем ее зеленой, указывая, что закрасили ее на 1 раз больше.*/
        for (let i = 0; i < hiddenWord.length; i++) {
            if (hiddenWord[i] === roundWords[attemptCount][i]) {
                changeLetterColor('green', roundWords[attemptCount][i], i, attemptCount);
                colorsInCurrentWord[i] = 'green';
                currentWordAnalyze[roundWords[attemptCount][i]]++;
                console.log('G R E E N');
                showInfo();
            };
        };

        for (let i = 0; i < roundWords[attemptCount].length; i++) {
            for (let j = 0; j < hiddenWord.length; j++) {
                if (/*Если*/
                    /*какая-то буква в текущем слове совпадает с какой-то буквой в загаданном слове по значению и но не по позиции,*/
                    roundWords[attemptCount][i] === hiddenWord[j] && i !== j &&
                    /*позиция этой какой-то буквы в текущем или загаданном слове не зеленая,*/
                    colorsInCurrentWord[i] !== 'green' && colorsInCurrentWord[j] !== 'green' &&
                    /*эта какая-то буква в текущем слове еще не закрашена желтым большее количество раз, чем есть копий этой буквы в загаданном слове,*/
                    currentWordAnalyze[roundWords[attemptCount][i]] < hiddenWordAnalyze[roundWords[attemptCount][i]]
                ) {
                    /*то закрашиваем эту букву в текущем слове, указывая, что закрасили ее на 1 раз больше.*/
                    changeLetterColor('yellow', roundWords[attemptCount][i], i, attemptCount);
                    colorsInCurrentWord[i] = 'yellow';
                    currentWordAnalyze[roundWords[attemptCount][i]]++;
                    console.log('Y E L L O W');
                    showInfo();
                    break;
                };
            };
        };

        for (let i = 0; i < hiddenWord.length; i++) {
            if (hiddenWord[i] !== roundWords[attemptCount][i]) {
                if (attemptCount === 5) {
                    console.log('GAME OVER');
                    return;
                } else {
                    attemptCount++;
                    lettersCountInCurrentAttempt = 0;
                    console.log('KEEP TRYING');
                    return;
                };
            };
        };

        win = true;
        console.log('YOU WON');
    };
};

/*-------------------------------------------------------------------------------------------------------------*/

start();

/*
1) Выровнять CSS
2) Реализовать кнопку удаления буквы
3) Выводить в случае проигрыша загаданное слово
4) Увеличить словарь слов и выбирать случайно слово из словаря в качестве загаданного
5) Добавить опцию загадывания слова самому (скорее всего нужно будет меню какое-то)
6) Добавить возможность перезапуска игры
7) Добавить экраны проигрыша и выигрыша
8) Перевести программу на ООП
9) Зарисовывать клавиатуру
*/