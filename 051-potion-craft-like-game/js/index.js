const canvas = document.getElementsByClassName('canvas-one')[0];
const ctx = canvas.getContext('2d');

// Base background color
const bgColor = '#2a6e19';
ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Patch colors
const patchColors = ['#4a7ba6', '#5d9bd1', '#7fb3d5', '#a8d0e6', '#d0e7f5'];

// Generate random patches
function createPatches() {
    const patchCount = 6;
    const minRadius = 50;
    const maxRadius = 100;
    const minDistance = 40; // Minimum space between patches
    
    const patches = [];
    
    // Create patches with spacing
    for (let i = 0; i < patchCount; i++) {
        let attempts = 0;
        let validPosition = false;
        let x, y, radius;
        
        // Keep trying until we find a position that doesn't overlap
        while (!validPosition && attempts < 100) {
            attempts++;
            radius = minRadius + Math.random() * (maxRadius - minRadius);
            x = radius + Math.random() * (canvas.width - 2 * radius);
            y = radius + Math.random() * (canvas.height - 2 * radius);
            
            validPosition = true;
            
            // Check against existing patches
            for (const patch of patches) {
                const dx = patch.x - x;
                const dy = patch.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < (patch.radius + radius + minDistance)) {
                    validPosition = false;
                    break;
                }
            }
        }
        
        if (validPosition) {
            patches.push({
                x, y, radius,
                color: patchColors[Math.floor(Math.random() * patchColors.length)]
            });
        }
    }
    
    // Draw the patches with irregular shapes
    patches.forEach(patch => {
        // Create irregular shape
        ctx.fillStyle = patch.color;
        ctx.beginPath();
        
        // Start at random angle
        const startAngle = Math.random() * Math.PI * 2;
        ctx.moveTo(
            patch.x + Math.cos(startAngle) * patch.radius,
            patch.y + Math.sin(startAngle) * patch.radius
        );
        
        // Draw irregular polygon
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
        
        // Add subtle inner highlight
        // ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
        // ctx.beginPath();
        // ctx.arc(
        //     patch.x - patch.radius * 0.2,
        //     patch.y - patch.radius * 0.2,
        //     patch.radius * 0.6,
        //     0, Math.PI * 2
        // );
        // ctx.fill();
    });
}

createPatches();