function doSurprise() {
    document.getElementsByClassName('surprise-button')[0].classList.add('hidden');
    document.getElementById('messege').classList.remove('hidden');
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
}

function colorLetters() {
    tickTimeout = null;
    window.clearTimeout(tickTimeout);
    tickTimeout = window.setTimeout('colorLetters()', 1000/20);

    for (let i = 0; i < document.getElementById('messege').innerHTML.length; i++) {
        document.getElementById('messege').style.color = getRandomColor();
    }
};

colorLetters();