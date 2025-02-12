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
        let sizing = map(point.y, 25, 100, 1, 5); //map the sizing; named sizing just in case "size" conflicts w internal p5js stuff
        if(point.x < pointArray.length/2 + 20){ //find half of the dots + visual adjustment -> red
            noStroke();
            fill(255, 0, 0);
            circle(point.x, point.y, sizing);
        } else { //other half -> green
            noStroke();
            fill(0, 255, 0);
            circle(point.x, point.y, sizing);
        }
            
    }
}

function draw(){
}