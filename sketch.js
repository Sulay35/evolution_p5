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

let popI = 100;
let Brate = 0.1;
let Drate = 0.511;
let Rrate = 0.0;

function newGen(){
    // kill
    for(var i = 0; i < blues.length*Drate; i++){
        blues[i].dying = true;
    }
    // Born
    for(var b = 0; b < blues.length*Brate; b++){
        let x = random(width);
        let y= random(height);
        let fam = "blue";
        let blob = new Blob(x, y, fam);
        blues.push(blob);
        
        //blues.push(blob);

    }
     
    // Replicate :
    for(var b = 0; b < blues.length*Rrate; b++){
        let x = blues[i].x+random(2);
        let y = blues[i].y+random(2);
        let fam = "blue";
        let blob = new Blob(x, y, fam);
        blues.push(blob);
        
        //blues.push(blob);

    }
}



function initialize(population){
    for(let i = 0; i < population; i++){
        let x = random(0, width);
        let y = random(0, height); 
        let fam = "blue";

        //if(fam == "blue") blobs.push(new Blob(x, y, fam));
        
        blues.push(new Blob(x,y,fam))
    }

}



setInterval(newGen, 1000);

function setup() {
    createCanvas(windowWidth,windowHeight);
    frameRate(60);

    initialize(popI);

}

let population;
function draw() {
    background(80);
    let fps = floor(frameRate());
    text(fps,10, 15);

    
    // update each blob
    for(var i = 0; i < blues.length; i++){
        blues[i].update();
        if(blues[i].dead == true){
            blues.splice(i,1)
        }
    }
    population = blues.length;
    console.log(population);
}