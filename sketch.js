let blobs = [];

let reds = [];
let blues = [];
let greens = [];


function setup() {
    createCanvas(400,400);
    frameRate(60)
    for(var i = 0; i < 100; i++){
        let x = random(0, width);
        let y = random(0, height);
        let fam = random(["red", "green", "blue"]);
        if(fam == "red") reds.push(new Blob(x, y, fam));
        if(fam == "blue") blues.push(new Blob(x, y, fam));
        if(fam == "green") greens.push(new Blob(x, y, fam));
        blobs.push(new Blob(x, y, fam));
        
    }
}

function draw() {
    background(80);
    let fps = floor(frameRate());
    text(fps,10, 15)
    for(var i = 0; i < blobs.length; i++){
        blobs[i].update();
    }
    
}