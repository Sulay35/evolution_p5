function createTest(){
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




// arrays of data
let blobs = [];

let reds = [];
let blues = [];
let greens = [];

// variables d'évolution :
let popI = 31;
let Brate = 0.0;
let Drate = 0.2;
let Rrate = 0.3;

function newGen(){
    // kill
    for(var i = 0; i < blues.length*Drate; i++){
        blobs.splice(i, 1);
    }
    // Born
    for(var b = 0; b < blues.length*Brate; b++){
        let x = random(width);
        let y= random(height);
        let fam = "blue";
        let blob = new Blob(x, y, fam);
        blobs.push(blob);
        
        //blues.push(blob);

    }
     
    // Replicate :
    for(var b = 0; b < blues.length*Rrate; b++){
        let x = blues[i].x+random(2);
        let y = blues[i].y+random(2);
        let fam = "blue";
        let blob = new Blob(x, y, fam);
        blobs.push(blob);
        
        //blues.push(blob);

    }
}



function initialize(population){
    for(let i = 0; i < population; i++){
        let x = random(0, width);
        let y = random(0, height); 
        let fam = "blue";

        if(fam == "blue") blues.push(new Blob(x, y, fam));
        
        blobs.push(new Blob(x,y,fam))
    }

}



setInterval(newGen, 500)
function setup() {
    createCanvas(400,400);
    frameRate(60);

    initialize(popI);
}
let population;
function draw() {
    background(80);
    let fps = floor(frameRate());
    text(fps,10, 15);

    
    // update each blob
    for(var i = 0; i < blobs.length; i++){
        blobs[i].update();
    }
    population = blobs.length;
    console.log(population);
}