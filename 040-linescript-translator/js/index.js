const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

let englishLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let russianLetters = 'абвгдежзийклмнопрстуфхцяшщъыьэюя'.split('');

function convertWords() {
    let wordsToConvert = document.getElementById('words-to-convert').value;
    let lettersArray = wordsToConvert.match(/.{1}/g);

    console.log(wordsToConvert);
    console.log(lettersArray);

    for (let i = 0; i < lettersArray.length; i++) {
        if (lettersArray[i] === 'a') {
            lettersArray[i] = 'еееееt';

            ctx.font = "50px calibri";
            ctx.fillText(`[${lettersArray[i]}]`, 90, 90);
        };
    };
};