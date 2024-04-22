function setup() {
    createCanvas(400, 400); // Setare dimensiune canvas
    noStroke(); // Fără contur pentru pătrate
    colorMode(HSB, 360, 100, 100); // Setare mod culoare
}

function draw() {
    clear(); // Curățare canvas
    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            // Calculați distanța dintre puncte
            var distanceBetweenPoints = dist(mouseX, mouseY, gridX, gridY);
            // Ajustați dimensiunea pătratului în funcție de distanță
            var diameter = distanceBetweenPoints / maxDistance * 60;
            // Desenați pătratul
            rect(gridX, gridY, diameter, diameter);
        }
    }
}
