const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');
ctx.font = '42px serif';

/*-------------------------------------------------------------------------------------------------------------*/

const helper = {
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

    showInfo: function () {
        console.log('Все введенные буквы:');
        console.log(currentWord.roundWords);
        console.log('Количество букв в строке:');
        console.log(currentWord.lettersCountInCurrentAttempt);
        console.log('Предыдущая позиция:');
        console.log(currentWord.previousPositionTyped);
        console.log('Уникальные буквы в загаданном слове:');
        console.log(hiddenWord.uniqueLettersInHiddenWord);
        console.log('Сколько каждой уникальной буквы находится в загаданном слове:');
        console.log(hiddenWord.hiddenWordAnalyze);
        console.log('Уникальные буквы в текущем слове:');
        console.log(currentWord.uniqueLettersInCurrentWord);
        console.log('Сколько каждой уникальной буквы закрашено зеленым или желтым цветом в текущем слове:');
        console.log(currentWord.currentWordAnalyze);
        console.log('Какого цвета буквы в текущем слове:');
        console.log(currentWord.colorsInCurrentWord);
        console.log('------------------------------------------------------------------------------------------');
    },
};

const game = {
    win: false,

    start: function () {
        terminal.drawTerminal();
        hiddenWord.analyzeHiddenWord();
    },

    checkTheWord: function () {
        if (currentWord.lettersCountInCurrentAttempt === hiddenWord.word.length && !this.win) {
            currentWord.analyzeCurrentnWord();
            console.log('------------------------------------------------------------------------------------------');
            console.log('ATTEMP #' + currentWord.attemptCount);
            helper.showInfo();

            /*Если какая-то буква в текущем слове совпадает с какой-то буквой в загаданном слове по значению и позиции, то 
            делаем ее зеленой, указывая, что закрасили ее на 1 раз больше.*/
            for (let i = 0; i < hiddenWord.word.length; i++) {
                if (hiddenWord.word[i] === currentWord.roundWords[currentWord.attemptCount][i]) {
                    terminal.changeLetterColor('green', currentWord.roundWords[currentWord.attemptCount][i], i, currentWord.attemptCount);
                    currentWord.colorsInCurrentWord[i] = 'green';
                    currentWord.currentWordAnalyze[currentWord.roundWords[currentWord.attemptCount][i]]++;
                    console.log('G R E E N');
                    helper.showInfo();
                };
            };

            for (let i = 0; i < currentWord.roundWords[currentWord.attemptCount].length; i++) {
                for (let j = 0; j < hiddenWord.word.length; j++) {
                    if (/*Если*/
                        /*какая-то буква в текущем слове совпадает с какой-то буквой в загаданном слове по значению и но не по позиции,*/
                        currentWord.roundWords[currentWord.attemptCount][i] === hiddenWord.word[j] && i !== j &&
                        /*позиция этой какой-то буквы в текущем или загаданном слове не зеленая,*/
                        currentWord.colorsInCurrentWord[i] !== 'green' && currentWord.colorsInCurrentWord[j] !== 'green' &&
                        /*эта какая-то буква в текущем слове еще не закрашена желтым большее количество раз, чем есть копий этой буквы в загаданном слове,*/
                        currentWord.currentWordAnalyze[currentWord.roundWords[currentWord.attemptCount][i]] < hiddenWord.hiddenWordAnalyze[currentWord.roundWords[currentWord.attemptCount][i]]
                    ) {
                        /*то закрашиваем эту букву в текущем слове, указывая, что закрасили ее на 1 раз больше.*/
                        terminal.changeLetterColor('yellow', currentWord.roundWords[currentWord.attemptCount][i], i, currentWord.attemptCount);
                        currentWord.colorsInCurrentWord[i] = 'yellow';
                        currentWord.currentWordAnalyze[currentWord.roundWords[currentWord.attemptCount][i]]++;
                        console.log('Y E L L O W');
                        helper.showInfo();
                        break;
                    };
                };
            };

            for (let i = 0; i < hiddenWord.word.length; i++) {
                if (hiddenWord.word[i] !== currentWord.roundWords[currentWord.attemptCount][i]) {
                    if (currentWord.attemptCount === 5) {
                        console.log('GAME OVER');
                        return;
                    } else {
                        currentWord.attemptCount++;
                        currentWord.lettersCountInCurrentAttempt = 0;
                        currentWord.previousPositionTyped = 0;
                        console.log('KEEP TRYING');
                        return;
                    };
                };
            };

            this.win = true;
            console.log('YOU WON');
        };
    },
};

