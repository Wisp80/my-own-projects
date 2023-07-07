function addNewNote() {
    document.getElementsByClassName('main-screen')[0].style.display = 'none';
    document.getElementsByClassName('new-note')[0].style.display = 'flex';
};

function multiplyNumbersInArray() {
    let currentNumbers = [];
    for (let i = 0; i < 5; i++) {
        let currentNumber = document.getElementsByClassName('number')[i];
        currentNumbers.push(currentNumber.value);
    };

    let product = currentNumbers.reduce((acc, rec) => acc * rec);
    document.getElementsByClassName('product')[0].innerHTML = product;
    return product;
};

function convertFromDecToHex(decNumber) {
    let hexNumber = decNumber.toString(16);
    document.getElementsByClassName('translate')[0].innerHTML = hexNumber;
    return hexNumber;
};

function abbreviateTheHexadecimalNumber(hexNumber) {
    let splittedHexNumber;
    let edditedHexNumber;
    if (hexNumber.length > 6) {
        splittedHexNumber = hexNumber.split('');
        splittedHexNumber.pop();
        edditedHexNumber = splittedHexNumber.join('');
        document.getElementsByClassName('abbreviation')[0].innerHTML = edditedHexNumber;
    } else {
        document.getElementsByClassName('abbreviation')[0].innerHTML = '-';
        return hexNumber;
    };

    return edditedHexNumber;
};

function drawSquare(edditedHexNumber) {    
    let color = '#' + edditedHexNumber;
    document.getElementsByClassName('name-of-the-color')[0].innerHTML = color;
    document.getElementsByClassName('color-square')[0].style.backgroundColor = color;
};

function calculateThingsInNewNote() {
    let product = multiplyNumbersInArray();
    let hexNumber = convertFromDecToHex(product);
    let edditedHexNumber = abbreviateTheHexadecimalNumber(hexNumber);
    drawSquare(edditedHexNumber);
};