const controls = {
    isUpKeyPressed: false,
    isDownKeyPressed: false,
    isLeftKeyPressed: false,
    isRightKeyPressed: false,

    initializePlayersControlsListening: function () {
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'w':
                    this.isUpKeyPressed = true;
                    break;

                case 's':
                    this.isDownKeyPressed = true;
                    break;

                case 'a':
                    this.isLeftKeyPressed = true;
                    break;

                case 'd':
                    this.isRightKeyPressed = true;
                    break;

                default:
                    break;
            };
        }, false);

        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'w':
                    this.isUpKeyPressed = false;
                    break;

                case 's':
                    this.isDownKeyPressed = false;
                    break;

                case 'a':
                    this.isLeftKeyPressed = false;
                    break;

                case 'd':
                    this.isRightKeyPressed = false;
                    break;

                default:
                    break;
            };
        }, false);
    },
};
