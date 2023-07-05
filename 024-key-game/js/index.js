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
    if (hexNumber.length >= 6) {
        let splittedHexNumber = hexNumber.split('');
        splittedHexNumber.pop();
        document.getElementsByClassName('abbreviation')[0].innerHTML = splittedHexNumber.join('');
    };    
    return splittedHexNumber;
};

function calculateThingsInNewNote() {
    let product = multiplyNumbersInArray();
    let hexNumber = convertFromDecToHex(product);
    abbreviateTheHexadecimalNumber(hexNumber);
};