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


function draw(){
    background(0);
    let amp = 5; //height
    let freq = 1; //frequency of wave
    // beginShape(POINTS);
    noStroke();
    for(let point of pointArray){
        fill(255, 0, 0);
        circle(point.x, point.y + sin(frameCount * freq + point.y * 0.1) * amp, 5);
        // vertex(point.x + sin(frameCount * 0.5 + point.y * 0.1) * 5, point.y);
    }
}
}