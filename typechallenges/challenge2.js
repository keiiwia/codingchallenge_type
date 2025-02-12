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


    for(let point of pointArray){
        let alpha = map(point.x, 25, 375, 255, 0);

        noStroke();
        fill(255, 0, 0, alpha);
        circle(point.x, point.y, 5);
    }
}

function draw(){
}