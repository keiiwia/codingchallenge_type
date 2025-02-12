let font;
const word = "MOO";
let pointArray;

function preload(){
    font = loadFont("../comicsans.ttf");
}

function setup(){
    createCanvas(400, 200).parent("challenge");
    background(0);
    pointArray = font.textToPoints(word, 20, 150, 135, {sampleFactor: 0.2,});
    textAlign(CENTER);
}

function draw(){
    for(let point of pointArray){
        noStroke();
        fill(0, 255, 0);
        circle(point.x, point.y, 5);
    }
}