let realFields = {
    field00: [
        new Field(1, 50, 100, 40, 0, 0)
    ]
}

let fields = realFields.field00;

function Field(
    patchCount, minPatchRadius, maxPatchRadius, minDistanceBetweenPatches,
    id, type
) {
    this.patchCount = patchCount;
    this.minPatchRadius = minPatchRadius;
    this.maxPatchRadius = maxPatchRadius;
    this.minDistanceBetweenPatches = minDistanceBetweenPatches;
    this.patches = [];
    this.id = id;
    this.type = type;

    this.drawPatches = function () {
        for (let i = 0; i < this.patchCount; i++) {
            let attempts = 0;
            let validPosition = false;
            let x, y, radius;

            while (!validPosition && attempts < 100) {
                attempts++;
                radius = this.minPatchRadius + Math.random() * (this.maxPatchRadius - this.minPatchRadius);
                x = radius + Math.random() * (canvas.width - 2 * radius);
                y = radius + Math.random() * (canvas.height - 2 * radius);

                validPosition = true;

                for (const patch of this.patches) {
                    const dx = patch.x - x;
                    const dy = patch.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < (patch.radius + radius + this.minPatchRadius)) {
                        validPosition = false;
                        break;
                    }
                }
            }

            if (validPosition) {
                this.patches.push({
                    x, y, radius,
                    color: helper.getRandomColor()
                });
            }
        }

        this.patches.forEach(patch => {
            ctx.fillStyle = patch.color;
            ctx.beginPath();

            const startAngle = Math.random() * Math.PI * 2;
            ctx.moveTo(
                patch.x + Math.cos(startAngle) * patch.radius,
                patch.y + Math.sin(startAngle) * patch.radius
            );

            const points = 8 + Math.floor(Math.random() * 8);
            for (let i = 1; i <= points; i++) {
                const angle = startAngle + (i / points) * Math.PI * 2;
                const radiusVariation = 0.7 + Math.random() * 0.6;
                ctx.lineTo(
                    patch.x + Math.cos(angle) * patch.radius * radiusVariation,
                    patch.y + Math.sin(angle) * patch.radius * radiusVariation
                );
            }

            ctx.closePath();
            ctx.fill();
        });
    }
};

game.tick();