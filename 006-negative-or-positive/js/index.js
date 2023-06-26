function doMagic() {
    if (Number(document.getElementsByClassName("enter-text-input")[0].value) > 0) {
        document.getElementsByClassName("is-negative-or-positive")[0].innerText = "Positive";
    } else if (Number(document.getElementsByClassName("enter-text-input")[0].value) < 0) {
        document.getElementsByClassName("is-negative-or-positive")[0].innerText = "Negative";
    } else if (Number(document.getElementsByClassName("enter-text-input")[0].value) === 0) {
        document.getElementsByClassName("is-negative-or-positive")[0].innerText = "It's ZERO";
    }
};

function clearStrings() {
    let tempInput = document.getElementsByClassName("enter-text-input")[0].value.split('');

    for (let i = 0; i < tempInput.length; i++) {
        if (i === 0 && tempInput[i] === "-") {
            tempInput[i].value = "-";
        } else if (
            tempInput[i] !== "0" &&
            tempInput[i] !== "1" &&
            tempInput[i] !== "2" &&
            tempInput[i] !== "3" &&
            tempInput[i] !== "4" &&
            tempInput[i] !== "5" &&
            tempInput[i] !== "6" &&
            tempInput[i] !== "7" &&
            tempInput[i] !== "8" &&
            tempInput[i] !== "9"

        ) {
            tempInput[i] = "";
        };
    };

    let newInput = "";

    for (let i = 0; i < tempInput.length; i++) {
        newInput = newInput + tempInput[i];
    };

    document.getElementsByClassName("enter-text-input")[0].value = newInput;
};