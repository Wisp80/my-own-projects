const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

window.onload = function () {
    controls.initializePlayersControlsListening();
};

// // Base background color
// const bgColor = '#2a6e19';
// ctx.fillStyle = bgColor;
// ctx.fillRect(0, 0, canvas.width, canvas.height);