let blobs = [];
function setup() {
    createCanvas(400,400);
    frameRate(60)
    for(var i = 0; i < 100; i++){
        let x = random(0, width);
        let y = random(0, height);
        blobs.push(new Blob(x, y));
    
    }
}

function draw() {
    background(80);
    let fps = floor(frameRate());
    text(fps,10, 15)
    for(var i = 0; i < blobs.length; i++){
        blobs[i].update()
    }
}