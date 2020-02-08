let blob;
function setup() {
    createCanvas(400,400);
    blob = new Blob(200,200)
}


function draw() {
    background(80);
    blob.update();
}