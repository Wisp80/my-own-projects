const helper = {
    checkIntersectionBetweenTwoNotRotatedRectangles: function (
        farX1, closeX2,
        closeX1, farX2,
        farY1, closeY2,
        closeY1, farY2
    ) {
        if (farX1 >= closeX2 &&
            closeX1 <= farX2 &&
            farY1 >= closeY2 &&
            closeY1 <= farY2) {
            return true;
        } else {
            return false;
        };
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
    },

    getRandomColor: function () {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };

        return color;
    },
};