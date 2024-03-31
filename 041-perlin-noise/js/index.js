const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

/*--------------------------------------------------------------------------------*/

// Шаг 1: Генерация шума Перлина
function perlinNoise(x, y) {
    x = (x << 13) ^ x;
    y = (y << 13) ^ y;

    return {
        x: (1.0 - ((x * (x * x * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0),
        y: (1.0 - ((y * (y * y * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0),
    };
};

// Функция сглаженного шума
// function smoothedNoise(x) {
//     return perlinNoise(x) / 2 + perlinNoise(x - 1) / 4 + perlinNoise(x + 1) / 4;
// };

// Шаг 2: Определение границ
const threshold = 0.17; // Пороговое значение для разделения земли и воды

for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
        let noiseValue = perlinNoise(x, y);

        // Assign colors based on noise values x and y separately
        let colorX = noiseValue.x < threshold ? 'blue' : 'green';
        let colorY = noiseValue.y < threshold ? 'blue' : 'green';
        
        // Combine colors based on both x and y noise values
        ctx.fillStyle = (colorX === 'blue' || colorY === 'blue') ? 'blue' : 'green';
        
        ctx.fillRect(x, y, 1, 1);
    }
}

// Шаг 3: Отображение результатов
// Обновление холста при изменении параметров шума Перлина