function setup() {
    createCanvas(300, 300);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(0);
    fill(255);
    rect(50,50,100,100);
    rect(50,250,100,100);
    rect(250,50,100,100);
    rect(250,250,100,100);
}