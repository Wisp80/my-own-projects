const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

// /*--------------------------------------------------------------------------------*/

// // Шаг 1: Генерация шума Перлина
// function perlinNoise(x, y) {
//     x = (x << 13) ^ x;
//     y = (y << 13) ^ y;

//     return {
//         x: (1.0 - ((x * (x * x * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0),
//         y: (1.0 - ((y * (y * y * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0),
//     };
// };

// // Функция сглаженного шума
// // function smoothedNoise(x) {
// //     return perlinNoise(x) / 2 + perlinNoise(x - 1) / 4 + perlinNoise(x + 1) / 4;
// // };

// // Шаг 2: Определение границ
// let threshold = 0.17; // Пороговое значение для разделения земли и воды

// for (let x = 0; x < canvas.width; x++) {
//     for (let y = 0; y < canvas.height; y++) {
//         let noiseValue = perlinNoise(x, y);

//         // Assign colors based on noise values x and y separately
//         let colorX = noiseValue.x < threshold ? 'blue' : 'green';
//         let colorY = noiseValue.y < threshold ? 'blue' : 'green';

//         // Combine colors based on both x and y noise values
//         ctx.fillStyle = (colorX === 'blue' || colorY === 'blue') ? 'blue' : 'green';

//         ctx.fillRect(x, y, 1, 1);
//     }
// }

// // Шаг 3: Отображение результатов
// // Обновление холста при изменении параметров шума Перлина





// Perlin noise implementation
function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a, b, t) {
    return a + t * (b - a);
}

function grad(hash, x, y) {
    let h = hash & 3; // Convert low 2 bits of hash code
    let u = h < 2 ? x : y; // Gradient value 1-2
    let v = h < 2 ? y : x; // Gradient value 1-2
    return (h & 1 ? -u : u) + (h & 2 ? -v : v); // Randomly invert gradient
}

function perlin(x, y, perm) {
    let X = Math.floor(x) & 255;
    let Y = Math.floor(y) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);

    let u = fade(x);
    let v = fade(y);

    let a = perm[X] + Y;
    let aa = perm[a];
    let ab = perm[a + 1];
    let b = perm[X + 1] + Y;
    let ba = perm[b];
    let bb = perm[b + 1];

    return lerp(
        lerp(grad(perm[aa], x, y), grad(perm[ba], x - 1, y), u),
        lerp(grad(perm[ab], x, y - 1), grad(perm[bb], x - 1, y - 1), u),
        v
    );
}

// Generate the permutation table
function generatePermutation() {
    let perm = [];
    for (let i = 0; i < 256; i++) {
        perm[i] = i;
    }
    for (let i = 0; i < 256; i++) {
        let r = Math.floor(Math.random() * 256);
        [perm[i], perm[r]] = [perm[r], perm[i]]; // Swap
    }
    return [...perm, ...perm]; // Duplicate the array
}

// Draw Perlin noise on canvas
function drawPerlinNoise(canvas, scale) {
    let width = canvas.width;
    let height = canvas.height;
    let imageData = ctx.createImageData(width, height);
    let data = imageData.data;

    let perm = generatePermutation();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let noiseValue = perlin(x / scale, y / scale, perm);
            let color = Math.floor((noiseValue + 1) * 128); // Scale to [0, 255]
            let index = (x + y * width) * 4;
            data[index] = color;     // Red
            data[index + 1] = color; // Green
            data[index + 2] = color; // Blue
            data[index + 3] = 255;   // Alpha
        }
    }

    ctx.putImageData(imageData, 0, 0);
}

// Initialize the canvas with Perlin noise
let scale = 100; // Adjust scale for noise detail
drawPerlinNoise(canvas, scale);



function drawClusters() {
    let width = canvas.width;
    let height = canvas.height;
    let clusterColor = 'white'; // Red color for clusters
    let clusterSize = 20; // Size of the clusters
    let threshold = 0.5; // Noise value threshold for cluster presence

    let perm = generatePermutation();

    for (let x = 0; x < width; x += 10) { // Increment by 10 for performance
        for (let y = 0; y < height; y += 10) {
            let noiseValue = perlin(x / 100, y / 100, perm); // Scale the coordinates for noise
            if (noiseValue > threshold) {
                // Draw a cluster if the noise value is above the threshold
                drawColorCluster(x, y, clusterColor, clusterSize, 30);
            }
        }
    }
}

// Function to draw a cluster of color
function drawColorCluster(x, y, color, radius, count) {
    for (let i = 0; i < count; i++) {
        let offsetX = Math.random() * radius - radius / 2;
        let offsetY = Math.random() * radius - radius / 2;

        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, Math.random() * (radius / 2), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

// Draw the clusters based on Perlin noise
drawClusters();