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

let popI = 10;

let red = {
    initPop:0,  // initial population
    Brate: 0.07, // spontaneous birth rate
    Drate: 0.5, // spontaneous death rate
    Rrate: 0.1, // spontaneous replication rate
}

let blue = {
    initPop:0,  // initial population
    Brate: 0.1, // spontaneous birth rate
    Drate: 0.51, // spontaneous death rate
    Rrate: 0.1, // spontaneous replication rate
    toGreen:0.001, // spontaneous green transformation rate
    toRed:0.2,
}

let green = {
    initPop:0,  // initial population
    Brate: 0.1, // spontaneous birth rate
    Drate: 0.81, // spontaneous death rate
    Rrate: 0.00, // spontaneous replication rate
}

function newGen(){
    //----------------
    // Blues :
    // kill
    for(var i = 0; i < blues.length*blue.Drate; i++){
        blues[i].dying = true;
    }
    // Born
    for(var b = 0; b < blues.length*blue.Brate; b++){
        let x = random(width);
        let y= random(height);
        let fam = "blue";
        let blob = new Blob(x, y, fam);
        blues.push(blob);
    }
    // Replicate :
    for(var b = 0; b < blues.length*blue.Rrate; b++){
        let x = blues[i].x+random(2);
        let y = blues[i].y+random(2);
        let fam = "blue";
        let blob = new Blob(x, y, fam);
        blues.push(blob);
    }
    // turn into green blob
    for(var b = 0; b < blues.length*blue.toGreen; b++){
        let x = blues[i].x+random(2);
        let y = blues[i].y+random(2);
        let fam = "green";
        let blob = new Blob(x, y, fam);
        greens.push(blob);
    }

    for(var b = 0; b < blues.length*blue.toRed; b++){
        let x = blues[i].x + random(2);
        let y = blues[i].x + random(2);
        let fam = "red";
        let blob = new Blob(x, y, fam);
        reds.push(blob)
    }

    //---------------------------------------------------
    // Greens :
    // kill
    for(var i = 0; i < greens.length*green.Drate; i++){
        greens[i].dying = true;
    }
    // Born
    for(var b = 0; b < greens.length*green.Brate; b++){
        let x = random(width);
        let y= random(height);
        let fam = "green";
        let blob = new Blob(x, y, fam);
        greens.push(blob);
    }
     
    // Replicate :
    for(var b = 0; b < greens.length*green.Rrate; b++){
        let x = greens[i].x+random(2);
        let y = greens[i].y+random(2);
        let fam = "green";
        let blob = new Blob(x, y, fam);
        greens.push(blob);
    }

    //---------------------------------------------
    // Reds :
    // Kill
    for(var i = 0; i < reds.length*red.Drate; i++){
        reds[i].dying = true;
    }
    // Born
    for(var b = 0; b < reds.length*red.Brate; b++){
        let x = random(width);
        let y= random(height);
        let fam = "red";
        let blob = new Blob(x, y, fam);
        reds.push(blob);
    }
     
    // Replicate :
    for(var b = 0; b < reds.length*red.Rrate; b++){
        let x = reds[i].x+random(2);
        let y = reds[i].y+random(2);
        let fam = "red";
        let blob = new Blob(x, y, fam);
        reds.push(blob);
    }
}


// Population initialisation
function initialize(population){
    for(let i = 0; i < population; i++){
        let x = random(0, width);
        let y = random(0, height); 
        let fam = "blue";
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
    // Settings 
    background(80);
    let fps = floor(frameRate());
    text(fps,10, 15);


    // update each blob
    // blues
    for(var i = 0; i < blues.length; i++){
        blues[i].update();
        if(blues[i].dead == true){
            blues.splice(i,1)
        }
    }
    // greens
    for(var i = 0; i < greens.length; i++){
        greens[i].update();
        if(greens[i].dead == true){
            greens.splice(i,1)
        }
    }

    // reds 
    for(var i; i < reds.length; i++){
        reds[i].update();
        if(reds[i].dead == true){
            reds.splice(i, 1)
        }
    }


    population = blues.length;
    console.log(population);
}