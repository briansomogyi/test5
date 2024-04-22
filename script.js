// Declarăm variabile folosind let 
let maxDistance = 200;
let stepX = 5;
let stepY = 5;

function setup() {
    createCanvas(400, 400); // Setare dimensiune canvas
    noStroke(); // Fără contur pentru pătrate
    colorMode(HSB, 360, 100, 100); // Setare mod culoare
}

function draw() {
    clear(); // Curățare canvas
    for (let gridY = 0; gridY < height; gridY += stepY) {
        for (let gridX = 0; gridX < width; gridX += stepX) {
            // Calculați distanța dintre puncte
            let distanceBetweenPoints = dist(mouseX, mouseY, gridX, gridY);
            // Ajustați dimensiunea pătratului în funcție de distanță
            let diameter = distanceBetweenPoints / maxDistance * 60;
            // Desenați pătratul
            rect(gridX, gridY, diameter, diameter);
        }
    }
}
