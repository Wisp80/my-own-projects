const helper = {
    checkIntersectionBetweenNotRotatedRectangleAndPoint: function (
        farX, closeX,
        farY, closeY,
        pointX, pointY,
    ) {
        if (closeX <= pointX &&
            farX >= pointX &&
            closeY <= pointY &&
            farY >= pointY) {
            return true;
        } else {
            return false;
        };
    },

    getRandomColor: function () {
        let letters = '012345678ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    },

    randomIntFromInterval: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    findTheSmallestElementInArrayOfNumbers: function (arr) {
        let smallestElement = null;

        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                if (!smallestElement) {
                    smallestElement = arr[i];
                } else if (arr[i] < smallestElement) {
                    smallestElement = arr[i];
                };
            };
        };

        return smallestElement;
    }
}