const terminal = {
    drawTerminal: function () {
        ctx.fillStyle = 'pink';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.lineWidth = 2;

        for (let x = 70; x < 520; x += 90) {
            for (let y = 65; y < 605; y += 90) {
                ctx.beginPath();
                ctx.arc(x, y, 40, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.closePath();
            };
        };
    },

    drawLetter: function (letter) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'black';
        ctx.fillText(letter, 55 + 90 * currentWord.lettersCountInCurrentAttempt, 76 + 90 * currentWord.attemptCount);
    },

    changeLetterColor: function (color, letter, letterPosition, line) { // Функция для закрашивания какой-то буквы в текущем слове.
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.fillText(letter, 55 + 90 * letterPosition, 76 + 90 * line);
        ctx.strokeText(letter, 55 + 90 * letterPosition, 76 + 90 * line);
    },

    eraseLetter: function () {
        ctx.save();
        ctx.beginPath();
        ctx.arc(70 + 90 * currentWord.previousPositionTyped, 65 + 90 * currentWord.attemptCount, 40, 0, Math.PI * 2, true);
        ctx.fillStyle = 'pink';
        ctx.clip();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    },
};

const hiddenWord = {
    word: ['Ф', 'А', 'К', 'Е', 'Л'], // Загаданное слово.
    uniqueLettersInHiddenWord: [], // Массив уникальных букв в загаданном слове.
    hiddenWordAnalyze: {}, // Данные о том, сколько каждой уникальной буквы находится в загаданном слове.

    analyzeHiddenWord: function () { // Функция по сбору данных в массив и объект выше.
        this.uniqueLettersInHiddenWord = helper.getUniqueCharactersFromArray(this.word);

        for (let i = 0; i < this.uniqueLettersInHiddenWord.length; i++) {
            this.hiddenWordAnalyze[this.uniqueLettersInHiddenWord[i]] = 0;

            for (let j = 0; j < this.word.length; j++) {
                if (this.uniqueLettersInHiddenWord[i] === this.word[j]) {
                    this.hiddenWordAnalyze[this.uniqueLettersInHiddenWord[i]]++;
                };
            };
        };

        console.log('Уникальные буквы в загаданном слове:');
        console.log(this.uniqueLettersInHiddenWord);
        console.log('Сколько каждой уникальной буквы находится в загаданном слове:');
        console.log(this.hiddenWordAnalyze);
        console.log('------------------------------------------------------------------------------------------');
    },
};

const currentWord = {
    lettersCountInCurrentAttempt: 0, // Количество букв введенных в текущую строку на данный момент.
    attemptCount: 0, // Номер текущей строки.
    roundWords: [ // Массив данных о введеных буквах.
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ],
    colorsInCurrentWord: ['black', 'black', 'black', 'black', 'black'], // Данные о том, какие буквы уже закрашены в текущем слове.
    uniqueLettersInCurrentWord: [], // Массив уникальных букв в текущем слове.
    currentWordAnalyze: {}, // Данные о том, сколько каждой уникальной буквы находится в текущем слове.
    previousPositionTyped: 0,

    analyzeCurrentnWord: function () { // Функция по сбору данных в два массива и объект выше.
        this.uniqueLettersInCurrentWord = [];
        this.currentWordAnalyze = {};
        this.colorsInCurrentWord = ['black', 'black', 'black', 'black', 'black'];
        this.uniqueLettersInCurrentWord = helper.getUniqueCharactersFromArray(this.roundWords[this.attemptCount]);
        for (let j = 0; j < this.uniqueLettersInCurrentWord.length; j++) { this.currentWordAnalyze[this.uniqueLettersInCurrentWord[j]] = 0 };
    },

    fillLetter: function (letter) {
        if (this.lettersCountInCurrentAttempt < hiddenWord.word.length && !game.win) {
            this.roundWords[this.attemptCount][this.lettersCountInCurrentAttempt] = letter;
            terminal.drawLetter(letter);
            this.previousPositionTyped = this.lettersCountInCurrentAttempt;
            this.lettersCountInCurrentAttempt++;
            console.log('Все введенные буквы:');
            console.log(this.roundWords);
            console.log('------------------------------------------------------------------------------------------');
        };
    },

    removeLetter: function () {
        console.log('ДО УДАЛЕНИЯ:');
        helper.showInfo();
        this.roundWords[this.attemptCount][this.previousPositionTyped] = '';
        terminal.eraseLetter();
        if (this.previousPositionTyped !== 0) { this.previousPositionTyped-- };
        if (this.lettersCountInCurrentAttempt !== 0) { this.lettersCountInCurrentAttempt-- };
        console.log('ПОСЛЕ УДАЛЕНИЯ:');
        helper.showInfo();
    },
};

game.start();

/*
1) Выводить в случае проигрыша загаданное слово
2) Увеличить словарь слов и выбирать случайно слово из словаря в качестве загаданного
3) Добавить опцию загадывания слова самому (скорее всего нужно будет меню какое-то)
4) Добавить возможность перезапуска игры
5) Добавить экраны проигрыша и выигрыша
6) Зарисовывать клавиатуру
7) Возможность печатать с клавиатуры
*/