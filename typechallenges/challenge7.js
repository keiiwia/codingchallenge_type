let font;
const word = "MOO";
let pointArray;
let sizes = [];

function preload(){
    font = loadFont("../comicsans.ttf");
}

function setup(){
    createCanvas(400, 200).parent("challenge");
    background(0);
    pointArray = font.textToPoints(word, 20, 150, 135, {sampleFactor: 0.2,});
    textAlign(CENTER);
    size = new Array(pointArray.length).fill(10);


function draw(){
    background(0); //repeating
    
    let hover = 25;
    let og = 5;

    for (let point of pointArray){
        let distance = dist(mouseX, mouseY, point.x, point.y);

        let tolerance = (distance < 25) ? hover : og;
        sizes[point] = lerp(sizes[point], tolerance, 0.04);

        circle(point.x, point.y, sizes[point]);
    }
}
}