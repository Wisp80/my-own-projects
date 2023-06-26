document.getElementById('hex-code-one').value = 'AA4435';
document.getElementById('hex-code-two').value = '12AB87';

// ************************************************************************************************************ //

function separateHexCode(id) {
    let hexCode = document.getElementById(id).value;
    let pairsOfHexValues = [];

    for (let i = 0; i < hexCode.length; i += 2) {
        pairsOfHexValues.push(hexCode.substring(i, i + 2));
    };

    return pairsOfHexValues;
};

// ************************************************************************************************************ //

let hexToDecimal = hex => parseInt(hex, 16);

function convertFromHexToDec(hexArray) {
    let changedPairsOfHexValues = [];

    for (let i = 0; i < hexArray.length; i++) {
        changedPairsOfHexValues[i] = hexToDecimal(hexArray[i]);
    };

    return changedPairsOfHexValues;
};

// ************************************************************************************************************ //

function convertFromDecToHex(decArray) {
    let changedPairsOfDecValues = [];

    for (let i = 0; i < decArray.length; i++) {
        changedPairsOfDecValues[i] = decArray[i].toString(16);
    };

    return changedPairsOfDecValues;
};

// ************************************************************************************************************ //

function displayColor(squareClass, hexArray) {
    document.getElementsByClassName(squareClass)[0].style.backgroundColor =
        'rgb(' + convertFromHexToDec(hexArray)[0] + ', ' + convertFromHexToDec(hexArray)[1] + ', ' + convertFromHexToDec(hexArray)[2] + ')';
};

// ************************************************************************************************************ //

let mixedPairsOfHexValues = [];

function mixColors() {
    for (let i = 0; i < 3; i++) {
        mixedPairsOfHexValues[i] = (convertFromHexToDec(separateHexCode('hex-code-one'))[i] + convertFromHexToDec(separateHexCode('hex-code-two'))[i]) / 2;
    };

    displayColor('color-square-three', mixedPairsOfHexValues);
    console.log(convertFromDecToHex([2, 98, 300]));
    document.getElementsByClassName('hex-code-three')[0].innerText =
        "#" + convertFromDecToHex(mixedPairsOfHexValues[0])[0] + convertFromDecToHex(mixedPairsOfHexValues[1])[1] + convertFromDecToHex(mixedPairsOfHexValues[2])[2];
};