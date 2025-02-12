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

    for(let i = 0; i > pointArray.length; i++){
        if(i % 2 == 0){
            fill(255, 0 , 0);
            circle(pointArray[i].x, pointArray[i].y, 5);
        } else {
            fill(255, 255 , 255);
            square(pointArray[i].x, pointArray[i].y, 5);
        }
    }
    
    // for (let point of pointArray){
        if (point % 2 === 0){ //if index number (not the value in index) strictly equal to 0
            //     fill(255, 0, 0);
            //     circle(point.x, point.y, 5);
            // } else { //otherwise:
            //     fill(255, 255, 255);
            //     square(point.x, point.y, 5);
            // }
    // } 
        
}


function draw(){
    
    
}
}